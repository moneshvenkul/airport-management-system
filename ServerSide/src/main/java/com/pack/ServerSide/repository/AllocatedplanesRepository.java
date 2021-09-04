package com.pack.ServerSide.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pack.ServerSide.models.Allocatedplanes;

public interface AllocatedplanesRepository extends JpaRepository<Allocatedplanes, Long> {

	Allocatedplanes findByName(String hangarname);

	Allocatedplanes findByHangarname(String hangarname);

}
