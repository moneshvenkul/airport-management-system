package com.pack.ServerSide.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pack.ServerSide.models.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	
	Optional<User> findByUsername(String username);
	
	
	
	List<User> findByAge(int age);

	Boolean existsByUsername(String username);

	Boolean existsByEmail(String email);



	User findByEmail(String email);
}
