package edu.trabajoFinal.model;

import java.awt.Image;
import java.time.LocalDate;
import java.time.Period;
import java.time.format.DateTimeFormatter;

public class Alumno {
	private String nombre;
	private String apellido;
	private CharSequence fechaNac;
	private String mail;
	private String obraSoc;
	private int numSoc;
	private Image certMedico;
	private String nombreMayor;
	private String apellidoMayor;
	private int dniMayor;
	private String mailMayor;
	private int telefonoMayor;
	
	public Alumno(String nombre, String apellido, CharSequence fechaNac, String mail, String obraSoc, int numSoc,
			Image certMedico, String nombre2, String apellido2, int dni, String mail2, int tel) {
		super();
		this.nombre = nombre;
		this.apellido = apellido;
		this.fechaNac = fechaNac;
		this.mail = mail;
		this.obraSoc = obraSoc;
		this.numSoc = numSoc;
		this.certMedico = certMedico;
		if(this.edad() < 18) {
			this.nombreMayor = nombre2;
			this.apellidoMayor = apellido2;
			this.dniMayor = dni;
			this.mailMayor = mail2;
			this.telefonoMayor = tel;
		}
	}
	
	public int edad() {
		DateTimeFormatter fmt = DateTimeFormatter.ofPattern("dd/MM/yyyy");
		LocalDate fechaNac = LocalDate.parse(this.fechaNac, fmt);
		LocalDate hoy = LocalDate.now();
		Period periodo = Period.between(fechaNac, hoy); 
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

	public CharSequence getFechaNac() {
		return fechaNac;
	}

	public void setFechaNac(CharSequence fechaNac) {
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

	public Image getCertMedico() {
		return certMedico;
	}

	public void setCertMedico(Image certMedico) {
		this.certMedico = certMedico;
	}
	
	
	
}
