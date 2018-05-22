package com.cveditorapi.personal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


/*todo add logger with AOP*/
@SpringBootApplication
public class PersonalApplication {

	public static void main(String[] args) {
		SpringApplication.run(PersonalApplication.class, args);
	}

/*	@Bean
	@ConfigurationProperties(prefix = "spring.datasource")
	public DataSource dataSource(){
		return DataSourceBuilder.create().build();
	}*/
}
