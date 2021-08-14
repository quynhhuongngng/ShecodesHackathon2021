package shecodes.axon.covid.models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;



@Entity
@Table(name = "neccessary")
public class Neccessary {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
	private Integer vegetable;
	private Integer mask;
	private Integer dryNoodles;
	private Integer rice;
	private Integer protectiveClothing;
	private Integer glove;
	private Integer egg;
	private Integer milk;
	
    @OneToMany(mappedBy = "neccessary")
    private List<Recipient> recipient;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
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

	public List<Recipient> getRecipient() {
		return recipient;
	}

	public void setRecipient(List<Recipient> recipient) {
		this.recipient = recipient;
	}
    
    
}
