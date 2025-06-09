package com.foodmanager.repository;

import com.foodmanager.model.Favorie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FavorieRepository extends JpaRepository<Favorie, Long> {
    List<Favorie> findByIdUtilisateur(Long idUtilisateur);
}