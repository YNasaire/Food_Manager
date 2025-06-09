package com.foodmanager.views;

import com.foodmanager.model.Utilisateur;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.PasswordField;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.component.UI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.client.RestTemplate;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

@Route(value = "register", layout = NavbarView.class)
public class RegisterView extends VerticalLayout {

    @Autowired
    private AuthenticationManager authenticationManager;

    public RegisterView() {
        TextField nom = new TextField("Nom");
        TextField prenom = new TextField("Prénom");
        TextField email = new TextField("Email");
        PasswordField motDePasse = new PasswordField("Mot de passe");
        Button registerButton = new Button("S'inscrire", event -> {
            RestTemplate restTemplate = new RestTemplate();
            try {
                Utilisateur utilisateur = new Utilisateur();
                utilisateur.setNom(nom.getValue());
                utilisateur.setPrenom(prenom.getValue());
                utilisateur.setEmail(email.getValue());
                utilisateur.setMotDePasse(motDePasse.getValue());
                Utilisateur user = restTemplate.postForObject(
                    "http://localhost:8080/api/utilisateur/register",
                    utilisateur,
                    Utilisateur.class
                );
                // Authentification Spring Security
                Authentication auth = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(email.getValue(), motDePasse.getValue())
                );
                SecurityContextHolder.getContext().setAuthentication(auth);

                Notification.show("Inscription réussie");
                UI.getCurrent().getSession().setAttribute("isConnected", true);
                if (user != null && user.getId() != null) {
                    UI.getCurrent().getSession().setAttribute("idUtilisateur", user.getId());
                }
                UI.getCurrent().getPage().reload();
            } catch (Exception e) {
                Notification.show("Erreur d'inscription");
            }
        });

        add(nom, prenom, email, motDePasse, registerButton);
    }
}