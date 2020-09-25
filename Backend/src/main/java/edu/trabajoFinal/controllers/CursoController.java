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

import edu.trabajoFinal.dao.CursoDTO;
import edu.trabajoFinal.repository.CursoDTORepository;
import edu.trabajoFinal.responses.Response;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CursoController {
	
	@Autowired
	private CursoDTORepository repoCursos;

	
	@Autowired
	private Response respuesta;
	
	@GetMapping(value= "/cursos")
	public List<CursoDTO> obtenerCursos(){
		return this.repoCursos.findAll();
	}
	
	@GetMapping(value= "/cursos/{id}")
	public CursoDTO obtenerCursoPorId(@PathVariable int id) {
		return this.repoCursos.findById(id).get();
	}
	
	@PostMapping(value="/cursos")
	public ResponseEntity<Response> altaCurso(@RequestBody CursoDTO curso){
		try {
			repoCursos.save(curso);
			this.respuesta.setMensaje("Curso cargado correctamente");
			this.respuesta.setStatusCode(200);
		}
		
		catch(Exception e){
			this.respuesta.setMensaje("El curso no se dio de alta");
			this.respuesta.setStatusCode(500);
		}
		return ResponseEntity.ok(this.respuesta);
	}
	
	@PutMapping(value= "/cursos/{id}")
	public ResponseEntity<Response> modificarCurso(@RequestBody CursoDTO curso){
		try {
			CursoDTO cmodificar = this.repoCursos.findById(curso.getId()).get();
			cmodificar.setNivel(curso.getNivel());
			cmodificar.setCategoria(curso.getCategoria());
			cmodificar.setDias(curso.getDias());
			cmodificar.setEdades(curso.getEdades());
			cmodificar.setValor(curso.getValor());
			this.repoCursos.save(cmodificar);
			this.respuesta.setMensaje("Modifico correctamente");
			this.respuesta.setStatusCode(200);
		}
		catch(Exception e) {
			this.respuesta.setMensaje("Error al modificar");
			this.respuesta.setStatusCode(500);
		}
		
		return ResponseEntity.ok(this.respuesta);
	}
	
	@DeleteMapping(value= "/cursos/{id}")
	public ResponseEntity<Response> eliminarCurso(@PathVariable int id){
		try {
			repoCursos.deleteById(id);
			this.respuesta.setMensaje("Curso eliminado correctamente");
			this.respuesta.setStatusCode(200);
		}
		catch(Exception e){
			this.respuesta.setMensaje("El curso no se elimino correctamente");
			this.respuesta.setStatusCode(500);
		}
		return ResponseEntity.ok(this.respuesta);
	}
}
