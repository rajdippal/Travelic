package com.myspring.travel.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.myspring.travel.entity.Booking;
import com.myspring.travel.repository.BookingRepository;

@Component
public class BookingService {
	
	@Autowired
	private BookingRepository bookingRepo;
	
	public List<Booking> getAllBookings() {
		return this.bookingRepo.findAll();
	}
	
	public Booking saveBooking(Booking booking) {
		return this.bookingRepo.save(booking);
	}

}
