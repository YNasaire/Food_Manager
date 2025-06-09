package com.foodmanager.views;

import com.vaadin.flow.component.html.Image;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.html.H3;
import com.vaadin.flow.component.html.Paragraph;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;

@Route(value = "", layout = NavbarView.class)
public class AccueilView extends VerticalLayout {

    public AccueilView() {
        setAlignItems(Alignment.CENTER);
        setSpacing(true);

        // Image d'accueil
        Image imageAccueil = new Image("images/image_accueil.jpg", "Cuisine africaine et santé");
        imageAccueil.setWidth("70%");
        imageAccueil.getStyle().set("border-radius", "16px").set("box-shadow", "0 4px 16px #aaa");

        // Titre et informations
        H1 titre = new H1("Bienvenue sur Food Manager !");
        H3 slogan = new H3("La Santé avant tout");
        Paragraph intro = new Paragraph(
            "Découvrez, gérez et savourez les meilleurs plats et nourritures africaines tout en prenant soin de votre santé. "
            + "Ajoutez vos plats favoris, évitez les allergènes, suivez vos repas du jour, de la semaine ou du mois, et gardez un œil sur vos aliments expirés."
        );
        Paragraph infos = new Paragraph(
            "• Ajoutez vos plats et nourritures préférés à votre buffet personnel.\n"
            + "• Gérez vos allergies alimentaires facilement.\n"
            + "• Retrouvez vos plats du jour, de la semaine ou du mois en un clic.\n"
            + "• Profitez d'une alimentation saine et variée, adaptée à vos besoins."
        );

        add(imageAccueil, titre, slogan, intro, infos);
    }
}