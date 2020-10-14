package edu.trabajoFinal.dao;

import javax.persistence.*;

@Entity
@Table(name = "Asistencias")
public class AsistenciaDTO {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	@Column
	private String numSocio;
	
	@ManyToOne
	private CursoDTO curso;

	@Column
	private boolean presente;

	@Column
	private String fecha;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public CursoDTO getCurso() {
		return curso;
	}

	public void setCurso(CursoDTO curso) {
		this.curso = curso;
	}

	public boolean isPresente() {
		return presente;
	}

	public void setPresente(boolean presente) {
		this.presente = presente;
	}

	public void setNumSocio(String numSocio) {
		this.numSocio = numSocio;
	}

	public String getNumSocio() {
		return numSocio;
	}

	public String getFecha() { return fecha; }

	public void setFecha(String fecha) { this.fecha = fecha; }
	
}
