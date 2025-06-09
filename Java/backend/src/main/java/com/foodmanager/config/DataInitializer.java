package com.foodmanager.config;

import com.foodmanager.model.Nourriture;
import com.foodmanager.repository.NourritureRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataInitializer {  // Ce fichier initialise la base de données avec des données de test

    @Bean
    public CommandLineRunner initNourritures(NourritureRepository repo) {
        return args -> {
            if (repo.count() == 0) {
                // Eru
                for (int i = 1; i <= 20; i++) {
                    repo.save(new Nourriture(
                        "Eru",
                        "images/eru" + i + ".jpeg",
                        "Plat traditionnel camerounais à base de feuilles d’eru, huile de palme, viande ou poisson.",
                        "Feuilles d’eru, huile de palme, viande, poisson, épices"
                    ));
                }
                // Kous Kous
                for (int i = 1; i <= 20; i++) {
                    repo.save(new Nourriture(
                        "Kous Kous",
                        "images/kous_kous" + i + ".jpeg",
                        "Plat à base de farine de manioc, souvent accompagné de sauce.",
                        "Farine de manioc, eau, sel, accompagnement au choix"
                    ));
                }
                // Ndolé
                for (int i = 1; i <= 20; i++) {
                    repo.save(new Nourriture(
                        "Ndolé",
                        "images/ndole" + i + ".jpeg",
                        "Spécialité camerounaise à base de feuilles de ndolé, arachides et viande/poisson.",
                        "Feuilles de ndolé, arachides, viande ou poisson, épices"
                    ));
                }
                // Okok
                for (int i = 1; i <= 20; i++) {
                    repo.save(new Nourriture(
                        "Okok",
                        "images/okok" + i + ".jpeg",
                        "Plat à base de feuilles d’okok (gnetum), pâte d’arachide, huile de palme.",
                        "Feuilles d’okok, pâte d’arachide, huile de palme, sucre, sel"
                    ));
                }
                // Taro sauce jaune
                for (int i = 1; i <= 20; i++) {
                    repo.save(new Nourriture(
                        "Taro sauce jaune",
                        "images/taro_sauce_jaune" + i + ".jpeg",
                        "Taro accompagné de sauce jaune à base d’huile de palme et d’épices.",
                        "Taro, huile de palme, épices, viande ou poisson"
                    ));
                }
            }
        };
    }
}