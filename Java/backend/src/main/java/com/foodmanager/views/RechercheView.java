package com.foodmanager.views;

import com.vaadin.flow.component.html.H2;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;

@Route(value = "recherche", layout = NavbarView.class)
public class RechercheView extends VerticalLayout {
    public RechercheView() {
        add(new H2("Recherche"));
    }
}

