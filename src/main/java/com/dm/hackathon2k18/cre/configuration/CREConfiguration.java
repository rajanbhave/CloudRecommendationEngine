package com.dm.hackathon2k18.cre.configuration;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@Configuration
@EnableWebMvc
@ComponentScan(basePackages = "com.dm.hackathon2k18.cre")
public class CREConfiguration {
	

}