package shecodes.axon.covid.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;



import shecodes.axon.covid.models.Recipient;
import shecodes.axon.covid.repositories.RecipientRepository;

import shecodes.axon.covid.services.RecipientService;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class RecipientController {
	

	
	@Autowired
	private RecipientService recipientService;
	
	@Autowired
	private RecipientRepository recipientRepository;
	
	
		@GetMapping("/recipient")
		public ResponseEntity<List<Recipient>> getAllRecipients(Model model, @RequestParam(required = false) String phone) {
			try {
				List<Recipient> tutorials = new ArrayList<Recipient>();

				if (phone == null)
					recipientRepository.findAll().forEach(tutorials::add);
				else
					recipientRepository.findByPhoneContaining(phone).forEach(tutorials::add);

				if (tutorials.isEmpty()) {
					return new ResponseEntity<>(HttpStatus.NO_CONTENT);
				}
				return new ResponseEntity<>(tutorials, HttpStatus.OK);
			} catch (Exception e) {
				return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
			}
			
			
		}

		@PostMapping(value = "/recipient")
		public ResponseEntity<Recipient> addNew(@RequestBody Recipient recipient) {	
			try {
				recipientService.save(recipient);
				return new ResponseEntity<>(recipient, HttpStatus.CREATED);
			} catch (Exception e) {
				return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
			}
			

		}
		
		@GetMapping("/recipient/{id}")
		public ResponseEntity<Recipient> getRecipientById(@PathVariable("id") int id) {
			Optional<Recipient> tutorialData = recipientRepository.findById(id);

			if (tutorialData.isPresent()) {
				return new ResponseEntity<>(tutorialData.get(), HttpStatus.OK);
			} else {
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
		}
		
		
}
