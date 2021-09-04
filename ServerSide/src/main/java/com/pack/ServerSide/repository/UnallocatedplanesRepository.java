package com.pack.ServerSide.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.pack.ServerSide.models.Unallocatedplanes;

public interface UnallocatedplanesRepository extends JpaRepository<Unallocatedplanes, Long> {

	Unallocatedplanes findByName(String planeallocated);
	

}
