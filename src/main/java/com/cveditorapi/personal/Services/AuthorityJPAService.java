package com.cveditorapi.personal.Services;

import com.cveditorapi.personal.Model.UserModel.Authority;
import com.cveditorapi.personal.Model.UserModel.AuthorityName;
import com.cveditorapi.personal.Persistence.AuthorityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("AuthorityJPAService")
public class AuthorityJPAService {

    @Autowired
    private AuthorityRepository repo;

    public Authority getUserAuthority(){
        return repo.findByName(AuthorityName.ROLE_USER);
    }

    public Authority getAdminAuthority(){
        return repo.findByName(AuthorityName.ROLE_ADMIN);
    }
}
