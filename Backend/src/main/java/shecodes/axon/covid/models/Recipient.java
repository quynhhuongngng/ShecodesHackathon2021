package shecodes.axon.covid.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Recipient {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private int id;
	private String username;
	private String identityCard;
	private String phone;
	private String address;
	
	private String description;
	private String note;
	private int numberPeople;
	private String picture;
	private boolean status;
	private boolean checkstatus;
	private int chatboxId;
	
	@ManyToOne
    @JoinColumn(name = "neccessaryid", insertable = false, updatable = false)
	private Neccessary neccessary;
	private Integer neccessaryid;
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getIdentityCard() {
		return identityCard;
	}
	public void setIdentityCard(String identityCard) {
		this.identityCard = identityCard;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getNote() {
		return note;
	}
	public void setNote(String note) {
		this.note = note;
	}
	public int getNumberPeople() {
		return numberPeople;
	}
	public void setNumberPeople(int numberPeople) {
		this.numberPeople = numberPeople;
	}
	public String getPicture() {
		return picture;
	}
	public void setPicture(String picture) {
		this.picture = picture;
	}
	public boolean isStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}
	public boolean isCheckstatus() {
		return checkstatus;
	}
	public void setCheckstatus(boolean checkstatus) {
		this.checkstatus = checkstatus;
	}
	public int getChatboxId() {
		return chatboxId;
	}
	public void setChatboxId(int chatboxId) {
		this.chatboxId = chatboxId;
	}
	public Neccessary getNeccessary() {
		return neccessary;
	}
	public void setNeccessary(Neccessary neccessary) {
		this.neccessary = neccessary;
	}
	public Integer getNeccessaryid() {
		return neccessaryid;
	}
	public void setNeccessaryid(Integer neccessaryid) {
		this.neccessaryid = neccessaryid;
	}
   
	
	
}
