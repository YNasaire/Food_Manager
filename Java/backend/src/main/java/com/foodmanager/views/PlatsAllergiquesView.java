// filepath: /home/nassaramadji/Bureau/Food_Manager/Java/backend/src/main/java/com/foodmanager/views/PlatsAllergiquesView.java
package com.foodmanager.views;

import com.vaadin.flow.component.html.H2;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;

@Route("plats-allergiques")
public class PlatsAllergiquesView extends VerticalLayout {
    public PlatsAllergiquesView() {
        add(new H2("Mes plats allergiques"));
    }
}