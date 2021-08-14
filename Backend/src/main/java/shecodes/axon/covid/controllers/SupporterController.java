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



import shecodes.axon.covid.models.Supporter;
import shecodes.axon.covid.repositories.SupporterRepository;

import shecodes.axon.covid.services.SupporterService;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class SupporterController {
	

	
	@Autowired
	private SupporterService supporterService;
	
	@Autowired
	private SupporterRepository supporterRepository;
	
	
		@GetMapping("/supporter")
		public ResponseEntity<List<Supporter>> getAllSupporters(Model model, @RequestParam(required = false) String phone) {
			try {
				List<Supporter> tutorials = new ArrayList<Supporter>();

				if (phone == null)
					supporterRepository.findAll().forEach(tutorials::add);
				else
					supporterRepository.findByPhoneContaining(phone).forEach(tutorials::add);

				if (tutorials.isEmpty()) {
					return new ResponseEntity<>(HttpStatus.NO_CONTENT);
				}
				return new ResponseEntity<>(tutorials, HttpStatus.OK);
			} catch (Exception e) {
				return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
			}
			
			
		}

		@PostMapping(value = "/supporter")
		public ResponseEntity<Supporter> addNew(@RequestBody Supporter supporter) {	
			try {
				supporterService.save(supporter);
				return new ResponseEntity<>(supporter, HttpStatus.CREATED);
			} catch (Exception e) {
				return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
			}
			

		}
		
		@GetMapping("/supporter/{id}")
		public ResponseEntity<Supporter> getSupporterById(@PathVariable("id") int id) {
			Optional<Supporter> tutorialData = supporterRepository.findById(id);

			if (tutorialData.isPresent()) {
				return new ResponseEntity<>(tutorialData.get(), HttpStatus.OK);
			} else {
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
		}
		
		
}
