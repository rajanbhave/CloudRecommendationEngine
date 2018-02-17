package com.dm.hackathon2k18.cre.controller;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
public class CRERestController {

	// -------------------Add a
	// User--------------------------------------------------------

	@RequestMapping(value = "/add/", method = RequestMethod.POST, consumes = "application/json")
	public void createUser1(@RequestBody String json) {
		System.out.println("JSON : " + json);
		ObjectMapper objMapper = new ObjectMapper();
		// User user = objMapper.readValue(json, User.class);

	}
}
