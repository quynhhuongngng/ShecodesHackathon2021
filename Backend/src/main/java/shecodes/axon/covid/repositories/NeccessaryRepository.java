package shecodes.axon.covid.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import shecodes.axon.covid.models.Neccessary;

public interface NeccessaryRepository extends JpaRepository<Neccessary, Integer>{

	/* Neccessary findByNeccessary(String category); */

}
