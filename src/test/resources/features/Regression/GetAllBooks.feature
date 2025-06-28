@regression
  @getAllBooks
Feature: Get a book by ID

  Background:
    Given the API is running
    And I have a valid authentication token
    And I send a POST request to "/books/" with:
      | title         | author        | price |
      | The Alchemist | Paulo Coelho | 399.0 |

  @Positive
  Scenario: Successfully retrieve a book by valid ID
    When I send a GET request to "/books/{bookId}"
    Then the response status should be 200
    And the response should contain:
      | title  | The Alchemist |
      | author | Paulo Coelho  |

  @Positive
  Scenario: Verify response contains price field as well
    When I send a GET request to "/books/{bookId}"
    Then the response status should be 200
    And the response should contain field "price"

  @Negative
  Scenario: Retrieve a book using non-existent ID
    When I send a GET request to "/books/999999"
    Then the response status should be 404

  @Negative
  Scenario: Retrieve a book with invalid (non-numeric) ID
    When I send a GET request to "/books/invalid-id"
    Then the response status should be 400

  @Negative
  Scenario: Retrieve a book with missing ID
    When I send a GET request to "/books/"
    Then the response status should be 405

  @Negative
  Scenario: Retrieve a book with empty ID
    When I send a GET request to "/books/ "
    Then the response status should be 400

