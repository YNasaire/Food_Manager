package com.foodmanager.views;

import com.vaadin.flow.component.html.H2;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;

@Route(value = "support", layout = NavbarView.class)
public class SupportView extends VerticalLayout {
    public SupportView() {
        add(new H2("Support"));
    }
}