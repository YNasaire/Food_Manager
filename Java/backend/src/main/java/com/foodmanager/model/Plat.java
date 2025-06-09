package com.foodmanager.model;

import jakarta.persistence.*;

@Entity
public class Plat {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    private String nom;
    private String description;
    private String ingredients;
    private Long idUtilisateur; // Ajouté

    // Getters et setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getIngredients() {
        return ingredients;
    }

    public void setIngredients(String ingredients) {
        this.ingredients = ingredients;
    }

    public Long getIdUtilisateur() {
        return idUtilisateur;
    }

    public void setIdUtilisateur(Long idUtilisateur) {
        this.idUtilisateur = idUtilisateur;
    }

    @Override
    public String toString() {
        return "Plat{" +
                "id=" + id +
                ", nom='" + nom + '\'' +
                ", description='" + description + '\'' +
                ", ingredients='" + ingredients + '\'' +
                ", idUtilisateur=" + idUtilisateur +
                '}';
    }

    @Override
    public boolean equals(Object o) {   // cette méthode permet de comparer deux objets Plat pour vérifier s'ils sont égaux
        // Deux objets Plat sont considérés égaux s'ils ont le même id
        // Cela est utile pour éviter les doublons dans les listes ou lors de la comparaison d'objets
        if (o == null || getClass() != o.getClass()) return false;
        // Vérifie si l'objet passé en paramètre est le même que l'instance actuelle
        if (this == o) return true;
        if (!(o instanceof Plat)) return false;
        Plat plat = (Plat) o;
        return id != null && id.equals(plat.id);
    }         

    @Override
    public int hashCode() {  // Cette méthode est utilisée pour générer un code de hachage unique pour l'objet Plat.
        // Elle est utile pour les collections comme HashMap ou HashSet.
        // Elle utilise le champ id pour générer le code de hachage.
        return id != null ? id.hashCode() : 0;
    }

  
    
 }
