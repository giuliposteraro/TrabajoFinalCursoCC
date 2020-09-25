package edu.trabajoFinal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import edu.trabajoFinal.dao.CursoDTO;

@Repository
@CrossOrigin(origins = "http://localhost:4200")
public interface CursoDTORepository extends JpaRepository<CursoDTO, Integer>{

}
