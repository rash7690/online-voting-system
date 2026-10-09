package com.voting.controller;

import com.voting.entity.Candidate;

import com.voting.repository.CandidateRepository;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

@RequestMapping("/api/candidates")

@CrossOrigin("*")

public class CandidateController {

    @Autowired
    private CandidateRepository candidateRepository;

    // GET ALL
    @GetMapping

    public List<Candidate> getCandidates() {

        return candidateRepository.findAll();
    }

    // ADD
    @PostMapping("/add")

    public Candidate addCandidate(
            @RequestBody Candidate candidate
    ) {

        return candidateRepository.save(candidate);
    }

    // DELETE
    @DeleteMapping("/{id}")

    public String deleteCandidate(
            @PathVariable Long id
    ) {

        candidateRepository.deleteById(id);

        return "Candidate Deleted";
    }
}