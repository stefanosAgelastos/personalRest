package com.cveditorapi.personal.Persistence;

import com.cveditorapi.personal.Model.Detail;
import com.cveditorapi.personal.Model.Personal;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PersonalRepository extends DetailRepo<Personal, Integer> {
    boolean deleteById(int id);
/*
    List<Detail> findByUser_Id(Long id);
*/
}
