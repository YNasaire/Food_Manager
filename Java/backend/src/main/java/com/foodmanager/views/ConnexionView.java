package com.foodmanager.views;

import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.PasswordField;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.Route;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import com.vaadin.flow.component.UI;
import com.foodmanager.model.Utilisateur;
import org.springframework.web.client.RestTemplate;

@Route(value = "connexion", layout = NavbarView.class)
public class ConnexionView extends VerticalLayout {

    @Autowired
    private AuthenticationManager authenticationManager;

    public ConnexionView() {
        TextField email = new TextField("Email");
        PasswordField motDePasse = new PasswordField("Mot de passe");
        Button loginButton = new Button("Se connecter", event -> {
            try {
                // Appel à l'API pour récupérer l'utilisateur et son id
                RestTemplate restTemplate = new RestTemplate();
                Utilisateur utilisateur = new Utilisateur();
                utilisateur.setEmail(email.getValue());
                utilisateur.setMotDePasse(motDePasse.getValue());
                Utilisateur user = restTemplate.postForObject(
                    "http://localhost:8080/api/utilisateur/login",
                    utilisateur,
                    Utilisateur.class
                );
                Authentication auth = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(email.getValue(), motDePasse.getValue())
                );
                SecurityContextHolder.getContext().setAuthentication(auth);
                UI.getCurrent().getSession().setAttribute("isConnected", true);
                if (user != null && user.getId() != null) {
                    UI.getCurrent().getSession().setAttribute("idUtilisateur", user.getId());
                }
                UI.getCurrent().getPage().reload();
            } catch (Exception e) {
                Notification.show("Erreur de connexion");
            }
        });

        add(email, motDePasse, loginButton);
    }
}

