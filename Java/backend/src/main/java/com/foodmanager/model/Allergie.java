package com.foodmanager.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
public class Allergie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long idUtilisateur;
    private Long idNourriture;
    private Long idPlat;
    private LocalDate date;

    // Getters et setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getIdUtilisateur() {
        return idUtilisateur;
    }

    public void setIdUtilisateur(Long idUtilisateur) {
        this.idUtilisateur = idUtilisateur;
    }

    public Long getIdNourriture() {
        return idNourriture;
    }

    public void setIdNourriture(Long idNourriture) {
        this.idNourriture = idNourriture;
    }

    public Long getIdPlat() {
        return idPlat;
    }

    public void setIdPlat(Long idPlat) {
        this.idPlat = idPlat;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    @Override
    public String toString() {  // cette méthode permet de convertir l'objet Allergie en une chaîne de caractères pour l'affichage
        // Elle inclut tous les attributs de l'objet pour une représentation complète
        return "Allergie{" +
                "id=" + id +
                ", idUtilisateur=" + idUtilisateur +
                ", idNourriture=" + idNourriture +
                ", idPlat=" + idPlat +
                ", date=" + date +
                '}';
    }

    @Override
    public boolean equals(Object o) {  // cette méthode permet de comparer deux objets Allergie pour vérifier s'ils sont égaux
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Allergie that = (Allergie) o;
        return id != null && id.equals(that.id) &&
               idUtilisateur.equals(that.idUtilisateur) &&
               idNourriture.equals(that.idNourriture) &&
               idPlat.equals(that.idPlat) &&
               date.equals(that.date);
    }

    @Override
    public int hashCode() {  // cette méthode génère un code de hachage unique pour l'objet Allergie
        // Elle est utilisée pour stocker l'objet dans des collections comme HashMap ou HashSet
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (idUtilisateur != null ? idUtilisateur.hashCode() : 0);
        result = 31 * result + (idNourriture != null ? idNourriture.hashCode() : 0);
        result = 31 * result + (idPlat != null ? idPlat.hashCode() : 0);
        result = 31 * result + (date != null ? date.hashCode() : 0);
        return result;
    }

    
}