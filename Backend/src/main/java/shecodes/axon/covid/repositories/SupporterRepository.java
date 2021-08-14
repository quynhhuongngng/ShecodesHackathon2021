package shecodes.axon.covid.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


import shecodes.axon.covid.models.Supporter;

@Repository
public interface SupporterRepository extends JpaRepository<Supporter, Integer>{

	List<Supporter> findByPhoneContaining(String phone);




}
