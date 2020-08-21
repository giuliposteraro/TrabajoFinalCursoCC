package edu.trabajoFinal.dao;


import java.time.LocalDate;
import java.time.Period;
import java.time.format.DateTimeFormatter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
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
	private String nivel;
	
//	public AlumnoDTO(String nombre, String apellido, String fechaNac, String mail, String obraSoc, int numSoc,
//			ImageIcon certMedico, String nombre2, String apellido2, int dni, String mail2, int tel) {
//		super();
//		this.nombre = nombre;
//		this.apellido = apellido;
//		this.fechaNac = fechaNac;
//		this.mail = mail;
//		this.obraSoc = obraSoc;
//		this.numSoc = numSoc;
//		this.certMedico = certMedico;
//		if(this.edad().getYears() < 18) { // si es menor de edad agrega los datos del tutor
//			this.nombreMayor = nombre2;
//			this.apellidoMayor = apellido2;
//			this.dniMayor = dni;
//			this.mailMayor = mail2;
//			this.telefonoMayor = tel;
//		}
//	}
	
	public Period edad() {
		DateTimeFormatter fmt = DateTimeFormatter.ofPattern("dd/MM/yyyy");
		LocalDate fechaNac = LocalDate.parse(this.fechaNac, fmt);
		LocalDate ahora = LocalDate.now();
		Period periodo = Period.between(fechaNac, ahora);
		return periodo;
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
		if(this.edad().getYears() < 18) {
			this.nombreMayor = nombreMayor;
		}
	}

	public String getApellidoMayor() {
		return apellidoMayor;
	}

	public void setApellidoMayor(String apellidoMayor) {
		if(this.edad().getYears() < 18) {
		this.apellidoMayor = apellidoMayor;
		}
	}

	public int getDniMayor() {
		return dniMayor;
	}

	public void setDniMayor(int dniMayor) {
		if(this.edad().getYears() < 18) {
		this.dniMayor = dniMayor;
		}
	}

	public String getMailMayor() {
		return mailMayor;
	}

	public void setMailMayor(String mailMayor) {
		if(this.edad().getYears() < 18) {
		this.mailMayor = mailMayor;
		}
	}

	public int getTelefonoMayor() {
		return telefonoMayor;
	}

	public void setTelefonoMayor(int telefonoMayor) {
		if(this.edad().getYears() < 18) {
		this.telefonoMayor = telefonoMayor;
		}
	}

	public String getNivel() {
		return nivel;
	}

	public void setNivel(String nivel) {
		this.nivel = nivel;
	}
	
	
	
}
