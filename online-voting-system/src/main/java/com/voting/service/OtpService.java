package com.voting.service;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.mail.SimpleMailMessage;

import org.springframework.mail.javamail.JavaMailSender;

import org.springframework.stereotype.Service;

import java.util.HashMap;

import java.util.Map;

import java.util.Random;

@Service

public class OtpService {

    @Autowired
    private JavaMailSender mailSender;

    // STORE OTP
    private Map<String, String> otpStorage =
            new HashMap<>();

    // SEND OTP
    public String sendOtp(
            String email
    ) {

        Random random =
                new Random();

        int otp =
                100000 +
                random.nextInt(900000);

        String otpString =
                String.valueOf(otp);

        otpStorage.put(
                email,
                otpString
        );

        // EMAIL
        SimpleMailMessage message =
                new SimpleMailMessage();

        message.setTo(email);

        message.setSubject(
                "Voting System OTP"
        );

        message.setText(

                "Your OTP is: " +
                otpString
        );

        mailSender.send(message);

        return "OTP Sent Successfully";
    }

    // VERIFY OTP
    public boolean verifyOtp(

            String email,
            String otp

    ) {

        String storedOtp =
                otpStorage.get(email);

        if (storedOtp == null) {

            return false;
        }

        return storedOtp.equals(otp);
    }
}