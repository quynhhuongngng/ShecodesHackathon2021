package shecodes.axon.covid.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;



@Entity
@Table(name = "recipient")
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
	
	
	
	@Override
	public String toString() {
		return "Recipient [id=" + id + ", username=" + username + ", identityCard=" + identityCard + ", phone=" + phone
				+ ", address=" + address + ", description=" + description + ", note=" + note + ", numberPeople="
				+ numberPeople + ", picture=" + picture + ", status=" + status + ", checkstatus=" + checkstatus
				+ ", chatboxId=" + chatboxId + ", neccessary=" + neccessary + ", neccessaryid=" + neccessaryid + "]";
	}
	public Recipient() {
		
	}
	public Recipient(int id, String username, String identityCard, String phone, String address, String description,
			String note, int numberPeople, String picture, boolean status, boolean checkstatus, int chatboxId,
			Neccessary neccessary, Integer neccessaryid) {
		
		this.id = id;
		this.username = username;
		this.identityCard = identityCard;
		this.phone = phone;
		this.address = address;
		this.description = description;
		this.note = note;
		this.numberPeople = numberPeople;
		this.picture = picture;
		this.status = status;
		this.checkstatus = checkstatus;
		this.chatboxId = chatboxId;
		this.neccessary = neccessary;
		this.neccessaryid = neccessaryid;
	}
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
