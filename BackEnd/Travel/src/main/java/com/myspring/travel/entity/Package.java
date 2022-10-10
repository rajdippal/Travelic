package com.myspring.travel.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Package {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String location;
	
	private String description;
	
	private double price;
	
	public Package() {
		
	}

	public Package(int id, String location, String description, double price) {
		super();
		this.id = id;
		this.location = location;
		this.description = description;
		this.price = price;
	}

	public Package(String location, String description, double price) {
		super();
		this.location = location;
		this.description = description;
		this.price = price;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

}
