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
formatter.uri("file:src/test/resources/features/Smoke/UserAuthentication.feature");
formatter.feature({
  "name": "User Signup and Login API",
  "description": "  This feature validates user registration and login flows including success\n  and failure paths.",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Smoke"
    },
    {
      "name": "@User"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "the user API is running",
  "keyword": "Given "
});
formatter.match({
  "location": "apiStepDefinition.UserAuthTest.theUserAPIIsRunning()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Successful user signup",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Smoke"
    },
    {
      "name": "@User"
    },
    {
      "name": "@Positive"
    }
  ]
});
formatter.step({
  "name": "I send a POST user request to \"/signup\" with:",
  "rows": [
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "apiStepDefinition.UserAuthTest.i_send_a_post_user_request_to_with(java.lang.String,io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user response status should be 201",
  "keyword": "Then "
});
formatter.match({
  "location": "apiStepDefinition.UserAuthTest.the_user_response_status_should_be(int)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected status code \u003c201\u003e but was \u003c400\u003e.\n\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:73)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrapNoCoerce.callConstructor(ConstructorSite.java:108)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:57)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:263)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:277)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:512)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:125)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:139)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:696)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.this$2$validateResponseIfRequired(ResponseSpecificationImpl.groovy)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:569)\r\n\tat org.codehaus.groovy.runtime.callsite.PlainObjectMetaMethodSite.doInvoke(PlainObjectMetaMethodSite.java:43)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:198)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:62)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:49)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:171)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:185)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:135)\r\n\tat io.restassured.specification.ResponseSpecification$statusCode$0.callCurrent(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:49)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:171)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:185)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:143)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.statusCode(ValidatableResponseOptionsImpl.java:89)\r\n\tat apiStepDefinition.UserAuthTest.the_user_response_status_should_be(UserAuthTest.java:41)\r\n\tat ✽.the user response status should be 201(file:///C:/Projects/Book/BookStore/src/test/resources/features/Smoke/UserAuthentication.feature:16)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "the user response should contain:",
  "rows": [
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "apiStepDefinition.UserAuthTest.the_user_response_should_contain(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "the user API is running",
  "keyword": "Given "
});
formatter.match({
  "location": "apiStepDefinition.UserAuthTest.theUserAPIIsRunning()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Signup with existing username",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Smoke"
    },
    {
      "name": "@User"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "a user already exists with:",
  "rows": [
    {},
    {}
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "apiStepDefinition.UserAuthTest.a_user_already_exists_with(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send a POST user request to \"/signup\" with:",
  "rows": [
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "apiStepDefinition.UserAuthTest.i_send_a_post_user_request_to_with(java.lang.String,io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user response status should be 400",
  "keyword": "Then "
});
formatter.match({
  "location": "apiStepDefinition.UserAuthTest.the_user_response_status_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user response should contain:",
  "rows": [
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "apiStepDefinition.UserAuthTest.the_user_response_should_contain(io.cucumber.datatable.DataTable)"
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
  "name": "the user API is running",
  "keyword": "Given "
});
formatter.match({
  "location": "apiStepDefinition.UserAuthTest.theUserAPIIsRunning()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Successful login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Smoke"
    },
    {
      "name": "@User"
    },
    {
      "name": "@Positive1"
    }
  ]
});
formatter.step({
  "name": "I send a POST user request to \"/login\" with:",
  "rows": [
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "apiStepDefinition.UserAuthTest.i_send_a_post_user_request_to_with(java.lang.String,io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user response status should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "apiStepDefinition.UserAuthTest.the_user_response_status_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user response should contain a token",
  "keyword": "And "
});
formatter.match({
  "location": "apiStepDefinition.UserAuthTest.the_user_response_should_contain_a_token()"
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
  "name": "the user API is running",
  "keyword": "Given "
});
formatter.match({
  "location": "apiStepDefinition.UserAuthTest.theUserAPIIsRunning()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with invalid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Smoke"
    },
    {
      "name": "@User"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "I send a POST user request to \"/login\" with:",
  "rows": [
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "apiStepDefinition.UserAuthTest.i_send_a_post_user_request_to_with(java.lang.String,io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user response status should be 401",
  "keyword": "Then "
});
formatter.match({
  "location": "apiStepDefinition.UserAuthTest.the_user_response_status_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user response should contain:",
  "rows": [
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "apiStepDefinition.UserAuthTest.the_user_response_should_contain(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
});