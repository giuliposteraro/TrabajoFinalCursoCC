package edu.trabajoFinal.model.Nivel;

public class Mini implements Categoria {

	@Override
	public String edad() {
		return "7 y 8";
	}

	@Override
	public String dias() {
		return "martes-viernes";
	}

	@Override
	public int valor() {
		return 1000;
	}

}
