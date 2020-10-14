import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../../../services/alumno.service';
import { Alumno } from 'src/app/models/alumno';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { PaginatorModule } from 'primeng/paginator';


@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.scss']
})
export class AlumnoComponent implements OnInit {

  alumnos: Observable<Alumno[]>;
  isupdated: boolean = false; 
  alumno: Alumno = new Alumno();

  constructor(private alumnoService: AlumnoService, private router: Router, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.alumnos = this.alumnoService.getAlumnos();
  }

  confirm(numSocio: number) {
    this.confirmationService.confirm({
        message: 'Confirmar eliminación?', 
        accept: () => {
            this.deleteAlumno(numSocio);
        }
    });
}
  deleteAlumno(numSocio: number): void {
    this.alumnoService.delete(numSocio)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }
  gotoList() {
    this.router.navigate(['/alumnos']);
  }
  updateAlumno(numSocio: number){
    this.router.navigate(['alumnos/', numSocio]);
  }

  changeisUpdate(){  
    this.isupdated=false;  
  }    
  goBack(): void{
    this.router.navigate(['/alumnos']);
  }
  editAlumno(alumno: Alumno){
    this.router.navigate(['/cursos', this.alumnoService.getAlumnoById(alumno.numSocio)])
  }

}
