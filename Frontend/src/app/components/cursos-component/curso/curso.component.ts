import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { CursoService } from '../../../services/curso.service'

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent implements OnInit {

  public cursos: Curso[];

  constructor(private cursoService: CursoService) { }

  ngOnInit(): void {
    this.cursoService.getCursos().subscribe(data => {
      this.cursos = data;
    });
  }

  add(nombre: string): void {
    nombre = nombre.trim();
    if (!name) { return; }
    this.cursoService.addCurso({ nombre } as Curso)
      .subscribe(hero => {
        this.cursos.push(hero);
      });
  }

  delete(curso: Curso): void {
    this.cursos = this.cursos.filter(c => c !== curso);
    this.cursoService.deleteCurso(curso.id).subscribe();
  }

  save(curso: Curso): void {
    this.cursoService.modifyCurso(curso)
      .subscribe();
  }
}
