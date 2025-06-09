package com.foodmanager.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.foodmanager.model.Utilisateur;
import com.foodmanager.repository.UtilisateurRepository;

@RestController
@RequestMapping("/api/utilisateur")
public class UtilisateurController {

    @Autowired
    private UtilisateurRepository utilisateurRepository;

    @PostMapping("/register")
    public Utilisateur register(@RequestBody Utilisateur utilisateur) {
        // Vérifier si l'utilisateur existe déjà
        if (utilisateurRepository.findByEmail(utilisateur.getEmail()) != null) {
            throw new RuntimeException("Utilisateur déjà existant");
        }
        return utilisateurRepository.save(utilisateur);
    }

    @PostMapping("/login")
    public Utilisateur login(@RequestBody Utilisateur utilisateur) {
        Utilisateur user = utilisateurRepository.findByEmailAndMotDePasse(
            utilisateur.getEmail(), utilisateur.getMotDePasse());
        if (user == null) {
            throw new RuntimeException("Identifiants invalides");
        }
        return user;
    }
}