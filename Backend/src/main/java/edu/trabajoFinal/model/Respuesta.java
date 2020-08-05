package edu.trabajoFinal.model;

import org.springframework.stereotype.Component;

@Component
public class Respuesta {
	
	private String mensaje;
	private int statusCode;
	
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
	
	
}