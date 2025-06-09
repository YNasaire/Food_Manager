package com.foodmanager.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.foodmanager.model.Nourriture;
import com.foodmanager.repository.NourritureRepository;

import java.util.List;

@RestController
@RequestMapping("/api/nourriture")
public class NourritureController {

    @Autowired
    private NourritureRepository nourritureRepository;

    @PostMapping
    public Nourriture ajouterNourriture(@RequestBody Nourriture n) {
        return nourritureRepository.save(n);
    }

    @DeleteMapping("/{id}")
    public void supprimerNourriture(@PathVariable Long id) {
        nourritureRepository.deleteById(id);
    }

    @GetMapping
    public List<Nourriture> getAllNourritures() {
        return nourritureRepository.findAll();
    }
}