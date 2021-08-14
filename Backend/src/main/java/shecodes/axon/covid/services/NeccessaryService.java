package shecodes.axon.covid.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import shecodes.axon.covid.models.Neccessary;
import shecodes.axon.covid.repositories.NeccessaryRepository;

@Service
public class NeccessaryService {
    @Autowired
    private NeccessaryRepository neccessaryRepository;

    // Return list of producttype
    public List<Neccessary> getNeccessary() {
        return neccessaryRepository.findAll();
    }

    // SAve new producttype
    public void save(Neccessary productType) {
    	neccessaryRepository.save(productType);
    }

    // get by id
    public Optional<Neccessary> findById(int id) {
        return neccessaryRepository.findById(id);
    }

	/*
	 * public Neccessary findByNeccessary(String category) { return
	 * neccessaryRepository.findByNeccessary(category); }
	 */
    
    public void delete(Integer id) {
    	neccessaryRepository.deleteById(id);
    }
}
