package edu.trabajoFinal.dao;


import java.time.LocalDate;
import java.time.Period;
import java.time.format.DateTimeFormatter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.swing.ImageIcon;


@Entity
@Table(name= "Alumnos")
public class AlumnoDTO {
	
	@Id 
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int numSoc;
	
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
	private ImageIcon certMedico;
	
	@Column
	private String nombreMayor;
	
	@Column
	private String apellidoMayor;
	
	@Column
	private int dniMayor;
	
	@Column
	private String mailMayor;
	
	@Column
	private int telefonoMayor;
	
	@Column
	private String curso;
	
	@Column
	private String fechaPago;
	
	
	public boolean mayorDeEdad() {
		DateTimeFormatter fmt = DateTimeFormatter.ofPattern("dd/MM/yyyy");
		LocalDate fechaNac = LocalDate.parse(this.fechaNac, fmt);
		LocalDate ahora = LocalDate.now();
		Period periodo = Period.between(fechaNac, ahora);
		return periodo.getYears() >= 18;
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

	public int getNumSoc() {
		return numSoc;
	}

	public void setNumSoc(int numSoc) {
		this.numSoc = numSoc;
	}

	public ImageIcon getCertMedico() {
		return certMedico;
	}

	public void setCertMedico(ImageIcon certMedico) {
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

	public int getDniMayor() {
		return dniMayor;
	}

	public void setDniMayor(int dniMayor) {
		this.dniMayor = dniMayor;
	}

	public String getMailMayor() {
		return mailMayor;
	}

	public void setMailMayor(String mailMayor) {
		this.mailMayor = mailMayor;
	}

	public int getTelefonoMayor() {
		return telefonoMayor;
	}

	public void setTelefonoMayor(int telefonoMayor) {
		this.telefonoMayor = telefonoMayor;
	}
	public String getCurso() {
		return curso;
	}
	public void setCurso(String curso) {
		this.curso = curso;
	}
	public String getFechaPago() {
		return fechaPago;
	}
	public void setFechaPago(String fechaPago) {
		this.fechaPago = fechaPago;
	}
	
	
	
	
}
