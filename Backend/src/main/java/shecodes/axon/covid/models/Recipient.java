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
	private String phone;
	private String address;
	private String description;
	private String note;
	private String picture;
	private boolean status;
	private Integer vegetable;
	private Integer mask;
	private Integer dryNoodles;
	private Integer rice;
	private Integer protectiveClothing;
	private Integer glove;
	private Integer egg;
	private Integer milk;
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
	public Integer getVegetable() {
		return vegetable;
	}
	public void setVegetable(Integer vegetable) {
		this.vegetable = vegetable;
	}
	public Integer getMask() {
		return mask;
	}
	public void setMask(Integer mask) {
		this.mask = mask;
	}
	public Integer getDryNoodles() {
		return dryNoodles;
	}
	public void setDryNoodles(Integer dryNoodles) {
		this.dryNoodles = dryNoodles;
	}
	public Integer getRice() {
		return rice;
	}
	public void setRice(Integer rice) {
		this.rice = rice;
	}
	public Integer getProtectiveClothing() {
		return protectiveClothing;
	}
	public void setProtectiveClothing(Integer protectiveClothing) {
		this.protectiveClothing = protectiveClothing;
	}
	public Integer getGlove() {
		return glove;
	}
	public void setGlove(Integer glove) {
		this.glove = glove;
	}
	public Integer getEgg() {
		return egg;
	}
	public void setEgg(Integer egg) {
		this.egg = egg;
	}
	public Integer getMilk() {
		return milk;
	}
	public void setMilk(Integer milk) {
		this.milk = milk;
	}
	@Override
	public String toString() {
		return "Recipient [id=" + id + ", username=" + username + ", phone=" + phone + ", address=" + address
				+ ", description=" + description + ", note=" + note + ", picture=" + picture + ", status=" + status
				+ ", vegetable=" + vegetable + ", mask=" + mask + ", dryNoodles=" + dryNoodles + ", rice=" + rice
				+ ", protectiveClothing=" + protectiveClothing + ", glove=" + glove + ", egg=" + egg + ", milk=" + milk
				+ "]";
	}
	public Recipient(int id, String username, String phone, String address, String description, String note,
			String picture, boolean status, Integer vegetable, Integer mask, Integer dryNoodles, Integer rice,
			Integer protectiveClothing, Integer glove, Integer egg, Integer milk) {
		
		this.id = id;
		this.username = username;
		this.phone = phone;
		this.address = address;
		this.description = description;
		this.note = note;
		this.picture = picture;
		this.status = status;
		this.vegetable = vegetable;
		this.mask = mask;
		this.dryNoodles = dryNoodles;
		this.rice = rice;
		this.protectiveClothing = protectiveClothing;
		this.glove = glove;
		this.egg = egg;
		this.milk = milk;
	}
	public Recipient() {
	
	}

	
}
