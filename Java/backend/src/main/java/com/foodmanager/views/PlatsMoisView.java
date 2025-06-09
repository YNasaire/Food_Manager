// filepath: /home/nassaramadji/Bureau/Food_Manager/Java/backend/src/main/java/com/foodmanager/views/PlatsMoisView.java
package com.foodmanager.views;

import com.vaadin.flow.component.html.H2;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;

@Route("plats-mois")
public class PlatsMoisView extends VerticalLayout {
    public PlatsMoisView() {
        add(new H2("Mes plats pour le mois"));
    }
}