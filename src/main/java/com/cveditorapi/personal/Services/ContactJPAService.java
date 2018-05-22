package com.cveditorapi.personal.Services;

import com.cveditorapi.personal.Persistence.ContactRepository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service("ContactJPA")
public class ContactJPAService extends DetailService{

    public ContactJPAService(ContactRepository repo) {
        super(repo);
    }
}
