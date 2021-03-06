package shecodes.axon.covid.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


import shecodes.axon.covid.models.Recipient;

@Repository
public interface RecipientRepository extends JpaRepository<Recipient, Integer>{

	List<Recipient> findByPhoneContaining(String phone);


}
