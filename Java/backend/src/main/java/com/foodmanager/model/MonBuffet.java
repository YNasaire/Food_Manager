package com.foodmanager.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
public class MonBuffet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long idUtilisateur;
    private Long idNourriture;
    private Long idPlat;
    private String imageUrl;
    private LocalDate date;
    private String nomPlat;
    private int quantite;

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

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getNomPlat() {
        return nomPlat;
    }

    public void setNomPlat(String nomPlat) {
        this.nomPlat = nomPlat;
    }

    public int getQuantite() {
        return quantite;
    }

    public void setQuantite(int quantite) {
        this.quantite = quantite;
    }

    @Override
    public String toString() {
        return "MonBuffet{" +
                "id=" + id +
                ", idUtilisateur=" + idUtilisateur +
                ", idNourriture=" + idNourriture +
                ", idPlat=" + idPlat +
                ", imageUrl='" + imageUrl + '\'' +
                ", date=" + date +
                ", nomPlat='" + nomPlat + '\'' +
                ", quantite=" + quantite +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        MonBuffet monBuffet = (MonBuffet) o;
        return id != null && id.equals(monBuffet.id) &&
                idUtilisateur.equals(monBuffet.idUtilisateur) &&
                idNourriture.equals(monBuffet.idNourriture) &&
                idPlat.equals(monBuffet.idPlat) &&
                imageUrl.equals(monBuffet.imageUrl) &&
                date.equals(monBuffet.date) &&
                nomPlat.equals(monBuffet.nomPlat) &&
                quantite == monBuffet.quantite;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (idUtilisateur != null ? idUtilisateur.hashCode() : 0);
        result = 31 * result + (idNourriture != null ? idNourriture.hashCode() : 0);
        result = 31 * result + (idPlat != null ? idPlat.hashCode() : 0);
        result = 31 * result + (imageUrl != null ? imageUrl.hashCode() : 0);
        result = 31 * result + (date != null ? date.hashCode() : 0);
        result = 31 * result + (nomPlat != null ? nomPlat.hashCode() : 0);
        result = 31 * result + quantite;
        return result;
    }    // Cette méthode est utilisée pour générer un code de hachage unique pour l'objet MonBuffet.           
}