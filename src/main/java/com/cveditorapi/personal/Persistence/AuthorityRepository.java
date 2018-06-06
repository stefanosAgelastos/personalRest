package com.cveditorapi.personal.Persistence;

import com.cveditorapi.personal.Model.UserModel.Authority;
import com.cveditorapi.personal.Model.UserModel.AuthorityName;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuthorityRepository extends JpaRepository<Authority, Long> {
    public Authority findByName(AuthorityName name);
}
