package com.voting.security;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;

import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;

@Component
public class JwtUtil {

    // SECRET KEY
    private final String SECRET =
            "VotingSecretKeyVotingSecretKey123456789";

    // TOKEN VALIDITY
    private final long EXPIRATION =
            1000 * 60 * 60 * 24;

    // GENERATE KEY
    private Key getSignKey() {

        return Keys.hmacShaKeyFor(
                SECRET.getBytes()
        );
    }

    // GENERATE TOKEN
    public String generateToken(
            String email
    ) {

        return Jwts.builder()

                .setSubject(email)

                .setIssuedAt(
                        new Date()
                )

                .setExpiration(
                        new Date(
                                System.currentTimeMillis()
                                        + EXPIRATION
                        )
                )

                .signWith(
                        getSignKey(),
                        SignatureAlgorithm.HS256
                )

                .compact();
    }

    // EXTRACT EMAIL
    public String extractEmail(
            String token
    ) {

        return Jwts.parserBuilder()

                .setSigningKey(getSignKey())

                .build()

                .parseClaimsJws(token)

                .getBody()

                .getSubject();
    }

    // VALIDATE TOKEN
    public boolean validateToken(
            String token
    ) {

        try {

            Jwts.parserBuilder()

                    .setSigningKey(getSignKey())

                    .build()

                    .parseClaimsJws(token);

            return true;

        } catch (Exception e) {

            return false;
        }
    }
}