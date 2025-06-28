@Smoke
@User
Feature: User Signup and Login API

  This feature validates user registration and login flows including success
  and failure paths.

  Background:
    Given the user API is running

  @Positive
  Scenario: Successful user signup
    When I send a POST user request to "/signup" with:
      | username | alice   |
      | password | pass123 |
    Then the user response status should be 201
    And the user response should contain:
      | message | User created successfully |

  @Negative
  Scenario: Signup with existing username
    Given a user already exists with:
      | username | alice   |
      | password | pass123 |
    When I send a POST user request to "/signup" with:
      | username | alice   |
      | password | pass123 |
    Then the user response status should be 400
    And the user response should contain:
      | error | Username already exists |

  @Positive1
  Scenario: Successful login
    When I send a POST user request to "/login" with:
      | username | alice   |
      | password | pass123 |
    Then the user response status should be 200
    And the user response should contain a token

  @Negative
  Scenario: Login with invalid credentials
    When I send a POST user request to "/login" with:
      | username | alice    |
      | password | wrongpwd |
    Then the user response status should be 401
    And the user response should contain:
      | error | Invalid username or password |
