package com.cveditorapi.personal.Model;


import com.cveditorapi.personal.Model.UserModel.User;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;


@Entity
public class Personal extends Detail{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column
    private String label;
    @Column
    private String value;
    @ManyToOne
    @JsonIgnore
    private User user;

    public Personal() {
    }

    public Personal(int id, String label, String value, User user) {
        this.id = id;
        this.label = label;
        this.value = value;
        this.user = user;
    }

    @Override
    public int getId() {
        return id;
    }

    @Override
    public void setId(int id) {
        this.id = id;
    }

    @Override
    public String getLabel() {
        return label;
    }

    @Override
    public void setLabel(String label) {
        this.label = label;
    }

    @Override
    public String getValue() {
        return value;
    }

    @Override
    public void setValue(String value) {
        this.value = value;
    }

    @Override
    public User getUser() {
        return user;
    }

    @Override
    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "Personal{" +
                "id=" + id +
                ", label='" + label + '\'' +
                ", value='" + value + '\'' +
                ", user=" + user.getId() +
                '}';
    }
}
