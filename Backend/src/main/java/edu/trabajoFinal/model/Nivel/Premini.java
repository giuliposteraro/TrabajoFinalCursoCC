package edu.trabajoFinal.model.Nivel;

public class Premini implements Categoria {

	@Override
	public String edad() {
		return "5 y 6";
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
