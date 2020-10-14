import { Component, OnDestroy, OnInit } from '@angular/core';
import { CursoService } from 'src/app/services/curso.service';
import { Curso } from 'src/app/models/curso';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.scss']
})
export class EditarCursoComponent implements OnInit {

  id: number;
  curso: Curso;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private cursoService: CursoService) { }

  ngOnInit() {
    this.curso = new Curso();

    this.id = this.route.snapshot.params['id'];
    
    this.cursoService.getCursoById(this.id)
      .subscribe(data => {
        console.log(data)
        this.curso = data;
      }, error => console.log(error));
  }

  updateCurso() {
    this.cursoService.updateCurso(this.id, this.curso)
      .subscribe(data => {
        console.log(data);
        this.curso = new Curso();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateCurso();    
  }

  gotoList() {
    this.router.navigate(['/cursos']);
  }
}
