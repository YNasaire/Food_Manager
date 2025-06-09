package com.foodmanager.views;

import com.vaadin.flow.component.applayout.AppLayout;
import com.vaadin.flow.component.html.Image;
import com.vaadin.flow.component.html.Anchor;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.FlexComponent.Alignment;
import com.vaadin.flow.router.RouterLink;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.router.AfterNavigationEvent;
import com.vaadin.flow.router.AfterNavigationObserver;
import com.vaadin.flow.server.VaadinSession;
import com.foodmanager.model.Utilisateur;
import org.springframework.web.client.RestTemplate;

public class NavbarView extends AppLayout implements AfterNavigationObserver {

    private HorizontalLayout links;
    private HorizontalLayout header;

    public NavbarView() {
        // Logo
        Image logo = new Image("images/logo.png", "Food Manager");
        logo.setHeight("110px");
        logo.setWidth("150px");

        // Liens de navigation principaux
        RouterLink accueil = new RouterLink("Accueil", AccueilView.class);
        RouterLink nourritures = new RouterLink("Nourritures disponibles", NourrituresView.class);
        RouterLink monBuffet = new RouterLink("Mon buffet", BuffetView.class);
        RouterLink support = new RouterLink("Support", SupportView.class);
        RouterLink recherche = new RouterLink("Recherche", RechercheView.class);

        links = new HorizontalLayout(accueil, nourritures, monBuffet, support, recherche);

        // Barre de recherche
        TextField searchField = new TextField();
        searchField.setPlaceholder("Rechercher un plat...");
        Button searchButton = new Button("Rechercher", event -> {
            // TODO : Ajouter la logique de recherche ici
        });
        HorizontalLayout searchBar = new HorizontalLayout(searchField, searchButton);

        header = new HorizontalLayout(logo, links, searchBar);
        header.setAlignItems(Alignment.CENTER);
        header.setWidthFull();
        header.expand(links);

        addToNavbar(header);
        updateAuthLinks();
    }

    private void updateAuthLinks() {
        links.removeAll();
        // Liens de navigation principaux
        links.add(new RouterLink("Accueil", AccueilView.class));
        links.add(new RouterLink("Nourritures disponibles", NourrituresView.class));
        links.add(new RouterLink("Mon buffet", BuffetView.class));
        links.add(new RouterLink("Support", SupportView.class));
        links.add(new RouterLink("Recherche", RechercheView.class));
        Boolean isConnected = (Boolean) VaadinSession.getCurrent().getAttribute("isConnected");
        Long idUtilisateur = (Long) VaadinSession.getCurrent().getAttribute("idUtilisateur");
        if (isConnected != null && isConnected && idUtilisateur != null) {
            // Affichage du nom de l'utilisateur connecté
            try {
                RestTemplate restTemplate = new RestTemplate();
                Utilisateur user = restTemplate.getForObject(
                    "http://localhost:8080/api/utilisateur/" + idUtilisateur,
                    Utilisateur.class
                );
                if (user != null) {
                    links.add(new com.vaadin.flow.component.html.Span("Connecté : " + user.getPrenom() + " " + user.getNom()));
                }
            } catch (Exception e) {
                // rien
            }
            Button deconnexion = new Button("Déconnexion", event -> {
                VaadinSession.getCurrent().setAttribute("isConnected", false);
                VaadinSession.getCurrent().setAttribute("idUtilisateur", null);
                UI.getCurrent().getPage().reload();
            });
            links.add(deconnexion);
        } else {
            links.add(new RouterLink("Inscription", RegisterView.class));
            links.add(new RouterLink("Connexion", ConnexionView.class));
        }
    }

    @Override
    public void afterNavigation(AfterNavigationEvent event) {
        updateAuthLinks();
    }
}