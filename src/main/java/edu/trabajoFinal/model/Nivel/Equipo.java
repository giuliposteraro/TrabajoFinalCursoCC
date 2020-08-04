package edu.trabajoFinal.model.Nivel;

import java.util.ArrayList;

public class Equipo implements TipoNivel {

	@Override
	public ArrayList<Categoria> categorias() {
		ArrayList<Categoria> misCategorias = new ArrayList<Categoria>();
		misCategorias.add(new EquipoCat());
		return misCategorias;
	}

}
