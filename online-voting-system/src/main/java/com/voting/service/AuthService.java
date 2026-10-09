package com.voting.service;

import com.voting.entity.User;

import com.voting.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.crypto.password.PasswordEncoder;

import org.springframework.stereotype.Service;

@Service

public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // REGISTER
    public String register(
            User user
    ) {

        // EMAIL EXISTS
        if (

            userRepository.existsByEmail(
                    user.getEmail()
            )

        ) {

            return "Email Already Registered";
        }

        // USN EXISTS
        if (

            userRepository.existsByUsn(
                    user.getUsn()
            )

        ) {

            return "USN Already Registered";
        }

        // ENCODE PASSWORD
        user.setPassword(

                passwordEncoder.encode(
                        user.getPassword()
                )
        );

        // SAVE USER
        userRepository.save(user);

        return "User Registered Successfully";
    }
}