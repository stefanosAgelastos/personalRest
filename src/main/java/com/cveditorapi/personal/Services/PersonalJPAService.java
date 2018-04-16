package com.cveditorapi.personal.Services;

import com.cveditorapi.personal.Model.Personal;
import com.cveditorapi.personal.Persistence.PersonalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("JPA")
public class PersonalJPAService implements PersonalService {

    private final
    PersonalRepository repo;

    @Autowired
    public PersonalJPAService(PersonalRepository repo) {
        this.repo = repo;
    }

    @Override
    public List<Personal> getAll() {
        return repo.findAll();
    }

    @Override
    public Personal update(Personal toUpdate) {
        return repo.save(toUpdate);
    }

    @Override
    public Personal addNew(Personal toAdd) {
        return repo.save(toAdd);
    }

    @Override
    public void delete(Personal toDelete) {
        repo.delete(toDelete);
    }
}
