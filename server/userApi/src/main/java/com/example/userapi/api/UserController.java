package com.example.userapi.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.userapi.model.User;
import com.example.userapi.service.UserService;

import java.util.UUID;

@RequestMapping("api/v1/user")
@RestController
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping(path = "{id}")
    public User GetUser(@PathVariable("id") UUID id) throws Exception {
        return userService.GetUser(id);
    }

    @PostMapping(path = "addUser")
    public User AddNormalUser(@RequestBody User user) throws Exception {
        return userService.AddNormalUser(user.getUsername());
    }

    @PostMapping(path = "addAdminUser")
    public User AddAdminUser(@RequestBody User user) throws Exception {
        return userService.AddAdminUser(user.getUsername());
    }
}
