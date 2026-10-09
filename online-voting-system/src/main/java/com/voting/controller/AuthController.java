package com.voting.controller;

import com.voting.entity.User;
import com.voting.repository.UserRepository;
import com.voting.security.JwtUtil;
import com.voting.service.AuthService;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;

import org.springframework.security.crypto.password.PasswordEncoder;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")

@CrossOrigin("*")

public class AuthController {

    @Autowired
    private AuthService authService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtil jwtUtil;

    // REGISTER API
    @PostMapping("/register")

    public String register(
            @RequestBody User user
    ) {

        return authService.register(user);
    }

    // LOGIN API
    @PostMapping("/login")

    public ResponseEntity<?> loginUser(
            @RequestBody User loginData
    ) {

        User user = userRepository
                .findByEmail(loginData.getEmail())
                .orElse(null);

        if (user == null) {

            return ResponseEntity
                    .badRequest()
                    .body("User Not Found");
        }

        // CHECK PASSWORD
        boolean validPassword =
                passwordEncoder.matches(
                        loginData.getPassword(),
                        user.getPassword()
                );

        if (!validPassword) {

            return ResponseEntity
                    .badRequest()
                    .body("Invalid Password");
        }

        // GENERATE JWT TOKEN
        String token =
                jwtUtil.generateToken(
                        user.getEmail()
                );

        // RESPONSE OBJECT
        Map<String, Object> response =
                new HashMap<>();

        response.put("token", token);

        response.put("role", user.getRole());

        response.put("email", user.getEmail());

        response.put("name", user.getName());

        return ResponseEntity.ok(response);
    }
}