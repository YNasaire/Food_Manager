package com.foodmanager.model;

import jakarta.persistence.*;

@Entity
public class Nourriture {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nom;
    private String imageUrl;
    private String description;
    private String ingredients;

    public Nourriture() {}

    public Nourriture(String nom, String imageUrl, String description, String ingredients) {
        this.nom = nom;
        this.imageUrl = imageUrl;
        this.description = description;
        this.ingredients = ingredients;
    }

    // Getters et setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getNom() { return nom; }
    public void setNom(String nom) { this.nom = nom; }
    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public String getIngredients() { return ingredients; }
    public void setIngredients(String ingredients) { this.ingredients = ingredients; }

    @Override
    public String toString() {
        return "Nourriture{" +
                "id=" + id +
                ", nom='" + nom + '\'' +
                ", imageUrl='" + imageUrl + '\'' +
                ", description='" + description + '\'' +
                ", ingredients='" + ingredients + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Nourriture that = (Nourriture) o;
        return id != null && id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}