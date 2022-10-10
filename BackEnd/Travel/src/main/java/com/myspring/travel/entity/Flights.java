package com.myspring.travel.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Flights {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String name;
	
	private String fromLoc;
	
	private String toLoc;
	
	private double price;
	
	public Flights() {
		
	}

	public Flights(int id, String name, String fromLoc, String toLoc, double price) {
		super();
		this.id = id;
		this.name = name;
		this.fromLoc = fromLoc;
		this.toLoc = toLoc;
		this.price = price;
	}

	public Flights(String name, String fromLoc, String toLoc, double price) {
		super();
		this.name = name;
		this.fromLoc = fromLoc;
		this.toLoc = toLoc;
		this.price = price;
	}

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

	public String getFromLoc() {
		return fromLoc;
	}

	public void setFromLoc(String fromLoc) {
		this.fromLoc = fromLoc;
	}

	public String getToLoc() {
		return toLoc;
	}

	public void setToLoc(String toLoc) {
		this.toLoc = toLoc;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

}
