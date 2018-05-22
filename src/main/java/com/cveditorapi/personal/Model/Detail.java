package com.cveditorapi.personal.Model;

import com.cveditorapi.personal.Model.UserModel.User;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

public class Detail {

    private int id;

    private String label;

    private String value;

    private User user;

    public Detail() {
    }

    public Detail(int id, String label, String value) {
        this.id = id;
        this.label = label;
        this.value = value;
    }

    public Detail(int id, String label, String value, User user) {
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
        return "Detail{" +
                "id=" + id +
                ", label='" + label + '\'' +
                ", value='" + value + '\'' +
                ", user=" + user.getId() +
                '}';
    }
}
