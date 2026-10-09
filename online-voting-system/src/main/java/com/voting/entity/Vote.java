package com.voting.entity;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
public class Vote {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId;

    private Long candidateId;

    private LocalDateTime votedAt;

    // CONSTRUCTOR
    public Vote() {
        this.votedAt = LocalDateTime.now();
    }

    public Vote(Long userId, Long candidateId) {

        this.userId = userId;
        this.candidateId = candidateId;
        this.votedAt = LocalDateTime.now();
    }

    // GETTERS & SETTERS

    public Long getId() {
        return id;
    }

    public Long getUserId() {
        return userId;
    }

    public Long getCandidateId() {
        return candidateId;
    }

    public LocalDateTime getVotedAt() {
        return votedAt;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public void setCandidateId(Long candidateId) {
        this.candidateId = candidateId;
    }

    public void setVotedAt(LocalDateTime votedAt) {
        this.votedAt = votedAt;
    }
}