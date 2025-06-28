@regression
  @createBook
Feature: Create a new book

  Background:
    Given the API is running
    And I have a valid authentication token

  @Positive
  Scenario: Successfully create a book with valid input
    When I send a POST request to "/books/" with:
      | title         | author        | price |
      | The Alchemist | Paulo Coelho | 399.0 |
    Then the response status should be 201
    And the response should contain:
      | title  | The Alchemist |
      | author | Paulo Coelho  |
    And I store the book ID

  @Positive
  Scenario: Create a book with special characters in title and author
    When I send a POST request to "/books/" with:
      | title         | author          | price |
      | L'étranger    | Albert Camus    | 299.0 |
    Then the response status should be 201
    And the response should contain:
      | title  | L'étranger    |
      | author | Albert Camus |

  @Negative
  Scenario: Create a book without a title
    When I send a POST request to "/books/" with:
      | author        | price |
      | Paulo Coelho  | 399.0 |
    Then the response status should be 201
    And Title in response should be null


  @Negative
  Scenario: Create a book without an author
    When I send a POST request to "/books/" with:
      | title         | price |
      | The Alchemist | 399.0 |
    Then the response status should be 201
    And Author in response should be null

  @Negative
  Scenario: Create a book without a price
    When I send a POST request to "/books/" with:
      | title         | author        |
      | The Alchemist | Paulo Coelho  |
    Then the response status should be 201
    And Price in response should be 0

  @Negative
  Scenario: Create a book with negative price
    When I send a POST request to "/books/" with:
      | title         | author        | price  |
      | The Alchemist | Paulo Coelho  | -10.0  |
    Then the response status should be 400

  @Negative
  Scenario: Create a book with non-numeric price
    When I send a POST request to "/books/" with:
      | title         | author        | price  |
      | The Alchemist | Paulo Coelho  | free   |
    Then the response status should be 400

  @Negative
  Scenario: Create a book with empty title
    When I send a POST request to "/books/" with:
      | title | author        | price |
      |       | Paulo Coelho  | 399.0 |
    Then the response status should be 400

  @Negative
  Scenario: Create a book with empty author
    When I send a POST request to "/books/" with:
      | title         | author | price |
      | The Alchemist |        | 399.0 |
    Then the response status should be 400

  @Negative
  Scenario: Create a book with malformed JSON payload
    When I send a malformed POST request to "/books/"
    Then the response status should be 400

  @Negative
  Scenario: Send request with incorrect content type
    When I send a POST request to "/books/" with content type "text/plain" and body:
    """
    title=The Alchemist&author=Paulo Coelho&price=399.0
    """
    Then the response status should be 415

  @Negative
  Scenario: Create a book with duplicate title and author
    Given I send a POST request to "/books/" with:
      | title         | author        | price |
      | The Alchemist | Paulo Coelho | 399.0 |
    When I send a POST request to "/books/" with:
      | title         | author        | price |
      | The Alchemist | Paulo Coelho | 399.0 |
    Then the response status should be 409
