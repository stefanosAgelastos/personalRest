package com.cveditorapi.personal.Services;

import com.cveditorapi.personal.Model.Personal;

import java.util.List;

public interface PersonalService {

    List<Personal> getAll();

   Personal update( Personal toUpdate);

   Personal addNew(Personal toAdd);

   void delete( Personal toDelete);
}
