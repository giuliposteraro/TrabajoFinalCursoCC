package edu.trabajoFinal.model.Nivel;

public class Avanzada implements Categoria {

	@Override
	public String edad() {
		return "cualquier edad";
	}

	@Override
	public String dias() {
		return "lunes,martes,viernes";
	}

	@Override
	public int valor() {
		return 1500;
	}

}
