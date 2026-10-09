package com.voting.controller;

import com.voting.entity.Candidate;

import com.voting.repository.CandidateRepository;
import com.voting.repository.UserRepository;
import com.voting.repository.VoteRepository;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/results")

@CrossOrigin("*")

public class ResultController {

    @Autowired
    private CandidateRepository candidateRepository;

    @Autowired
    private VoteRepository voteRepository;

    @Autowired
    private UserRepository userRepository;

    // GET ALL RESULTS
    @GetMapping
    public List<Candidate> getResults() {

        return candidateRepository.findAll();
    }

    // GET WINNER
    @GetMapping("/winner")
    public Candidate getWinner() {

        List<Candidate> candidates =
                candidateRepository.findAll();

        Candidate winner = null;

        int maxVotes = -1;

        for (Candidate candidate : candidates) {

            if (candidate.getVotes() > maxVotes) {

                maxVotes = candidate.getVotes();

                winner = candidate;
            }
        }

        return winner;
    }

    // DASHBOARD STATS
    @GetMapping("/stats")
    public Map<String, Object> getStats() {

        Map<String, Object> stats =
                new HashMap<>();

        stats.put(
                "totalCandidates",
                candidateRepository.count()
        );

        stats.put(
                "totalVotes",
                voteRepository.count()
        );

        stats.put(
                "totalUsers",
                userRepository.count()
        );

        return stats;
    }
}