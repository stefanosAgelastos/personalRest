/*
package com.cveditorapi.personal;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.core.env.Environment;
import org.springframework.security.crypto.encrypt.Encryptors;
import org.springframework.social.connect.ConnectionFactoryLocator;
import org.springframework.social.connect.ConnectionRepository;
import org.springframework.social.connect.UsersConnectionRepository;
import org.springframework.social.connect.jdbc.JdbcUsersConnectionRepository;
import org.springframework.social.connect.support.ConnectionFactoryRegistry;
import org.springframework.social.connect.web.ProviderSignInController;
import org.springframework.social.linkedin.api.LinkedIn;
import org.springframework.social.linkedin.connect.LinkedInConnectionFactory;

import org.springframework.social.linkedin.

import javax.inject.Inject;
import javax.sql.DataSource;

*/
/**
 * Spring Social Configuration.
 *//*

@Configuration
public class SocialConfig {

    */
/*
    ConnectionFactoryLocator that has registered LinkedIn as a provider
    * *//*

    @Bean
    public ConnectionFactoryLocator connectionFactoryLocator() {
        ConnectionFactoryRegistry registry = new ConnectionFactoryRegistry();
        registry.addConnectionFactory(new LinkedInConnectionFactory(environment.getProperty("linkedin.clientId"),
                environment.getProperty("linkedin.clientSecret")));
        return registry;
    }

    @Inject
    private Environment environment;

    */
/*
    *UsersConnectionRepository for persisting Connection data across all users
    * *//*

    @Bean
    public UsersConnectionRepository usersConnectionRepository() {
        JdbcUsersConnectionRepository repository = new JdbcUsersConnectionRepository(dataSource,
                connectionFactoryLocator(), Encryptors.noOpText());
        repository.setConnectionSignUp(new SimpleConnectionSignUp());
        return repository;
    }

    @Inject
    private DataSource dataSource;

    */
/*
    *ConnectionRepository for managing the current user's connections
    *//*

    @Bean
    @Scope(value="request", proxyMode=ScopedProxyMode.INTERFACES)
    public ConnectionRepository connectionRepository() {
        User user = SecurityContext.getCurrentUser();
        return usersConnectionRepository().createConnectionRepository(user.getId());
    }

    */
/*
    * one or more request-scoped beans representing current user API bindings. :
    * *//*

    @Bean
    @Scope(value="request", proxyMode=ScopedProxyMode.INTERFACES)
    public LinkedIn linkedin() {
        return connectionRepository().getPrimaryConnection(LinkedIn.class).getApi();
    }

    */
/*
    * Add a ProviderSignInController that allows users to sign-in using their provider accounts:
    * *//*

@Bean
public ProviderSignInController providerSignInController() {
    return new ProviderSignInController(connectionFactoryLocator(), usersConnectionRepository(),
        new SimpleSignInAdapter());
}
}
*/
