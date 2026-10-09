package com.voting.controller;

import com.voting.service.OtpService;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

@RestController

@RequestMapping("/api/otp")

@CrossOrigin("*")

public class OtpController {

    @Autowired
    private OtpService otpService;

    // SEND OTP
    @PostMapping("/send/{email}")

    public String sendOtp(

            @PathVariable String email

    ) {

        return otpService.sendOtp(email);
    }

    // VERIFY OTP
    @PostMapping("/verify")

    public String verifyOtp(

            @RequestParam String email,

            @RequestParam String otp

    ) {

        boolean valid =
                otpService.verifyOtp(
                        email,
                        otp
                );

        if (valid) {

            return "OTP Verified";
        }

        return "Invalid OTP";
    }
}