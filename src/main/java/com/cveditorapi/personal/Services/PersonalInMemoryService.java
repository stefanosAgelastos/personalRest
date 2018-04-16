package com.cveditorapi.personal.Services;


import com.cveditorapi.personal.Model.Personal;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.atomic.AtomicBoolean;


@Service("InMemory")
public class PersonalInMemoryService implements PersonalService {

    private ArrayList<Personal> allPersonals = new ArrayList(Arrays.asList(new Personal(1, "name", "Stefanos")
            , new Personal(2, "gender", "fluid")
            , new Personal(3, "dob", "06/07/1987")));

    public List<Personal> getAll() {
        return this.allPersonals;
    }


    public Personal update(Personal toUpdate) {
        //find and replace the Personal instance based on id
        AtomicBoolean found = new AtomicBoolean(false);
        this.allPersonals.forEach((Personal p) -> {
            if (p.getId() == toUpdate.getId()) {
                p.setLabel(toUpdate.getLabel());
                p.setValue(toUpdate.getValue());
                found.set(true);
                System.out.println("found and replaced values: " + p.toString());
            }
        });
        if (found.get()) {
            System.out.println("Responding with: " + toUpdate);
            return toUpdate;
        } else {
            System.out.println("Responding with NULL");
            return null;
        }
    }


    public Personal addNew(Personal toAdd) {
        if (this.allPersonals.add(toAdd)) {
            return toAdd;
        } else {
            return null;
        }
    }

    public void delete(Personal toDelete) {
        this.allPersonals.remove(toDelete);
    }

}
