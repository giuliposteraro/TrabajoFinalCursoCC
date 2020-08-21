import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alumno } from '../models/alumno';

@Injectable()
export class AlumnoService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = "http://localhost:8080/alumnos";
   }

   public getAlumnos(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(this.url);
  }
 
  public addAlumno(alumno: Alumno) {
    return this.http.post<Alumno>(this.url, alumno);
  }

  public modifyAlumno(alumno: Alumno) {
    return this.http.put<Alumno>(this.url, alumno);
  }
}
