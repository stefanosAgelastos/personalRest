package com.cveditorapi.personal.Controllers;


import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

import javax.validation.ConstraintViolationException;

@Aspect
@Component
public class ControllerAspect {

    protected final Logger log = LoggerFactory.getLogger(this.getClass());

    @Before("execution(public * com.cveditorapi.personal.Controllers.*Controller.*(..))")
    public void logBeforeRestCall(JoinPoint pjp) {
        log.info(":::::AOP Before REST call:::::" + pjp);
    }
}
