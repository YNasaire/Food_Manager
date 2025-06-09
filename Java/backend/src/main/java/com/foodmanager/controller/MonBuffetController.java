package com.foodmanager.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.foodmanager.model.MonBuffet;
import com.foodmanager.repository.MonBuffetRepository;

import java.util.List;

@RestController
@RequestMapping("/api/buffet")
public class MonBuffetController {

    @Autowired
    private MonBuffetRepository monBuffetRepository;

    @GetMapping("/user/{idUtilisateur}")
    public List<MonBuffet> getBuffetByUser(@PathVariable Long idUtilisateur) {
        return monBuffetRepository.findByIdUtilisateur(idUtilisateur);
    }
}