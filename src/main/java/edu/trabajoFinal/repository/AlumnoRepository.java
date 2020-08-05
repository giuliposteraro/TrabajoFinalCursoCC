package edu.trabajoFinal.repository;

import org.springframework.stereotype.Repository;

import edu.trabajoFinal.model.Alumno;

import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface AlumnoRepository extends JpaRepository<Alumno, Long>{

}
