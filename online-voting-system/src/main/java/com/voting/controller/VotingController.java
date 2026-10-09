package com.voting.controller;

import com.voting.entity.Candidate;
import com.voting.entity.User;
import com.voting.entity.Vote;

import com.voting.repository.CandidateRepository;
import com.voting.repository.UserRepository;
import com.voting.repository.VoteRepository;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/vote")

@CrossOrigin("*")

public class VotingController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CandidateRepository candidateRepository;

    @Autowired
    private VoteRepository voteRepository;

    // CAST VOTE
    @PostMapping("/{userId}/{candidateId}")

    public String castVote(

            @PathVariable Long userId,
            @PathVariable Long candidateId

    ) {

        // FIND USER
        User user = userRepository.findById(userId)
                .orElse(null);

        if (user == null) {
            return "User not found";
        }

        // CHECK ALREADY VOTED
        if (user.isVoted()) {
            return "You already voted";
        }

        // FIND CANDIDATE
        Candidate candidate =
                candidateRepository.findById(candidateId)
                        .orElse(null);

        if (candidate == null) {
            return "Candidate not found";
        }

        // INCREASE VOTE
        candidate.setVotes(
                candidate.getVotes() + 1
        );

        candidateRepository.save(candidate);

        // SAVE VOTE
        Vote vote = new Vote(
                userId,
                candidateId
        );

        voteRepository.save(vote);

        // UPDATE USER
        user.setVoted(true);

        userRepository.save(user);

        return "Vote Cast Successfully";
    }
}