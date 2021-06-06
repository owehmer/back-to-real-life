package com.example.userapi.dao;

import com.example.userapi.model.AccessLevel;
import com.example.userapi.model.User;
import java.util.Optional;
import java.util.UUID;

public interface UserDao {
    Optional<User> GetSpecificUser(UUID id);

    Optional<User> AddUser(UUID id, String username, AccessLevel accessLevel);
}
