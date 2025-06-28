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
