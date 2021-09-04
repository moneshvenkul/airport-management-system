package com.pack.ServerSide.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pack.ServerSide.models.Managers;

@Repository
public interface ManagersRepository extends JpaRepository<Managers, Long> {

	void findByUsername(String username);

}
