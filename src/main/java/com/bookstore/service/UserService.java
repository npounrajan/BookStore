package com.bookstore.service;

import com.bookstore.model.User;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class UserService {
    private final Map<String, String> users = new HashMap<>();

    public boolean signup(User user) {
        if (users.containsKey(user.getUsername())) {
            return false;
        }
        users.put(user.getUsername(), user.getPassword());
        return true;
    }

    public boolean login(User user) {
        return users.containsKey(user.getUsername())
                && users.get(user.getUsername()).equals(user.getPassword());
    }

    // Optional: return a dummy token
    public String generateToken(String username) {
        return Base64.getEncoder().encodeToString((username + ":token").getBytes());
    }
}
