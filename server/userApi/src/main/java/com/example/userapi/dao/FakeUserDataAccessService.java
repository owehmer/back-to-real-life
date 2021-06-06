package com.example.userapi.dao;

import org.springframework.stereotype.Repository;

import com.example.userapi.model.AccessLevel;
import com.example.userapi.model.User;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public class FakeUserDataAccessService implements UserDao {
    private final List<User> allUsers = new ArrayList<>();

    @Override
    public Optional<User> GetSpecificUser(UUID id) {
        return allUsers.stream()
                .filter(user -> user.getId().equals(id))
                .findFirst();
    }

    @Override
    public Optional<User> AddUser(UUID id, String username, AccessLevel accessLevel) {
        var newUser = new User(id, username, accessLevel);
        allUsers.add(newUser);

        return Optional.of(newUser);
    }
}
