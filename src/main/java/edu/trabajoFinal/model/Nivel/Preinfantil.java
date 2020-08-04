package edu.trabajoFinal.model.Nivel;

public class Preinfantil implements Categoria {

	@Override
	public String edad() {
		return "9 y 10";
	}

	@Override
	public String dias() {
		return "lunes-miercoles";
	}

	@Override
	public int valor() {
		return 1000;
	}

}
