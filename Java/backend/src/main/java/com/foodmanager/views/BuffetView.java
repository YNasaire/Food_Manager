package com.foodmanager.views;

import com.foodmanager.model.MonBuffet;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.router.RouterLink;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.component.UI;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Arrays;

@Route(value = "buffet", layout = NavbarView.class)
public class BuffetView extends VerticalLayout {

    private Grid<MonBuffet> buffetGrid = new Grid<>(MonBuffet.class);
    private List<MonBuffet> allBuffets = List.of(); // Pour stocker tous les plats du buffet

    public BuffetView() {
        Long idUtilisateur = getCurrentIdUtilisateur();
        TextField searchField = new TextField();
        searchField.setPlaceholder("Rechercher dans mon buffet...");
        Button searchButton = new Button("Rechercher", event -> {
            filtrerBuffet(searchField.getValue());
        });
        HorizontalLayout searchBar = new HorizontalLayout(searchField, searchButton);
        add(searchBar);

        loadBuffet(idUtilisateur);

        buffetGrid.addComponentColumn(buffet -> {
            Button supprimer = new Button("Supprimer", e -> {
                RestTemplate restTemplate = new RestTemplate();
                restTemplate.delete("http://localhost:8080/api/buffet/" + buffet.getId());
                Notification.show("Plat supprimé du buffet !");
                loadBuffet(idUtilisateur);
            });
            return supprimer;
        }).setHeader("Actions");

        add(buffetGrid);

        // Liens de navigation
        add(new RouterLink("Mes plats du jour", PlatsJourView.class));
        add(new RouterLink("Mes plats pour la semaine", PlatsSemaineView.class));
        add(new RouterLink("Mes plats pour le mois", PlatsMoisView.class));
        add(new RouterLink("Mes plats Allergiques", PlatsAllergiquesView.class));
        add(new RouterLink("Mes plats expirés", PlatsExpiresView.class));
        add(new RouterLink("Mes plats favoris", PlatsFavorisView.class));

        Boolean showWelcome = (Boolean) UI.getCurrent().getSession().getAttribute("showWelcome");
        if (showWelcome != null && showWelcome) {
            Notification.show("Connexion réussie !");
            UI.getCurrent().getSession().setAttribute("showWelcome", false);
        }
    }

    private void loadBuffet(Long idUtilisateur) {
        RestTemplate restTemplate = new RestTemplate();
        MonBuffet[] buffets = restTemplate.getForObject(
            "http://localhost:8080/api/buffet/user/" + idUtilisateur,
            MonBuffet[].class
        );
        if (buffets != null) {
            List<Long> allergiques = getAllergiqueIds(idUtilisateur);
            allBuffets = Arrays.stream(buffets)
                .filter(buffet -> !allergiques.contains(buffet.getIdNourriture()))
                .toList();
            buffetGrid.setItems(allBuffets);
        }
    }

    // Méthode de filtrage
    private void filtrerBuffet(String query) {
        if (query == null || query.isEmpty()) {
            buffetGrid.setItems(allBuffets);
        } else {
            buffetGrid.setItems(
                allBuffets.stream()
                    .filter(b -> b.toString().toLowerCase().contains(query.toLowerCase()))
                    .toList()
            );
        }
    }

    // À adapter selon ta logique d'authentification
    private Long getCurrentIdUtilisateur() {
        // Exemple : return SecurityUtils.getCurrentUserId();
        return 1L;
    }

    // Récupère la liste des idNourriture allergiques pour l'utilisateur
    private List<Long> getAllergiqueIds(Long idUtilisateur) {
        RestTemplate restTemplate = new RestTemplate();
        Long[] ids = restTemplate.getForObject(
            "http://localhost:8080/api/allergie/user/" + idUtilisateur,
            Long[].class
        );
        return ids != null ? Arrays.asList(ids) : List.of();
    }
}

