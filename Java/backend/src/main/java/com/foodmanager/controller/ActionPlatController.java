// But:
// Ce contrôleur va recevoir les requêtes du frontend (boutons Favorie, Allergique, Buffet) et ajouter les éléments dans la bonne table.

package com.foodmanager.controller;

import com.foodmanager.model.Favorie;
import com.foodmanager.model.Allergie;
import com.foodmanager.model.MonBuffet;
import com.foodmanager.repository.FavorieRepository;
import com.foodmanager.repository.AllergieRepository;
import com.foodmanager.repository.MonBuffetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;

@RestController
@RequestMapping("/api/plat")
public class ActionPlatController {

    @Autowired
    private FavorieRepository favorieRepository;
    @Autowired
    private AllergieRepository allergieRepository;
    @Autowired
    private MonBuffetRepository monBuffetRepository;

    @PostMapping("/favorie")
    public Favorie ajouterFavorie(@RequestParam Long idUtilisateur, @RequestParam(required = false) Long idNourriture, @RequestParam(required = false) Long idPlat) {
        Favorie favorie = new Favorie();
        favorie.setIdUtilisateur(idUtilisateur);
        favorie.setIdNourriture(idNourriture);
        favorie.setIdPlat(idPlat);
        favorie.setDate(LocalDate.now());
        return favorieRepository.save(favorie);
    }

    @PostMapping("/allergie")
    public Allergie ajouterAllergie(@RequestParam Long idUtilisateur, @RequestParam(required = false) Long idNourriture, @RequestParam(required = false) Long idPlat) {
        Allergie allergie = new Allergie();
        allergie.setIdUtilisateur(idUtilisateur);
        allergie.setIdNourriture(idNourriture);
        allergie.setIdPlat(idPlat);
        allergie.setDate(LocalDate.now());
        return allergieRepository.save(allergie);
    }

    @PostMapping("/buffet")
    public MonBuffet ajouterBuffet(@RequestParam Long idUtilisateur, @RequestParam(required = false) Long idNourriture, @RequestParam(required = false) Long idPlat, @RequestParam(required = false) String imageUrl) {
        MonBuffet buffet = new MonBuffet();
        buffet.setIdUtilisateur(idUtilisateur);
        buffet.setIdNourriture(idNourriture);
        buffet.setIdPlat(idPlat);
        buffet.setImageUrl(imageUrl);
        buffet.setDate(LocalDate.now());
        return monBuffetRepository.save(buffet);
    }
}
