package com.example.userapi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.userapi.dao.UserDao;
import com.example.userapi.model.AccessLevel;
import com.example.userapi.model.User;
import java.util.UUID;

@Service
public class UserService {
    private final UserDao userDao;

    @Autowired
    public UserService(UserDao userDao) {
        this.userDao = userDao;
    }

    public User AddNormalUser(String username) throws Exception {
        var id = UUID.randomUUID();
        var newUser = userDao.AddUser(id, username, AccessLevel.User).orElseThrow();

        return newUser;
    }

    public User AddAdminUser(String username) throws Exception {
        var id = UUID.randomUUID();
        var newUser = userDao.AddUser(id, username, AccessLevel.Admin).orElseThrow();

        return newUser;
    }

    public User GetUser(UUID id) throws Exception {
        return userDao.GetSpecificUser(id).orElseThrow();
    }
}
