package com.cveditorapi.personal.Model;

import javax.xml.bind.annotation.XmlRootElement;

/*
 * A sample class for adding error information in the response
 */
@XmlRootElement
public class RestErrorInfo {
    public final String detail;
    public final String message;

    public RestErrorInfo(Throwable ex, String detail) {
        this.message = ex.getLocalizedMessage();
        this.detail = detail;
    }
}
