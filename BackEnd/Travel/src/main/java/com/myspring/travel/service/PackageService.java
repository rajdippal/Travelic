package com.myspring.travel.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.myspring.travel.entity.Package;

import com.myspring.travel.repository.PackageRepository;

@Component
public class PackageService {
	
	@Autowired
	private PackageRepository packageRepo;
	
	public List<Package> getAllPackages() {
		return packageRepo.findAll();
	}
	
	public Package addPackage(Package pack) {
		return this.packageRepo.save(pack);
	}
}
