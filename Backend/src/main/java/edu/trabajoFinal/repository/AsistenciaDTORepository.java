package edu.trabajoFinal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import edu.trabajoFinal.dao.AsistenciaDTO;

@Repository
@CrossOrigin(origins = "http://localhost:4200")
public interface AsistenciaDTORepository extends JpaRepository<AsistenciaDTO, Integer>{

}
