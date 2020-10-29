package edu.trabajoFinal.dao;


import java.awt.*;
import java.time.LocalDate;
import java.time.Period;
import java.time.format.DateTimeFormatter;

import javax.persistence.*;


@Entity
@Table(name= "Alumnos")
public class AlumnoDTO {
	
	@Id 
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "numSocio")
	private int numSocio;
	
	@Column
	private String nombre;
	
	@Column
	private String apellido;
	
	@Column
	private String fechaNac;
	
	@Column
	private String mail;
	
	@Column
	private String obraSoc;

	@Column
	private String certMedico;
	
	@Column
	private String nombreMayor;
	
	@Column
	private String apellidoMayor;
	
	@Column
	private String dniMayor;
	
	@Column
	private String mailMayor;
	
	@Column
	private String telefonoMayor;

	@ManyToOne
	private CursoDTO curso;
	
	@Column
	private String fechaPago;

	@Column
    private String fechaAsistencia;
	
	public boolean mayorDeEdad() {
		return this.edad() >= 18;
	}
	
	public int edad() {
		DateTimeFormatter fmt = DateTimeFormatter.ofPattern("dd/MM/yyyy");
		LocalDate fechaNac = LocalDate.parse(this.fechaNac, fmt);
		LocalDate ahora = LocalDate.now();
		Period periodo = Period.between(fechaNac, ahora);
		return periodo.getYears();
	}
	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public String getFechaNac() {
		return fechaNac;
	}

	public void setFechaNac(String fechaNac) {
		this.fechaNac = fechaNac;
	}

	public String getMail() {
		return mail;
	}

	public void setMail(String mail) {
		this.mail = mail;
	}

	public String getObraSoc() {
		return obraSoc;
	}

	public void setObraSoc(String obraSoc) {
		this.obraSoc = obraSoc;
	}

	public int getNumSocio() {
		return numSocio;
	}

	public String getCertMedico() {
		return certMedico;
	}

	public void setCertMedico(String certMedico) {
		this.certMedico = certMedico;
	}

	public String getNombreMayor() {
		return nombreMayor;
	}

	public void setNombreMayor(String nombreMayor) {
			this.nombreMayor = nombreMayor;
	}

	public String getApellidoMayor() {
		return apellidoMayor;
	}

	public void setApellidoMayor(String apellidoMayor) {
		this.apellidoMayor = apellidoMayor;
	}

	public String getDniMayor() {
		return dniMayor;
	}

	public void setDniMayor(String dniMayor) {
		this.dniMayor = dniMayor;
	}

	public String getMailMayor() {
		return mailMayor;
	}

	public void setMailMayor(String mailMayor) {
		this.mailMayor = mailMayor;
	}

	public String getTelefonoMayor() {
		return telefonoMayor;
	}

	public void setTelefonoMayor(String telefonoMayor) {
		this.telefonoMayor = telefonoMayor;
	}
	public CursoDTO getCurso() {
		return curso;
	}

	public void setCurso(CursoDTO curso) {
		this.curso = curso;
	}
	
	public String getFechaPago() {
		return fechaPago;
	}
	public void setFechaPago(String fechaPago) {
		this.fechaPago = fechaPago;
	}

	public String getFechaAsistencia() {
		return fechaAsistencia;
	}

	public void setFechaAsistencia(String fechaAsistencia) {
		this.fechaAsistencia = fechaAsistencia;
	}
}
