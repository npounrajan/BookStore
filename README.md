# Bookstore API

A simple RESTful API for managing a bookstore, built with Spring Boot. Includes Cucumber-based API tests.

## Features

- User signup and login (with dummy token)
- CRUD operations for books (Create, Read, Update, Delete)
- Cucumber BDD tests for API endpoints

## Project Structure

```
bookstore-api/
├── src/
│   ├── main/
│   │   ├── java/com/bookstore/
│   │   │   ├── controller/      # REST controllers
│   │   │   ├── model/           # Data models (Book, User)
│   │   │   └── service/         # Business logic
│   │   └── resources/           # application.properties
│   └── test/
│       ├── java/                # Cucumber step definitions and runners
│       └── resources/           # Feature files
├── pom.xml                      # Maven configuration
└── ...
```

## API Endpoints

### Authentication

- `POST /signup`  
  Create a new user.  
  **Body:** `{ "username": "...", "password": "..." }`

- `POST /login`  
  Login and receive a token.  
  **Body:** `{ "username": "...", "password": "..." }`

### Books

- `POST /books/`  
  Create a new book.  
  **Body:** `{ "title": "...", "author": "...", "price": 0.0 }`

- `GET /books/{book_id}`  
  Get a book by ID.

- `PUT /books/{book_id}`  
  Update a book by ID.  
  **Body:** `{ "title": "...", "author": "...", "price": 0.0 }`

- `DELETE /books/{book_id}`  
  Delete a book by ID.

- `GET /books/`  
  List all books.

## Running the Application

1. **Build the project:**
   ```sh
   ./mvnw clean install
   ```

2. **Run the application:**
   ```sh
   ./mvnw spring-boot:run
   ```
   The API will be available at `http://localhost:8090`.

## Running Tests

- **Smoke tests:**
  ```sh
  ./mvnw test -P Smoke
  ```

- **Regression tests:**
  ```sh
  ./mvnw test -P Regression
  ```

Test results and Cucumber reports are generated in `target/cucumber-reports/`.

## Configuration

Application properties are set in [`src/main/resources/application.properties`](bookstore-api/src/main/resources/application.properties):

```
server.port=8090
logging.level.org.springframework.web=DEBUG
```

## Notes

- Authentication uses a dummy token for demonstration.
- Book and user data are stored in-memory (not persisted).
- See feature files in [`src/test/resources/features`](bookstore-api/src/test/resources/features) for API behavior and test scenarios.

---


## Cucumber Test Suite Documentation

This project uses [Cucumber](https://cucumber.io/) for Behavior-Driven Development (BDD) API testing. Below is a detailed, file-wise explanation of how the Cucumber tests are structured and implemented.

---

### 1. Feature Files (`.feature`)

**Location:** `src/test/resources/features/`

Feature files describe test scenarios in [Gherkin](https://cucumber.io/docs/gherkin/) syntax. Each file targets a specific aspect of the API:

- **Smoke/Bookmanagement.feature**  
  End-to-end smoke tests for book management (create, read, update, delete).
- **Regression/CreateBook.feature, DeleteBook.feature, GetAllBooks.feature, UpdateBook.feature**  
  Regression tests for individual API operations, including positive and negative scenarios (e.g., missing fields, invalid data, duplicates).

---

### 2. Step Definitions

**Location:** `src/test/java/apiStepDefinition/BookManagementTest.java`

Step definitions map Gherkin steps to Java code using Cucumber annotations (`@Given`, `@When`, `@Then`, `@And`).  
Key responsibilities:
- Send HTTP requests to the API using RestAssured.
- Handle dynamic data (e.g., storing and reusing `bookId`).
- Delegate request building and assertions to helper classes.

---

### 3. API Helper / Page Object

**Location:** `src/test/java/apiObjectRepository/ApiPage.java`

This class provides reusable methods for:
- Building request bodies from Cucumber tables.
- Sending HTTP requests (POST, GET, PUT, DELETE).
- Handling authentication tokens and endpoint formatting.
- Supporting negative testing (malformed requests, invalid content types).

---

### 4. Assertions

**Location:** `src/test/java/apiAssertions/JsonResponseAssertion.java`

This class contains assertion methods for:
- Validating HTTP status codes.
- Checking JSON response content and field values.
- Verifying error handling and response structure.

---

### 5. Test Runners

**Location:** `src/test/java/runner/`

- **ApiSmokeRunner.java**  
  Runs smoke tests (features under `features/Smoke`) using the `@Smoke` tag.
- **ApiRegressionRunner.java**  
  Runs regression tests (features under `features/Regression`) using the `@regression` tag.

Both runners configure Cucumber plugins for reporting and rerun failed scenarios.

---

### 6. Failed Test Report

**Location:** `src/test/resources/projectFailedReport/failed-API-Report/failed.txt`

This file stores references to failed scenarios for easy rerun and debugging.

---

## How It All Works Together

1. **Feature files** define test scenarios in plain English.
2. **Step definitions** map those scenarios to Java code, using helper classes for API calls and assertions.
3. **ApiPage** builds and sends requests to the API.
4. **JsonResponseAssertion** checks the responses for correctness.
5. **Runners** execute the tests and generate reports.

---

## Example Test Flow

- A scenario in `CreateBook.feature` says:  
  *When I send a POST request to "/books/" with: ...*  
  This triggers the corresponding method in `BookManagementTest.java`, which uses `ApiPage` to send the request and stores the response.
- The next step, *Then the response status should be 201*, calls an assertion in `JsonResponseAssertion`.
- This pattern repeats for all scenarios, covering both happy paths and error cases.

---

## Summary

The Cucumber test suite is modular, readable, and covers both functional and negative testing for the Bookstore API, with clear separation between scenario definition, step implementation, API interaction,
