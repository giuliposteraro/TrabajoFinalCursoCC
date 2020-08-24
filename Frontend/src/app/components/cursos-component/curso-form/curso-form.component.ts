import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.scss']
})
export class CursoFormComponent {

  public curso: Curso;


  constructor(private route: ActivatedRoute, 
              private router: Router,
              private cursoService: CursoService) {
                this.curso = new Curso();
               }

  onSubmit(){
    this.cursoService.addCurso(this.curso).subscribe(result => this.gotoCursoList());
  }
            
  gotoCursoList() {
    this.router.navigate(['/cursos']);
  }

}
