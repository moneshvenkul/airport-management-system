package com.pack.ServerSide.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name="planes")
public class Planes {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotBlank
	@Size(max = 20)
	private String name;

	@NotBlank
	@Size(max = 20)
	private String model;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public Planes(Long id, @NotBlank @Size(max = 20) String name, @NotBlank @Size(max = 20) String model) {
		super();
		this.id = id;
		this.name = name;
		this.model = model;
	}

	public Planes(@NotBlank @Size(max = 20) String name, @NotBlank @Size(max = 20) String model) {
		super();
		this.name = name;
		this.model = model;
	}

	public Planes() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

}
