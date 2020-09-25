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

import edu.trabajoFinal.dao.AlumnoDTO;
import edu.trabajoFinal.repository.AlumnoDTORepository;
import edu.trabajoFinal.responses.AlumnoResponse;
import edu.trabajoFinal.responses.Response;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class AlumnoController {
	
	@Autowired
	private AlumnoDTORepository repoAlumnos;
	
	@Autowired
	private Response respuesta;
	
	@GetMapping(value= "/alumnos")
	public List<AlumnoDTO> obtenerAlumnos(){
		return this.repoAlumnos.findAll();
	}
	
	@GetMapping(value= "/alumnos/{id}")
	public ResponseEntity<AlumnoResponse> obtenerAlumnoPorId(@PathVariable int id) {
		AlumnoResponse ar = null;
		try {
			ar = new AlumnoResponse(repoAlumnos.findById(id).get());
			ar.setMensaje("Alumno encontrado");
			ar.setStatusCode(200);
			return ResponseEntity.ok(ar);
			
		} catch (Exception e) {
			return (ResponseEntity<AlumnoResponse>) ResponseEntity.ok(ar).status(500);
		}
	}
	
	@PostMapping(value="/alumnos")
	public ResponseEntity<Response> altaAlumno(@RequestBody AlumnoDTO alumno){
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
	
	@PutMapping(value= "/alumnos/{id}")
	public ResponseEntity<Response> modificarAlumno(@RequestBody AlumnoDTO alumno){
		try {
			AlumnoDTO amodificar = this.repoAlumnos.findById(alumno.getNumSoc()).get();
			amodificar.setNombre(alumno.getNombre());
			amodificar.setApellido(alumno.getApellido());
			amodificar.setFechaNac(alumno.getFechaNac());
			amodificar.setMail(alumno.getMail());
			amodificar.setObraSoc(alumno.getObraSoc());
			amodificar.setCertMedico(alumno.getCertMedico());
			amodificar.setNombreMayor(alumno.getNombreMayor());
			amodificar.setApellidoMayor(alumno.getApellidoMayor());
			amodificar.setDniMayor(alumno.getDniMayor());
			amodificar.setMailMayor(alumno.getMailMayor());
			amodificar.setTelefonoMayor(alumno.getTelefonoMayor());
			amodificar.setCurso(alumno.getCurso());
			amodificar.setFechaPago(alumno.getFechaPago());
			this.repoAlumnos.save(amodificar);
			this.respuesta.setMensaje("Modifico correctamente");
			this.respuesta.setStatusCode(200);
		}
		catch(Exception e) {
			this.respuesta.setMensaje("Error al modificar");
			this.respuesta.setStatusCode(500);
		}
		
		return ResponseEntity.ok(this.respuesta);
	}
	
	@DeleteMapping(value= "/alumnos/{id}")
	public ResponseEntity<Response> eliminarAlumno(@RequestBody AlumnoDTO alumno){
		try {
			repoAlumnos.deleteById(alumno.getNumSoc());
			this.respuesta.setMensaje("Alumno eliminado correctamente");
			this.respuesta.setStatusCode(200);
		}
		catch(Exception e){
			this.respuesta.setMensaje("El alumno no se elimino correctamente");
			this.respuesta.setStatusCode(500);
		}
		return ResponseEntity.ok(this.respuesta);
	}
}
