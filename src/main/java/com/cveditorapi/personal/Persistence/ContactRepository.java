package com.cveditorapi.personal.Persistence;

import com.cveditorapi.personal.Model.Contact;
import com.cveditorapi.personal.Model.Detail;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ContactRepository extends DetailRepo<Contact, Integer>{
    boolean deleteById(int id);
/*
    List<Detail> findByUser_Id(Long id);
*/

}
