package edu.trabajoFinal.dao;

import javax.persistence.*;

@Entity
@Table(name = "Asistencias")
public class AsistenciaDTO {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	@Column
	private int numSocio;

	@Column
	private String nombreAlumno;

	@ManyToOne
	private CursoDTO curso;

	@Column
	private String fecha;


	public int getId() {
		return id;
	}


	public CursoDTO getCurso() {
		return curso;
	}

	public void setCurso(CursoDTO curso) {
		this.curso = curso;
	}

	public void setNumSocio(int numSocio) {
		this.numSocio = numSocio;
	}

	public int getNumSocio() {
		return numSocio;
	}

	public String getFecha() { return fecha; }

	public void setFecha(String fecha) { this.fecha = fecha; }

    public String getNombreAlumno() {
        return nombreAlumno;
    }

    public void setNombreAlumno(String nombreAlumno) {
        this.nombreAlumno = nombreAlumno;
    }
}
