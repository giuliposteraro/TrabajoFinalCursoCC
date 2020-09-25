package edu.trabajoFinal.repository;

import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import edu.trabajoFinal.dao.AlumnoDTO;

import org.springframework.data.jpa.repository.JpaRepository;

@Repository
@CrossOrigin(origins = "http://localhost:4200")
public interface AlumnoDTORepository extends JpaRepository<AlumnoDTO, Integer>{

}
