package com.myspring.travel.entity;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Booking {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String name;
	
	private String email;
	
	private Date fromDate;
		
	private String packageName;
	
	private double price;

	public Booking() {
		
	}

	public Booking(int id, String name, String email, Date fromDate, String packageName, double price) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.fromDate = fromDate;
		this.packageName = packageName;
		this.price = price;
	}

	public Booking(String name, String email, Date fromDate, String packageName, double price) {
		super();
		this.name = name;
		this.email = email;
		this.fromDate = fromDate;
		this.packageName = packageName;
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

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Date getFromDate() {
		return fromDate;
	}

	public void setFromDate(Date fromDate) {
		this.fromDate = fromDate;
	}

	public String getPackageName() {
		return packageName;
	}

	public void setPackageName(String packageName) {
		this.packageName = packageName;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

}
