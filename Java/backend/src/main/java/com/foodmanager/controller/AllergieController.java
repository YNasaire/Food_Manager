package com.foodmanager.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.foodmanager.model.Allergie;
import com.foodmanager.repository.AllergieRepository;

import java.util.List;

@RestController
@RequestMapping("/api/allergie")
public class AllergieController {

    @Autowired
    private AllergieRepository allergieRepository;

    @PostMapping
    public Allergie ajouterAllergie(@RequestBody Allergie a) {
        return allergieRepository.save(a);
    }

    @DeleteMapping("/{id}")
    public void supprimerAllergie(@PathVariable Long id) {
        allergieRepository.deleteById(id);
    }

    @GetMapping("/user/{userId}")
    public List<Allergie> getAllergiesByUser(@PathVariable Long userId) {
        return allergieRepository.findByIdUtilisateur(userId);
    }
}