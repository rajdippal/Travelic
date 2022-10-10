package com.myspring.travel.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.myspring.travel.entity.Package;
import org.springframework.stereotype.Repository;

@Repository
public interface PackageRepository extends JpaRepository<Package, Integer> {

}
