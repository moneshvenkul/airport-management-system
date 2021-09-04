package com.pack.ServerSide.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pack.ServerSide.models.Pilots;
import com.pack.ServerSide.models.Planes;


@Repository
public interface PilotsRepository extends JpaRepository<Pilots, Long> {
	
}
