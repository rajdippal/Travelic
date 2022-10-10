package com.myspring.travel.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.myspring.travel.entity.Booking;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Integer>{

}
