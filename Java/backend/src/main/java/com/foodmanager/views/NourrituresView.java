package com.foodmanager.views;

import com.foodmanager.model.Nourriture;
import com.foodmanager.repository.NourritureRepository;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.Image;
import com.vaadin.flow.component.html.H3;
import com.vaadin.flow.component.html.Paragraph;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.Route;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.client.RestTemplate;
import com.vaadin.flow.server.VaadinSession;
import com.foodmanager.model.Favorie;
import com.foodmanager.model.Allergie;
import com.foodmanager.model.MonBuffet;

import java.time.LocalDate;
import java.util.List;

@Route(value = "nourritures", layout = NavbarView.class)
public class NourrituresView extends VerticalLayout {

    @Autowired
    private NourritureRepository nourritureRepository;
    private VerticalLayout resultsLayout = new VerticalLayout();
    private List<Nourriture> allNourritures;

    public NourrituresView(NourritureRepository nourritureRepository) {
        this.nourritureRepository = nourritureRepository;
        setSpacing(true);

        TextField searchField = new TextField();
        searchField.setPlaceholder("Rechercher une nourriture...");
        Button searchButton = new Button("Rechercher", event -> {
            filtrerNourritures(searchField.getValue());
        });
        HorizontalLayout searchBar = new HorizontalLayout(searchField, searchButton);
        add(searchBar, resultsLayout);

        allNourritures = nourritureRepository.findAll();
        afficherNourritures(allNourritures);
    }

    private void afficherNourritures(List<Nourriture> nourritures) {
        resultsLayout.removeAll();
        for (Nourriture n : nourritures) {
            Image img = new Image("/" + n.getImageUrl(), n.getNom());
            img.setHeight("120px");
            img.setWidth("120px");

            VerticalLayout info = new VerticalLayout(
                new H3(n.getNom()),
                new Paragraph("Description : " + n.getDescription()),
                new Paragraph("Ingrédients : " + n.getIngredients())
            );
            info.setSpacing(false);

            Button btnFavorie = new Button("Favorie", e -> {
                Long idUtilisateur = (Long) VaadinSession.getCurrent().getAttribute("idUtilisateur");
                if (idUtilisateur == null) {
                    Notification.show("Veuillez vous connecter pour ajouter aux favoris.");
                    return;
                }
                try {
                    RestTemplate restTemplate = new RestTemplate();
                    Favorie favorie = new Favorie();
                    favorie.setIdUtilisateur(idUtilisateur);
                    favorie.setIdNourriture(n.getId());
                    favorie.setDate(LocalDate.now());
                    restTemplate.postForObject("http://localhost:8080/api/favorie", favorie, Favorie.class);
                    Notification.show("Ajouté aux favoris !");
                } catch (Exception ex) {
                    Notification.show("Erreur lors de l'ajout aux favoris.");
                }
            });
            Button btnAllergique = new Button("Allergique", e -> {
                Long idUtilisateur = (Long) VaadinSession.getCurrent().getAttribute("idUtilisateur");
                if (idUtilisateur == null) {
                    Notification.show("Veuillez vous connecter pour ajouter aux allergies.");
                    return;
                }
                try {
                    RestTemplate restTemplate = new RestTemplate();
                    Allergie allergie = new Allergie();
                    allergie.setIdUtilisateur(idUtilisateur);
                    allergie.setIdNourriture(n.getId());
                    allergie.setDate(LocalDate.now());
                    restTemplate.postForObject("http://localhost:8080/api/allergie", allergie, Allergie.class);
                    Notification.show("Ajouté à la liste des allergies !");
                } catch (Exception ex) {
                    Notification.show("Erreur lors de l'ajout à la liste des allergies.");
                }
            });
            Button btnBuffet = new Button("Ajouter au buffet", e -> {
                Long idUtilisateur = (Long) VaadinSession.getCurrent().getAttribute("idUtilisateur");
                if (idUtilisateur == null) {
                    Notification.show("Veuillez vous connecter pour ajouter au buffet.");
                    return;
                }
                try {
                    RestTemplate restTemplate = new RestTemplate();
                    MonBuffet buffet = new MonBuffet();
                    buffet.setIdUtilisateur(idUtilisateur);
                    buffet.setIdNourriture(n.getId());
                    buffet.setNomPlat(n.getNom());
                    buffet.setImageUrl(n.getImageUrl());
                    buffet.setQuantite(1);
                    buffet.setDate(LocalDate.now());
                    restTemplate.postForObject("http://localhost:8080/api/buffet", buffet, MonBuffet.class);
                    Notification.show("Ajouté au buffet !");
                } catch (Exception ex) {
                    Notification.show("Erreur lors de l'ajout au buffet.");
                }
            });
            HorizontalLayout actions = new HorizontalLayout(btnFavorie, btnAllergique, btnBuffet);

            HorizontalLayout card = new HorizontalLayout(img, info, actions);
            card.setPadding(true);
            card.setSpacing(true);
            resultsLayout.add(card);
        }
    }

    public void filtrerNourritures(String query) {
        if (query == null || query.isEmpty()) {
            afficherNourritures(allNourritures);
        } else {
            List<Nourriture> resultats = allNourritures.stream()
                .filter(n -> n.getNom().toLowerCase().contains(query.toLowerCase()))
                .toList();
            afficherNourritures(resultats);
        }
    }
}