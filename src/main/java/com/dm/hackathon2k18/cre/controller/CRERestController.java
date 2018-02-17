package com.dm.hackathon2k18.cre.controller;

import java.util.List;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.dm.hackathon2k18.cre.model.CREData;
import com.dm.hackathon2k18.cre.model.Category;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

@RestController
public class CRERestController {

	// -------------------Add a
	// User--------------------------------------------------------

	@RequestMapping(value = "/add/", method = RequestMethod.POST, consumes = "application/json")
	public void createUser1(@RequestBody String json) {
		System.out.println("JSON : " + json);
		Gson gson = new GsonBuilder().setPrettyPrinting().create();
		CREData creData = gson.fromJson(json, CREData.class);
		List<Category> categoryList = creData.getCategories();
		for (Category category : categoryList) {
			System.out.println(category.getQuesChoiceMap().keySet());
		}

	}
}
