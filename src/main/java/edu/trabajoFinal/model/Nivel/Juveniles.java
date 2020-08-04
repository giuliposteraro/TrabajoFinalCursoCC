package edu.trabajoFinal.model.Nivel;

public class Juveniles implements Categoria {

	@Override
	public String edad() {
		return "13 o mas";
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
