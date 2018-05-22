package com.cveditorapi.personal.Services;

import com.cveditorapi.personal.Persistence.PersonalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("PersonalJPA")
public class PersonalJPAService extends DetailService {

    @Autowired
    public PersonalJPAService(PersonalRepository repo) {
        super(repo);
    }
}
