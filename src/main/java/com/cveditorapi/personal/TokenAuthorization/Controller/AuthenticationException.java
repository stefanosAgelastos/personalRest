package com.cveditorapi.personal.TokenAuthorization.Controller;

public class AuthenticationException extends RuntimeException {
    public AuthenticationException(String message, Throwable cause) {
        super(message, cause);
    }
}
