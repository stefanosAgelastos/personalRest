package com.cveditorapi.personal.Persistence;

import com.cveditorapi.personal.Model.Personal;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonalRepository extends JpaRepository<Personal, Integer> {
}
