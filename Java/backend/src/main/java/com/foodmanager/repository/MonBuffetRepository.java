package com.foodmanager.repository;

import com.foodmanager.model.MonBuffet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MonBuffetRepository extends JpaRepository<MonBuffet, Long> {
    List<MonBuffet> findByIdUtilisateur(Long idUtilisateur);
}