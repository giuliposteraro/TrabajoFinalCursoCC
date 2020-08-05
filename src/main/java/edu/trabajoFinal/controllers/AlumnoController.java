package edu.trabajoFinal.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import edu.trabajoFinal.log.LogFile;
import edu.trabajoFinal.model.Alumno;
import edu.trabajoFinal.model.Respuesta;
import edu.trabajoFinal.repository.AlumnoRepository;

@RestController
public class AlumnoController {
	
	@Autowired
	private AlumnoRepository repoAlumnos;
	
	@Autowired
	private LogFile log;
	
	@Autowired
	private Respuesta respuesta;
	
	@GetMapping(value= "obtenerAlumnos")
	public List<Alumno> obtenerAlumnos(){
		return this.repoAlumnos.findAll();
	}
	
	@GetMapping(value= "Alumno/{id}")
	public Alumno obtenerAlumnoPorId(@PathVariable long id) {
		return this.repoAlumnos.findById(id).get();
	}
	
	@PostMapping(value="altaAlumno")
	public ResponseEntity<Respuesta> altaAlumno(@RequestBody Alumno alumno){
		try {
			repoAlumnos.save(alumno);
			this.respuesta.setMensaje("Alumno cargado correctamente");
			this.respuesta.setStatusCode(200);
			
		}
		
		catch(Exception e){
			this.respuesta.setMensaje("El alumno no se cargo correctamente");
			this.respuesta.setStatusCode(500);
		}
		return ResponseEntity.ok(this.respuesta);
	}
}
