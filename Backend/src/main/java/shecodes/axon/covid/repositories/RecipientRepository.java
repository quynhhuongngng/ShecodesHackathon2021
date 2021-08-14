package shecodes.axon.covid.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import shecodes.axon.covid.models.Recipient;

public interface RecipientRepository extends JpaRepository<Recipient, Integer>{

	/*
	 * List<Recipient> findByUsername(String keyword);
	 * 
	 * 
	 * @Query("SELECT r FROM Recipient r.username like %:keyword% OR r.identityCard like %:keyword% OR r.phone like %:keyword%"
	 * ) List<Recipient> getByUsername(@Param("keyword") String keyword);
	 * 
	 * @Query("SELECT r FROM Recipient r WHERE r.neccessaryid = :id")
	 * List<Recipient> getByNeccessary(@Param("id") Integer id);
	 */


}
