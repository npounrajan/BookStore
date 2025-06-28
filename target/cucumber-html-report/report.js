$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Smoke/Bookmanagement.feature");
formatter.feature({
  "name": "Book Management API",
  "description": "  As an consumer\n  I want to manage books (create, read, update, delete)\n  So that I can maintain the book catalog",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "the API is running",
  "keyword": "Given "
});
formatter.match({
  "location": "apiStepDefinition.BookManagementTest.the_api_is_running()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have a valid authentication token",
  "keyword": "And "
});
formatter.match({
  "location": "apiStepDefinition.BookManagementTest.i_have_a_valid_authentication_token()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Create a new book",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "I send a POST request to \"/books/\" with:",
  "rows": [
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "apiStepDefinition.BookManagementTest.i_send_a_post_request_with(java.lang.String,io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response status should be 201",
  "keyword": "Then "
});
formatter.match({
  "location": "apiStepDefinition.BookManagementTest.the_response_status_should_be(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response should contain:",
  "rows": [
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "apiStepDefinition.BookManagementTest.the_response_should_contain(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I store the book ID",
  "keyword": "And "
});
formatter.match({
  "location": "apiStepDefinition.BookManagementTest.i_store_the_book_id()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "the API is running",
  "keyword": "Given "
});
formatter.match({
  "location": "apiStepDefinition.BookManagementTest.the_api_is_running()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have a valid authentication token",
  "keyword": "And "
});
formatter.match({
  "location": "apiStepDefinition.BookManagementTest.i_have_a_valid_authentication_token()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Get the book by ID",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "I send a GET request to \"/books/{bookId}\"",
  "keyword": "When "
});
formatter.match({
  "location": "apiStepDefinition.BookManagementTest.i_send_a_get_request(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response status should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "apiStepDefinition.BookManagementTest.the_response_status_should_be(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response should contain:",
  "rows": [
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "apiStepDefinition.BookManagementTest.the_response_should_contain(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "the API is running",
  "keyword": "Given "
});
formatter.match({
  "location": "apiStepDefinition.BookManagementTest.the_api_is_running()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have a valid authentication token",
  "keyword": "And "
});
formatter.match({
  "location": "apiStepDefinition.BookManagementTest.i_have_a_valid_authentication_token()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Update the book",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "I send a PUT request to \"/books/{bookId}\" with:",
  "rows": [
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "apiStepDefinition.BookManagementTest.i_send_a_put_request_with(java.lang.String,io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response status should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "apiStepDefinition.BookManagementTest.the_response_status_should_be(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response should contain:",
  "rows": [
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "apiStepDefinition.BookManagementTest.the_response_should_contain(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "the API is running",
  "keyword": "Given "
});
formatter.match({
  "location": "apiStepDefinition.BookManagementTest.the_api_is_running()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have a valid authentication token",
  "keyword": "And "
});
formatter.match({
  "location": "apiStepDefinition.BookManagementTest.i_have_a_valid_authentication_token()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Get all books",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "I send a GET request to \"/books/\"",
  "keyword": "When "
});
formatter.match({
  "location": "apiStepDefinition.BookManagementTest.i_send_a_get_request(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response status should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "apiStepDefinition.BookManagementTest.the_response_status_should_be(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response should include a book with title \"Alchemist 2.0\"",
  "keyword": "And "
});
formatter.match({
  "location": "apiStepDefinition.BookManagementTest.the_response_should_include_a_book_with_title(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "the API is running",
  "keyword": "Given "
});
formatter.match({
  "location": "apiStepDefinition.BookManagementTest.the_api_is_running()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have a valid authentication token",
  "keyword": "And "
});
formatter.match({
  "location": "apiStepDefinition.BookManagementTest.i_have_a_valid_authentication_token()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Delete the book",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "I send a DELETE request to \"/books/{bookId}\"",
  "keyword": "When "
});
formatter.match({
  "location": "apiStepDefinition.BookManagementTest.i_send_a_delete_request(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response status should be 204",
  "keyword": "Then "
});
formatter.match({
  "location": "apiStepDefinition.BookManagementTest.the_response_status_should_be(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "the API is running",
  "keyword": "Given "
});
formatter.match({
  "location": "apiStepDefinition.BookManagementTest.the_api_is_running()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have a valid authentication token",
  "keyword": "And "
});
formatter.match({
  "location": "apiStepDefinition.BookManagementTest.i_have_a_valid_authentication_token()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Get the deleted book",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "I send a GET request to \"/books/{bookId}\"",
  "keyword": "When "
});
formatter.match({
  "location": "apiStepDefinition.BookManagementTest.i_send_a_get_request(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response status should be 404",
  "keyword": "Then "
});
formatter.match({
  "location": "apiStepDefinition.BookManagementTest.the_response_status_should_be(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
});