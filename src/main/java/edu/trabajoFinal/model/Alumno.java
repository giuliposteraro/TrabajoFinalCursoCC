package edu.trabajoFinal.model;

import java.awt.Image;
import java.time.LocalDate;
import java.time.Period;
import java.time.format.DateTimeFormatter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import edu.trabajoFinal.model.Nivel.Nivel;

@Entity
@Table(name= "Alumnos")
public class Alumno {
	
	@Id @GeneratedValue
	private long id;
	
	@Column
	private String nombre;
	
	@Column
	private String apellido;
	
	@Column
	private CharSequence fechaNac;
	
	@Column
	private String mail;
	
	@Column
	private String obraSoc;
	
	@Column
	private int numSoc;
	
	@Column 
	private Image certMedico;
	
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
	private Nivel nivel;
	
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

	public Nivel getNivel() {
		return nivel;
	}

	public void setNivel(Nivel nivel) {
		this.nivel = nivel;
	}
	
	
	
	
}
