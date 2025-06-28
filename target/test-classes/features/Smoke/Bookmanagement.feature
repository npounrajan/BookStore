@Smoke
Feature: Book Management API

  As an consumer
  I want to manage books (create, read, update, delete)
  So that I can maintain the book catalog

  Background:
    Given the API is running
    And I have a valid authentication token

  Scenario: Create a new book
    When I send a POST request to "/books/" with:
      | title         | author        | price |
      | The Alchemist | Paulo Coelho | 399.0 |
    Then the response status should be 201
    And the response should contain:
      | title         | The Alchemist |
      | author        | Paulo Coelho  |
    And I store the book ID

  Scenario: Get the book by ID
    When I send a GET request to "/books/{bookId}"
    Then the response status should be 200
    And the response should contain:
      | title  | The Alchemist |
      | author | Paulo Coelho  |

  Scenario: Update the book
    When I send a PUT request to "/books/{bookId}" with:
      | title         | author        | price |
      | Alchemist 2.0 | Paulo Coelho  | 450.0 |
    Then the response status should be 200
    And the response should contain:
      | title  | Alchemist 2.0 |

  Scenario: Get all books
    When I send a GET request to "/books/"
    Then the response status should be 200
    And the response should include a book with title "Alchemist 2.0"

  Scenario: Delete the book
    When I send a DELETE request to "/books/{bookId}"
    Then the response status should be 204

  Scenario: Get the deleted book
    When I send a GET request to "/books/{bookId}"
    Then the response status should be 404
