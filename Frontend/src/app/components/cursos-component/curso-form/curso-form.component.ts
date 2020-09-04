import { Component, OnInit } from '@angular/core';

import { Curso } from 'src/app/models/curso';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoService } from 'src/app/services/curso.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.scss']
})
export class CursoFormComponent {

  public curso: Curso;
  public modify: boolean = false;

  constructor(private route: ActivatedRoute, 
              private router: Router,
              private cursoService: CursoService) {
                this.curso = new Curso();
              }

  onSubmit(){
    //this.cursoService.addCurso(this.curso).subscribe(result => this.gotoCursoList());
    if(this.modify){
      this.cursoService.modifyCurso(this.curso).subscribe(result => this.goToCurso());
    }else{
      this.cursoService.addCurso(this.curso).subscribe(result => this.gotoCursoList());
    }
  }

  gotoCursoList() {
    this.router.navigate(['/cursos']);
  }

  goToCurso(){
    this.router.navigate(['/cursos/${curso.id}']);
  }
   
}