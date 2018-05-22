package com.cveditorapi.personal.Persistence;

import com.cveditorapi.personal.Model.Detail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

import java.util.List;

/*TODO brag about this to Faisal*/
@NoRepositoryBean
public interface DetailRepo<S extends Detail,T> extends JpaRepository<S,T> {

    List<S> findByUser_Id(Long id);
}