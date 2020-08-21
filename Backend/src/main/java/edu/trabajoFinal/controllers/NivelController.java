package edu.trabajoFinal.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import edu.trabajoFinal.dao.NivelDTO;
import edu.trabajoFinal.repository.NivelDTORepository;
import edu.trabajoFinal.response.Response;

@CrossOrigin
@RestController
public class NivelController {
	
	@Autowired
	private NivelDTORepository repoNiveles;
	
	@Autowired
	private Response respuesta;
	
	@GetMapping(value= "niveles")
	public List<NivelDTO> obtenerNivels(){
		return this.repoNiveles.findAll();
	}
	
	@GetMapping(value= "niveles/{id}")
	public NivelDTO obtenerNivelPorId(@PathVariable int id) {
		return this.repoNiveles.findById(id).get();
	}
	
	@PostMapping(value="niveles")
	public ResponseEntity<Response> altaNivel(@RequestBody NivelDTO nivel){
		try {
			repoNiveles.save(nivel);
			this.respuesta.setMensaje("Nivel cargado correctamente");
			this.respuesta.setStatusCode(200);
		}
		
		catch(Exception e){
			this.respuesta.setMensaje("El nivel no se dio de alta");
			this.respuesta.setStatusCode(500);
		}
		return ResponseEntity.ok(this.respuesta);
	}
	
	@PutMapping(value= "niveles/{id}")
	public ResponseEntity<Response> modificarNivel(@RequestBody NivelDTO nivel){
		try {
			NivelDTO nmodificar = this.repoNiveles.findById(nivel.getId()).get();
			nmodificar.setTipo(nivel.getTipo());
			this.repoNiveles.save(nmodificar);
			this.respuesta.setMensaje("Modifico correctamente");
			this.respuesta.setStatusCode(200);
		}
		catch(Exception e) {
			this.respuesta.setMensaje("Error al modificar");
			this.respuesta.setStatusCode(500);
		}
		
		return ResponseEntity.ok(this.respuesta);
	}
	
	@DeleteMapping(value= "niveles/{id}")
	public ResponseEntity<Response> eliminarNivel(@RequestBody NivelDTO nivel){
		try {
			repoNiveles.deleteById(nivel.getId());
			this.respuesta.setMensaje("Nivel eliminado correctamente");
			this.respuesta.setStatusCode(200);
		}
		catch(Exception e){
			this.respuesta.setMensaje("El nivel no se elimino correctamente");
			this.respuesta.setStatusCode(500);
		}
		return ResponseEntity.ok(this.respuesta);
	}
}
