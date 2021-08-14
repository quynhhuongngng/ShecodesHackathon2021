package shecodes.axon.covid.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;



@Entity
@Table(name = "supporter")
public class Supporter {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private int id;
	private String name;
	private String phone;
	private String address;
	private String note;
	private String image;
	private boolean status;
	private String vehicle;
	private Integer vegetables;
	private Integer mask;
	private Integer noodles;
	private Integer rice;
	private Integer protectCloth;
	private Integer gloves;
	private Integer eggs;
	private Integer milk;
	private Integer weight;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
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
	public String getNote() {
		return note;
	}
	public void setNote(String note) {
		this.note = note;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public boolean isStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}
	public String getVehicle() {
		return vehicle;
	}
	public void setVehicle(String vehicle) {
		this.vehicle = vehicle;
	}
	public Integer getVegetables() {
		return vegetables;
	}
	public void setVegetables(Integer vegetables) {
		this.vegetables = vegetables;
	}
	public Integer getMask() {
		return mask;
	}
	public void setMask(Integer mask) {
		this.mask = mask;
	}
	public Integer getNoodles() {
		return noodles;
	}
	public void setNoodles(Integer noodles) {
		this.noodles = noodles;
	}
	public Integer getRice() {
		return rice;
	}
	public void setRice(Integer rice) {
		this.rice = rice;
	}
	public Integer getProtectCloth() {
		return protectCloth;
	}
	public void setProtectCloth(Integer protectCloth) {
		this.protectCloth = protectCloth;
	}
	public Integer getGloves() {
		return gloves;
	}
	public void setGloves(Integer gloves) {
		this.gloves = gloves;
	}
	public Integer getEggs() {
		return eggs;
	}
	public void setEggs(Integer eggs) {
		this.eggs = eggs;
	}
	public Integer getMilk() {
		return milk;
	}
	public void setMilk(Integer milk) {
		this.milk = milk;
	}
	public Integer getWeight() {
		return weight;
	}
	public void setWeight(Integer weight) {
		this.weight = weight;
	}
	@Override
	public String toString() {
		return "Supporter [id=" + id + ", name=" + name + ", phone=" + phone + ", address=" + address + ", note=" + note
				+ ", image=" + image + ", status=" + status + ", vehicle=" + vehicle + ", vegetables=" + vegetables
				+ ", mask=" + mask + ", noodles=" + noodles + ", rice=" + rice + ", protectCloth=" + protectCloth
				+ ", gloves=" + gloves + ", eggs=" + eggs + ", milk=" + milk + ", weight=" + weight + "]";
	}
	public Supporter(int id, String name, String phone, String address, String note, String image, boolean status,
			String vehicle, Integer vegetables, Integer mask, Integer noodles, Integer rice, Integer protectCloth,
			Integer gloves, Integer eggs, Integer milk, Integer weight) {
		
		this.id = id;
		this.name = name;
		this.phone = phone;
		this.address = address;
		this.note = note;
		this.image = image;
		this.status = status;
		this.vehicle = vehicle;
		this.vegetables = vegetables;
		this.mask = mask;
		this.noodles = noodles;
		this.rice = rice;
		this.protectCloth = protectCloth;
		this.gloves = gloves;
		this.eggs = eggs;
		this.milk = milk;
		this.weight = weight;
	}
	public Supporter() {
		
	}
	
	
	
}
