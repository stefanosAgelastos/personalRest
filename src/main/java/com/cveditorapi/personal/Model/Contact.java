package com.cveditorapi.personal.Model;

import com.cveditorapi.personal.Model.UserModel.User;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;

@Entity
public class Contact extends Detail{

    @Id
    @GeneratedValue
    private int id;
    @Column
    private String label;
    @Column
    private String value;
    @JsonIgnore
    @ManyToOne
    private User user;

    public Contact() {
    }

    public Contact(int id, String label, String value, User user) {
        this.id = id;
        this.label = label;
        this.value = value;
        this.user = user;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "Contact{" +
                "id=" + id +
                ", label='" + label + '\'' +
                ", value='" + value + '\'' +
                ", user=" + user.getId() +
                '}';
    }
}
