package com.cveditorapi.personal.Model;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.MethodArgumentNotValidException;

import javax.xml.bind.annotation.XmlRootElement;

/*
 * A sample class for adding error information in the response
 */
@XmlRootElement
public class RestErrorInfo {

    private final Logger logger = LoggerFactory.getLogger(this.getClass());
    public final String detail;
    public final String message;

    public RestErrorInfo(Throwable ex, String detail) {
        this.detail = detail;
        if(ex instanceof MethodArgumentNotValidException){
            this.message = ((MethodArgumentNotValidException) ex).getBindingResult().getFieldError().getField() +" " + ((MethodArgumentNotValidException) ex).getBindingResult().getAllErrors().get(0).getDefaultMessage();
        } else {
            this.message = ex.getLocalizedMessage();
        }
        //logger.error("Responding with error message: "+this.message, ex);
    }
}
