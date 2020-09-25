import { Component, OnInit, Input } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { CursoService } from '../../../services/curso.service'
import { Router } from '@angular/router';
import { FormGroup, FormControl} from '@angular/forms';
import { Identifiers } from '@angular/compiler/src/render3/r3_identifiers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent implements OnInit {
  
  cursos: Observable<Curso[]>;
  isupdated: boolean = false;   
  curso : Curso=new Curso();  

  constructor(private cursoService: CursoService,
              private router: Router) { }

  ngOnInit(): void {  
    this.reloadData();
  }

  reloadData() {
    this.cursos = this.cursoService.getCursos();
  }

  deleteCurso(id: number) {
    this.cursoService.delete(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  remove(id: number) {
    this.cursoService.delete(id).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  gotoList() {
    this.router.navigate(['/cursos']);
  }
  updateCurso(id: number){
    this.router.navigate(['cursos/', id]);
  }

  changeisUpdate(){  
    this.isupdated=false;  
  }    
  goBack(): void{
    this.router.navigate(['/cursos']);
  }
  editCurso(curso: Curso){
    this.router.navigate(['/cursos', this.cursoService.getCursoById(curso.id)])
  }
}
