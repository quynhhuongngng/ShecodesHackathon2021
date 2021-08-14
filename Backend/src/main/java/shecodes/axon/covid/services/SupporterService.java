package shecodes.axon.covid.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import shecodes.axon.covid.models.Supporter;
import shecodes.axon.covid.repositories.SupporterRepository;

@Service
public class SupporterService {
	@Autowired
	private SupporterRepository supporterRepository;

	// Get All 
	public List<Supporter> getSupporter() {
		return supporterRepository.findAll();
	}

	// Get By Id
	public Optional<Supporter> findById(int id) {
		return supporterRepository.findById(id);
	}

	// Delete 
	public void delete(int id) {
		supporterRepository.deleteById(id);
	}

	// Update 
	public void save(Supporter supporter) {
		supporterRepository.save(supporter);
	}

	

}
