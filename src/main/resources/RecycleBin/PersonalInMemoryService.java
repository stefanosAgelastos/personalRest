/*
package com.cveditorapi.personal.Services;


import com.cveditorapi.personal.Model.Detail;
import com.cveditorapi.personal.Model.Personal;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.atomic.AtomicBoolean;

//todo: needs to be adapted with the current inheritance tree.

@Service("InMemory")
public class PersonalInMemoryService implements DetailService {

    private ArrayList<Personal> allPersonals = new ArrayList(Arrays.asList(new Personal(1, "name", "Stefanos")
            , new Personal(2, "gender", "fluid")
            , new Personal(3, "dob", "06/07/1987")));

    public List<Detail> getAll() {
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
            this.allPersonals.trimToSize();
            int newId = this.allPersonals.size()+1;
            toUpdate.setId(newId);
            this.allPersonals.add( toUpdate);
            System.out.println("Added new Personal with id: " +toUpdate.getId());
            return toUpdate;
        }
    }


    public Personal addNew(Personal toAdd) {
        if (this.allPersonals.add(toAdd)) {
            return toAdd;
        } else {
            return null;
        }
    }

    public void delete(int toDelete) {
        this.allPersonals.remove(toDelete-1);
    }

}
*/
