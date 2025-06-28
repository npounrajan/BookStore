package com.bookstore.service;

import com.bookstore.model.Book;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class BookService {
    private final Map<Integer, Book> bookStore = new HashMap<>();
    private int idCounter = 1;

    public Book createBook(Book book) {
        book.setId(idCounter++);
        bookStore.put(book.getId(), book);
        return book;
    }

    public Book updateBook(int id, Book book) {
        if (bookStore.containsKey(id)) {
            book.setId(id);
            bookStore.put(id, book);
            return book;
        }
        return null;
    }

    public boolean deleteBook(int id) {
        return bookStore.remove(id) != null;
    }

    public Book getBook(int id) {
        return bookStore.get(id);
    }

    public List<Book> getAllBooks() {
        return new ArrayList<>(bookStore.values());
    }
}
