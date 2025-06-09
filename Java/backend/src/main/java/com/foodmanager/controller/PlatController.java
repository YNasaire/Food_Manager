package com.foodmanager.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.foodmanager.model.Plat;
import com.foodmanager.repository.PlatRepository;

import java.util.List;

@RestController
@RequestMapping("/api/plat")
public class PlatController {

    @Autowired
    private PlatRepository platRepository;

    @PostMapping
    public Plat ajouterPlat(@RequestBody Plat p) {
        return platRepository.save(p);
    }

    @DeleteMapping("/{id}")
    public void supprimerPlat(@PathVariable Long id) {
        platRepository.deleteById(id);
    }

    @PutMapping("/{id}")
    public Plat mettreAJourPlat(@PathVariable Long id, @RequestBody Plat platDetails) {
        Plat plat = platRepository.findById(id).orElseThrow();
        plat.setNom(platDetails.getNom());
        // ... autres champs à mettre à jour
        return platRepository.save(plat);
    }

    @GetMapping("/user/{idUtilisateur}")
    public List<Plat> getPlatsByUser(@PathVariable Long idUtilisateur) {
        return platRepository.findByIdUtilisateur(idUtilisateur);
    }
}