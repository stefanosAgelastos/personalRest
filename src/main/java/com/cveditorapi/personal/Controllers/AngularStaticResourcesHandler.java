package com.cveditorapi.personal.Controllers;


import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.Resource;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.resource.PathResourceResolver;
import java.io.IOException;


@EnableAutoConfiguration
public class AngularStaticResourcesHandler implements WebMvcConfigurer {

    private final String baseSpaPath = "angular";

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // All resources go to where they should go
        registry
                .addResourceHandler("/**/*.css", "/**/*.html", "/**/*.js", "/**/*.jsx", "/**/*.png", "/**/*.ttf", "/**/*.woff", "/**/*.woff2")
                .setCachePeriod(0)
                .addResourceLocations("classpath:/static/");

        // Resources not found respond with angular's index.html
        registry.addResourceHandler( "/angular/**")
                .setCachePeriod(0)
                .addResourceLocations("classpath:/static/index.html")
                .resourceChain(true)
                .addResolver(new PathResourceResolver() {
                    @Override
                    protected Resource getResource(String resourcePath, Resource location) throws IOException {
                        if (!resourcePath.contains(baseSpaPath)) {
                            return null;
                        }
                        return location.exists() && location.isReadable() ? location : null;
                    }
                });
    }

}

/*
@EnableAutoConfiguration
public class AngularStaticResourcesHandler implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry ) {
        registry.addResourceHandler("/angular/**").
                addResourceLocations("classpath:/angular/");
    }


    @Override
    public void configureViewResolvers(ViewResolverRegistry registry) {
        registry.viewResolver();
    }

    @Bean
    public MappedInterceptor forwardIndexPageWhenResourceIsNotFound() {

        HandlerInterceptor interceptor = new HandlerInterceptor() {
            @Override
            public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
                if (response.getStatus() != 200) {
                    response.setStatus(200);
                    modelAndView.setStatus(HttpStatus.OK);
                    modelAndView.setViewName("");
                }
            }
        };
        return new MappedInterceptor("/angular/**", interceptor);
    }

}*/
