package com.cveditorapi.personal.TokenAuthorization;

import java.io.Serializable;

/**
 * Created by stephan on 20.03.16.
 */
public class  JwtAuthenticationRequest implements Serializable {

    private static final long serialVersionUID = -8445943548965154778L;

    private String username;
    private String password;

    public JwtAuthenticationRequest() {
        super();
    }

    public JwtAuthenticationRequest(String userName, String password) {
        this.setUsername(userName);
        this.setPassword(password);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String userName) {
        this.username = userName;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
