package com.pack.ServerSide.controllers;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pack.ServerSide.payload.response.DashboardStatsResponse;
import com.pack.ServerSide.repository.AllocatedplanesRepository;
import com.pack.ServerSide.repository.HangarRepository;
import com.pack.ServerSide.repository.ManagersRepository;
import com.pack.ServerSide.repository.PilotsRepository;
import com.pack.ServerSide.repository.PlanesRepository;
import com.pack.ServerSide.repository.UnallocatedplanesRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/test")
public class TestController {

	private final ManagersRepository managersRepository;
	private final PlanesRepository planesRepository;
	private final PilotsRepository pilotsRepository;
	private final HangarRepository hangarRepository;
	private final AllocatedplanesRepository allocatedplanesRepository;
	private final UnallocatedplanesRepository unallocatedplanesRepository;

	public TestController(ManagersRepository managersRepository, PlanesRepository planesRepository,
			PilotsRepository pilotsRepository, HangarRepository hangarRepository,
			AllocatedplanesRepository allocatedplanesRepository, UnallocatedplanesRepository unallocatedplanesRepository) {
		this.managersRepository = managersRepository;
		this.planesRepository = planesRepository;
		this.pilotsRepository = pilotsRepository;
		this.hangarRepository = hangarRepository;
		this.allocatedplanesRepository = allocatedplanesRepository;
		this.unallocatedplanesRepository = unallocatedplanesRepository;
	}

	@GetMapping("/all")
	public String allAccess() {
		return "Airport operations overview";
	}

	@GetMapping("/dashboard")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	public DashboardStatsResponse dashboard() {
		return new DashboardStatsResponse(managersRepository.count(), planesRepository.count(), pilotsRepository.count(),
				hangarRepository.count(), allocatedplanesRepository.count(), unallocatedplanesRepository.count());
	}

	@GetMapping("/user")
	@PreAuthorize("hasRole('USER') or  hasRole('ADMIN')")
	public String userAccess() {
		return "User Content.";
	}

	@GetMapping("/admin")
	@PreAuthorize("hasRole('ADMIN')")
	public String adminAccess() {
		return "Admin Board.";
	}
}
