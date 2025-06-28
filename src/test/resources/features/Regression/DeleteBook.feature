@regression
  @deleteBook
Feature: Delete a book by ID

  Background:
    Given the API is running
    And I have a valid authentication token
    And I send a POST request to "/books/" with:
      | title         | author        | price |
      | The Alchemist | Paulo Coelho | 399.0 |

  @Positive
  Scenario: Successfully delete a book by valid ID
    When I send a DELETE request to "/books/{bookId}"
    Then the response status should be 204

  @Positive
  Scenario: Verify deleted book is no longer retrievable
    Given I send a DELETE request to "/books/{bookId}"
    When I send a GET request to "/books/{bookId}"
    Then the response status should be 404

  @Negative
  Scenario: Delete a book using non-existent ID
    When I send a DELETE request to "/books/999999"
    Then the response status should be 404

  @Negative
  Scenario: Delete a book with invalid (non-numeric) ID
    When I send a DELETE request to "/books/invalid-id"
    Then the response status should be 400

  @Negative
  Scenario: Delete a book with missing ID
    When I send a DELETE request to "/books/"
    Then the response status should be 405

  @Negative
  Scenario: Delete a book with empty ID
    When I send a DELETE request to "/books/ "
    Then the response status should be 400

  @Negative
  Scenario: Delete the same book twice
    Given I send a DELETE request to "/books/{bookId}"
    When I send a DELETE request to "/books/{bookId}"
    Then the response status should be 404
