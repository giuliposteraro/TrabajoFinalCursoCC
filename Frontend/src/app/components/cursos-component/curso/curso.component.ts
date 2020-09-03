import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { CursoService } from '../../../services/curso.service'
import { Location } from '@angular/common';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent implements OnInit {

  public cursos: Curso[];
  private location: Location;

  constructor(private cursoService: CursoService) { }

  ngOnInit(): void {
    this.cursoService.getCursos().subscribe(data => {
      this.cursos = data;
    });
  }

  add(curso: Curso): void {
    this.cursoService.addCurso(curso)
      .subscribe(curso => {
        this.cursos.push(curso);
      });
  }

  delete(curso: Curso): void {
    this.cursos = this.cursos.filter(c => c !== curso);
    this.cursoService.deleteCurso(curso.id).subscribe();
  }

  save(curso: Curso): void {
    this.cursoService.modifyCurso(curso)
      .subscribe(() => this.goBack());
  }

  goBack(){
    this.location.back();
  }
}
