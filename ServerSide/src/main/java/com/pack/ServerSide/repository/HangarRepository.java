package com.pack.ServerSide.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pack.ServerSide.models.Hangars;

@Repository
public interface HangarRepository extends JpaRepository<Hangars, Long>  {

}
