package edu.trabajoFinal.model.Nivel;

public class Infantil implements Categoria {

	@Override
	public String edad() {
		return "11 y 12";
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
