package com.foodmanager.views;

import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.Route;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;

@Route(value = "plats", layout = NavbarView.class)
public class PlatsView extends VerticalLayout {

    private Grid<Plat> platGrid = new Grid<>(Plat.class);

    public PlatsView() {
        platGrid.setColumns("id", "nom");
        add(platGrid);

        loadPlats(1L); // Remplace 1L par l'id de l'utilisateur connecté

        TextField nomField = new TextField("Nom du plat");
        Button addButton = new Button("Ajouter", event -> {
            Plat plat = new Plat();
            plat.setNom(nomField.getValue());
            RestTemplate restTemplate = new RestTemplate();
            Plat response = restTemplate.postForObject(
                "http://localhost:8080/api/plat",
                plat,
                Plat.class
            );
            Notification.show("Plat ajouté !");
            loadPlats(1L);
        });

        add(nomField, addButton);
    }

    private void loadPlats(Long userId) {
        RestTemplate restTemplate = new RestTemplate();
        Plat[] plats = restTemplate.getForObject(
            "http://localhost:8080/api/plat/user/" + userId,
            Plat[].class
        );
        if (plats != null) {
            platGrid.setItems(Arrays.asList(plats));
        }
    }

    public static class Plat {
        private Long id;
        private String nom;

        public Long getId() { return id; }
        public void setId(Long id) { this.id = id; }
        public String getNom() { return nom; }
        public void setNom(String nom) { this.nom = nom; }
    }
}