package edu.trabajoFinal.model.Nivel;

import java.util.ArrayList;

public class Escuelita implements TipoNivel {
	
	
	@Override
	public ArrayList<Categoria> categorias() {
		ArrayList<Categoria> misCategorias = new ArrayList<Categoria>();
		misCategorias.add(new Pulgas());
		misCategorias.add(new Premini());
		misCategorias.add(new Mini());
		misCategorias.add(new Preinfantil());
		misCategorias.add(new Infantil());
		misCategorias.add(new Juveniles());
		return misCategorias;
	}
	
}
