@regression
@updateBook
Feature: Update an existing book

  Background:
    Given the API is running
    And I have a valid authentication token
    And I send a POST request to "/books/" with:
      | title         | author        | price |
      | The Alchemist | Paulo Coelho | 399.0 |

  @Positive
  Scenario: Successfully update a book with valid input
    When I send a PUT request to "/books/{bookId}" with:
      | title         | author        | price |
      | Alchemist 2.0 | Paulo Coelho  | 450.0 |
    Then the response status should be 200
    And the response should contain:
      | title  | Alchemist 2.0 |
      | author | Paulo Coelho  |

  @Positive
  Scenario: Update only the title of the book
    When I send a PUT request to "/books/{bookId}" with:
      | title         | author        | price |
      | The Legend    | Paulo Coelho  | 450.0 |
    Then the response status should be 200
    And the response should contain:
      | title  | The Legend |

  @Positive
  Scenario: Update with unicode characters in title
    When I send a PUT request to "/books/{bookId}" with:
      | title        | author        | price |
      | 百年孤独 2.0 | Gabriel García | 500.0 |
    Then the response status should be 200
    And the response should contain:
      | title | 百年孤独 2.0 |

  @Negative
  Scenario: Update a non-existent book ID
    When I send a PUT request to "/books/999999" with:
      | title         | author        | price |
      | New Title     | Some Author   | 300.0 |
    Then the response status should be 404

  @Negative
  Scenario: Update book with missing title field
    When I send a PUT request to "/books/{bookId}" with:
      | author        | price |
      | Paulo Coelho  | 450.0 |
    Then the response status should be 400

  @Negative
  Scenario: Update book with missing author field
    When I send a PUT request to "/books/{bookId}" with:
      | title         | price |
      | Alchemist 2.0 | 450.0 |
    Then the response status should be 400

  @Negative
  Scenario: Update book with missing price field
    When I send a PUT request to "/books/{bookId}" with:
      | title         | author       |
      | Alchemist 2.0 | Paulo Coelho |
    Then the response status should be 400

  @Negative
  Scenario: Update book with empty title
    When I send a PUT request to "/books/{bookId}" with:
      | title | author        | price |
      |       | Paulo Coelho  | 450.0 |
    Then the response status should be 400

  @Negative
  Scenario: Update book with negative price
    When I send a PUT request to "/books/{bookId}" with:
      | title         | author        | price  |
      | Alchemist 2.0 | Paulo Coelho  | -100.0 |
    Then the response status should be 400

  @Negative
  Scenario: Update book with non-numeric price
    When I send a PUT request to "/books/{bookId}" with:
      | title         | author        | price |
      | Alchemist 2.0 | Paulo Coelho  | forty |
    Then the response status should be 400
