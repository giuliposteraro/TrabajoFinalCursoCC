import { Component, OnInit } from '@angular/core';

import { Curso } from 'src/app/models/curso';
import { Router } from '@angular/router';
import { CursoService } from 'src/app/services/curso.service';



@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.scss']
})
export class CursoFormComponent implements OnInit{

  curso: Curso = new Curso();
  submitted = false; 

  constructor(private router: Router,
              private cursoService: CursoService) {
               }
  

  ngOnInit() {}

  newCurso(): void {
    this.submitted = false;
    this.curso = new Curso();
  }

  save() {
    this.cursoService
    .addCurso(this.curso).subscribe(data => {
      console.log(data)
      this.curso = new Curso();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  gotoList() {
    this.router.navigate(['/cursos']);
  }

  onSubmit() {
    this.submitted = true;
    this.save();       
  }

}