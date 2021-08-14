package shecodes.axon.covid;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import shecodes.axon.covid.models.Neccessary;
import shecodes.axon.covid.models.Recipient;
import shecodes.axon.covid.services.NeccessaryService;
import shecodes.axon.covid.services.RecipientService;

public class ApplicationController {
	
	@Autowired
	private NeccessaryService neccessaryService;
	
	@Autowired
	private RecipientService recipientService;
	
	@GetMapping(value = {"/","/index","/home"})
	public String goHome(Model model) {

		List<Neccessary> neccessaryList = neccessaryService.getNeccessary();
		model.addAttribute("neccessaries", neccessaryList);
		
		List<Recipient> recipientList = recipientService.getRecipient();
		model.addAttribute("recipients", recipientList);
		
		return "/home";
	}
}
