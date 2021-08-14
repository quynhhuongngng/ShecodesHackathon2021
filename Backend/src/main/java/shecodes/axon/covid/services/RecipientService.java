package shecodes.axon.covid.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import shecodes.axon.covid.models.Recipient;
import shecodes.axon.covid.repositories.RecipientRepository;

@Service
public class RecipientService {
	@Autowired
	private RecipientRepository recipientRepository;

	// Get All 
	public List<Recipient> getRecipient() {
		return recipientRepository.findAll();
	}

	// Get By Id
	public Optional<Recipient> findById(int id) {
		return recipientRepository.findById(id);
	}

	// Delete 
	public void delete(int id) {
		recipientRepository.deleteById(id);
	}

	// Update 
	public void save(Recipient recipient) {
		recipientRepository.save(recipient);
	}

	

}
