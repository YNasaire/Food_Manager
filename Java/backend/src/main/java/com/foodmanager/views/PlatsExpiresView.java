// filepath: /home/nassaramadji/Bureau/Food_Manager/Java/backend/src/main/java/com/foodmanager/views/PlatsExpiresView.java
package com.foodmanager.views;

import com.vaadin.flow.component.html.H2;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;

@Route("plats-expires")
public class PlatsExpiresView extends VerticalLayout {
    public PlatsExpiresView() {
        add(new H2("Mes plats expirés"));
    }
}