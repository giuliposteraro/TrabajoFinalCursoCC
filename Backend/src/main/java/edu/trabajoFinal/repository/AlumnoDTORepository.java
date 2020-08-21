package edu.trabajoFinal.repository;

import org.springframework.stereotype.Repository;

import edu.trabajoFinal.dao.AlumnoDTO;

import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface AlumnoDTORepository extends JpaRepository<AlumnoDTO, Integer>{

}
