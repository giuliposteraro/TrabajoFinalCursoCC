import { Component, OnInit } from '@angular/core';

import { Asistencia } from '../../models/asistencia';
import { AsistenciaService } from 'src/app/services/asistencia.service';
import { Observable } from 'rxjs';
import { ConfirmationService } from 'primeng/api';
import { AlumnoService } from 'src/app/services/alumno.service';
import { Curso } from 'src/app/models/curso';


@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.scss']
})
export class AsistenciaComponent implements OnInit {

  asistencias: Observable<Asistencia[]>;
  totales: any = [];
  nombreAlumno: string;

  constructor(private asistenciaService: AsistenciaService, 
              private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.asistencias = this.asistenciaService.getAsistencias();
  }

  deleteAsistencia(id: number): void {
    this.asistenciaService.delete(id)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }

  confirm(id: number) {
    this.confirmationService.confirm({
        message: 'Confirmar eliminación?', 
        accept: () => {
            this.deleteAsistencia(id);
        }
    });
  }
} 
