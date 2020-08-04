package edu.trabajoFinal.model.Nivel;

import java.util.ArrayList;

public class Escuela implements TipoNivel {

	@Override
	public ArrayList<Categoria> categorias() {
		ArrayList<Categoria> misCategorias = new ArrayList<Categoria>();
		misCategorias.add(new Avanzada());
		return misCategorias;
	}

}
