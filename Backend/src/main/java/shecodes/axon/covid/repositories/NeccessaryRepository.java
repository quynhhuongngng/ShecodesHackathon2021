package shecodes.axon.covid.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import shecodes.axon.covid.models.Neccessary;

@Repository
public interface NeccessaryRepository extends JpaRepository<Neccessary, Integer>{

	/* Neccessary findByNeccessary(String category); */

}
