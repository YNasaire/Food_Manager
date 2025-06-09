package com.foodmanager.views;

import com.vaadin.flow.component.html.H2;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;

@Route("plats-jour")
public class PlatsJourView extends VerticalLayout {
    public PlatsJourView() {
        add(new H2("Mes plats du jour"));
    }
}