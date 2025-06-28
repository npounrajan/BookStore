package com.bookstore.controller;

import com.bookstore.model.Book;
import com.bookstore.service.BookService;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/books")
public class BookController {

    private final BookService service;

    public BookController(BookService service) {
        this.service = service;
    }

    @PostMapping("/")
    public ResponseEntity<Book> createBook(@RequestBody Book book) {
        return new ResponseEntity<>(service.createBook(book), HttpStatus.CREATED);
    }

    @PutMapping("/{book_id}")
    public ResponseEntity<Book> updateBook(@PathVariable int book_id, @RequestBody Book book) {
        Book updated = service.updateBook(book_id, book);
        return updated != null ? ResponseEntity.ok(updated) :
                ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{book_id}")
    public ResponseEntity<Void> deleteBook(@PathVariable int book_id) {
        return service.deleteBook(book_id) ? ResponseEntity.noContent().build() :
                ResponseEntity.notFound().build();
    }

    @GetMapping("/{book_id}")
    public ResponseEntity<Book> getBook(@PathVariable int book_id) {
        Book book = service.getBook(book_id);
        return book != null ? ResponseEntity.ok(book) :
                ResponseEntity.notFound().build();
    }

    @GetMapping("/")
    public ResponseEntity<List<Book>> getAllBooks() {
        return ResponseEntity.ok(service.getAllBooks());
    }
}
