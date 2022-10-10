package com.myspring.travel.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.myspring.travel.entity.Booking;
import com.myspring.travel.entity.Flights;
import com.myspring.travel.entity.Package;
import com.myspring.travel.service.BookingService;
import com.myspring.travel.service.FlightsService;
import com.myspring.travel.service.PackageService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TravelController {
	
	@Autowired
	private PackageService packageService;
	
	@Autowired
	private FlightsService flightsService;
	
	@Autowired
	private BookingService bookingService;
	
	@GetMapping("/packages/all")
	public List<Package> getPackages() {
		return this.packageService.getAllPackages();
	}
	
	@PostMapping("/packages/add")
	public Package add(@RequestBody Package pack) {
		return this.packageService.addPackage(pack);
	}
	
	@GetMapping("/flights/all")
	public List<Flights> getFlights() {
		return this.flightsService.getAllFlights();
	}
	
	@GetMapping("/flights/search/{loc}")
	public List<Flights> getFlightsToLoc(@PathVariable String loc) {
		return this.flightsService.getAllFlightsTo(loc);
	}
	
	@GetMapping("/booking/all")
	public List<Booking> getAllBookings() {
		return this.bookingService.getAllBookings();
	}
	
	@PostMapping("/booking/add")
	public Booking add(@RequestBody Booking booking) {
		return this.bookingService.saveBooking(booking);
	}

}
