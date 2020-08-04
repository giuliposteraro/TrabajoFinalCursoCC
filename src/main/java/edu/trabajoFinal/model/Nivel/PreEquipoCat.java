package edu.trabajoFinal.model.Nivel;

public class PreEquipoCat implements Categoria {

	@Override
	public String edad() {
		return "cualquier edad";
	}

	@Override
	public String dias() {
		return "lunes,miercoles,viernes";
	}

	@Override
	public int valor() {
		return 2000;
	}

}
