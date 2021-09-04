package com.pack.ServerSide.models;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name="hangars")
public class Hangars {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotBlank
	@Size(max = 20)
	private String hangarname;

	@NotBlank
	@Size(max = 20)
	private String model;
	
	@Size(max = 20)
	private String planeallocated;
	
	
	
	

	public String getPlaneallocated() {
		return planeallocated;
	}

	public void setPlaneallocated(String planeallocated) {
		this.planeallocated = planeallocated;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getHangarname() {
		return hangarname;
	}

	public void setHangarname(String hangarname) {
		this.hangarname = hangarname;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public Hangars(Long id, @NotBlank @Size(max = 20) String hangarname, @NotBlank @Size(max = 20) String model) {
		super();
		this.id = id;
		this.hangarname = hangarname;
		this.model = model;
	}

	public Hangars(@NotBlank @Size(max = 20) String hangarname, @NotBlank @Size(max = 20) String model) {
		super();
		this.hangarname = hangarname;
		this.model = model;
	}
	
	

	public Hangars(@NotBlank @Size(max = 20) String hangarname, @NotBlank @Size(max = 20) String model,
			 @Size(max = 20) String planeallocated) {
		super();
		this.hangarname = hangarname;
		this.model = model;
		this.planeallocated = planeallocated;
	}
	
	

	public Hangars(Long id, @NotBlank @Size(max = 20) String hangarname, @NotBlank @Size(max = 20) String model,
			@Size(max = 20) String planeallocated) {
		super();
		this.id = id;
		this.hangarname = hangarname;
		this.model = model;
		this.planeallocated = planeallocated;
	}

	public Hangars() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

}
