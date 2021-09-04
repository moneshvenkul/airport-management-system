package com.pack.ServerSide.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name="pilots")
public class Pilots {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotBlank
	@Size(max = 20)
	private String pilotname;

	@NotBlank
	@Size(max = 20)
	private String model;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getPilotname() {
		return pilotname;
	}

	public void setPilotname(String pilotname) {
		this.pilotname = pilotname;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public Pilots() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Pilots(@NotBlank @Size(max = 20) String pilotname, @NotBlank @Size(max = 20) String model) {
		super();
		this.pilotname = pilotname;
		this.model = model;
	}

	public Pilots(Long id, @NotBlank @Size(max = 20) String pilotname, @NotBlank @Size(max = 20) String model) {
		super();
		this.id = id;
		this.pilotname = pilotname;
		this.model = model;
	}
	
	

}
