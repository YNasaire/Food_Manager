// filepath: /home/nassaramadji/Bureau/Food_Manager/Java/backend/src/main/java/com/foodmanager/views/PlatsFavorisView.java
package com.foodmanager.views;

import com.vaadin.flow.component.html.H2;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;

@Route("plats-favoris")
public class PlatsFavorisView extends VerticalLayout {
    public PlatsFavorisView() {
        add(new H2("Mes plats favoris"));
    }
}