package com.foodmanager.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.foodmanager.model.Favorie;
import com.foodmanager.repository.FavorieRepository;

import java.util.List;

@RestController
@RequestMapping("/api/favorie")
public class FavorieController {

    @Autowired
    private FavorieRepository favorieRepository;

    @PostMapping
    public Favorie ajouterFavorie(@RequestBody Favorie f) {
        return favorieRepository.save(f);
    }

    @DeleteMapping("/{id}")
    public void supprimerFavorie(@PathVariable Long id) {
        favorieRepository.deleteById(id);
    }

    @GetMapping("/user/{idUtilisateur}")
    public List<Favorie> getFavorisByUser(@PathVariable Long idUtilisateur) {
        return favorieRepository.findByIdUtilisateur(idUtilisateur);
    }
}