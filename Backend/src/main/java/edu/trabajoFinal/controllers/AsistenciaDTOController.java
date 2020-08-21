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

import edu.trabajoFinal.dao.AsistenciaDTO;
import edu.trabajoFinal.repository.AsistenciaDTORepository;
import edu.trabajoFinal.response.Response;

@CrossOrigin
@RestController
public class AsistenciaDTOController {
	@Autowired
	private AsistenciaDTORepository repoAsistencias;

	
	@Autowired
	private Response respuesta;
	
	@GetMapping(value= "asistencias")
	public List<AsistenciaDTO> obtenerAsistencias(){
		return this.repoAsistencias.findAll();
	}
	
	@GetMapping(value= "asistencias/{id}")
	public AsistenciaDTO obtenerAsistenciaPorId(@PathVariable int id) {
		return this.repoAsistencias.findById(id).get();
	}
	
	@PostMapping(value="asistencias")
	public ResponseEntity<Response> altaAsistencia(@RequestBody AsistenciaDTO asistencia){
		try {
			repoAsistencias.save(asistencia);
			this.respuesta.setMensaje("Asistencia cargado correctamente");
			this.respuesta.setStatusCode(200);
		}
		
		catch(Exception e){
			this.respuesta.setMensaje("El Asistencia no se dio de alta");
			this.respuesta.setStatusCode(500);
		}
		return ResponseEntity.ok(this.respuesta);
	}
	
	@PutMapping(value= "Asistencias/{id}")
	public ResponseEntity<Response> modificarAsistencia(@RequestBody AsistenciaDTO asistencia){
		try {
			AsistenciaDTO amodificar = this.repoAsistencias.findById(asistencia.getId()).get();
			amodificar.setCurso(asistencia.getCurso());
			amodificar.setPresente(asistencia.isPresente());
			this.repoAsistencias.save(amodificar);
			this.respuesta.setMensaje("Modifico correctamente");
			this.respuesta.setStatusCode(200);
		}
		catch(Exception e) {
			this.respuesta.setMensaje("Error al modificar");
			this.respuesta.setStatusCode(500);
		}
		
		return ResponseEntity.ok(this.respuesta);
	}
	
	@DeleteMapping(value= "asistencias/{id}")
	public ResponseEntity<Response> eliminarAsistencia(@RequestBody AsistenciaDTO asistencia){
		try {
			repoAsistencias.deleteById(asistencia.getId());
			this.respuesta.setMensaje("Asistencia eliminada correctamente");
			this.respuesta.setStatusCode(200);
		}
		catch(Exception e){
			this.respuesta.setMensaje("La asistencia no se elimino correctamente");
			this.respuesta.setStatusCode(500);
		}
		return ResponseEntity.ok(this.respuesta);
	}
}
