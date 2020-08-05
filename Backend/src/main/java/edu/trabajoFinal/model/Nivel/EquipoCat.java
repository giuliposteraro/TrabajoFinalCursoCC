package edu.trabajoFinal.model.Nivel;

public class EquipoCat implements Categoria {

	@Override
	public String edad() {
		return "cualquier edad";
	}

	@Override
	public String dias() {
		return "lunes,martes,miercoles,viernes";
	}

	@Override
	public int valor() {
		return 2500;
	}

}
