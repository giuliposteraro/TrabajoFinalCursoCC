package edu.trabajoFinal.model.Nivel;

public class Pulgas implements Categoria {
	
	@Override
	public String edad() {
		return "3 y 4";
	}

	@Override
	public String dias() {
		return "miercoles-viernes";
	}

	@Override
	public int valor() {
		return 1000;
	}

}
