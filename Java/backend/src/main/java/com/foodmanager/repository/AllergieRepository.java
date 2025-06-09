package com.foodmanager.repository;

import com.foodmanager.model.Allergie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AllergieRepository extends JpaRepository<Allergie, Long> {
    List<Allergie> findByIdUtilisateur(Long idUtilisateur);
}