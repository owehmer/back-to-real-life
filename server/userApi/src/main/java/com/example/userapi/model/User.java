package com.example.userapi.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.UUID;


public class User {
    private final UUID Id;

    private final String Username;

    private final AccessLevel AccessLevel;

    public User(
            UUID id,
            String username,
            AccessLevel accessLevel) {
        Id = id;
        Username = username;
        AccessLevel = accessLevel;
    }

    public UUID getId() {
        return Id;
    }

    public String getUsername() {
        return Username;
    }

    public AccessLevel getAccessLevel() {
        return AccessLevel;
    }
}
