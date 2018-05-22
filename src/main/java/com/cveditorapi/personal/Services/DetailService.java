package com.cveditorapi.personal.Services;

import com.cveditorapi.personal.Model.Detail;
import com.cveditorapi.personal.Model.UserModel.User;
import com.cveditorapi.personal.Persistence.DetailRepo;

import java.util.List;

public abstract class DetailService {

    private final
    DetailRepo<Detail, Integer> repo;


    public DetailService(DetailRepo repo) {
        this.repo = repo;
    }


    public List<Detail> getAll(User authenticatedUser) {
        Long id = authenticatedUser.getId();
        return repo.findByUser_Id(id);
    }


    public Detail update(Detail toUpdate) {
        return repo.save(toUpdate);
    }


    public Detail addNew(Detail toAdd) {
        return repo.save(toAdd);
    }


    public void delete(int toDelete) {
        repo.deleteById(toDelete);
    }

    public Detail getOne(int id) {
        return this.repo.getOne(id);
    }
}
