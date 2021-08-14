package shecodes.axon.covid;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


import shecodes.axon.covid.models.Recipient;

import shecodes.axon.covid.services.RecipientService;

//@Controller
@RestController
public class ApplicationController {
	

	
	@Autowired
	private RecipientService recipientService;
	
	
	@GetMapping(value = {"/","/index","/home"})
	public String goHome(Model model) {

		
		
		List<Recipient> recipientList = recipientService.getRecipient();
		model.addAttribute("recipients", recipientList);
		
		return "/home";
	}
}
