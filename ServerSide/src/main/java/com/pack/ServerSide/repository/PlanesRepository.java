package com.pack.ServerSide.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pack.ServerSide.models.Planes;


@Repository
public interface PlanesRepository extends JpaRepository<Planes, Long> {

	Planes findByName(String name);
	
}
