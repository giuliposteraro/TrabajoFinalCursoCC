package edu.trabajoFinal.responses;

import edu.trabajoFinal.dao.AlumnoDTO;

public class AlumnoResponse implements EntitiesApplication<AlumnoDTO> {
	
	private AlumnoDTO alumno;
	private String mensaje;
	private int statusCode;
	
	
	
	public AlumnoDTO getAlumno() {
		return alumno;
	}



	public void setAlumno(AlumnoDTO alumno) {
		this.alumno = alumno;
	}



	public String getMensaje() {
		return mensaje;
	}



	public void setMensaje(String mensaje) {
		this.mensaje = mensaje;
	}



	public int getStatusCode() {
		return statusCode;
	}



	public void setStatusCode(int statusCode) {
		this.statusCode = statusCode;
	}



	public AlumnoResponse(AlumnoDTO alumno) {
		super();
		this.alumno = alumno;
	}



	@Override
	public AlumnoDTO getEntity() {
		return this.alumno;
	}

}
