import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Alumno } from '../models/alumno';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};
@Injectable()
export class AlumnoService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = "http://localhost:8080/alumnos";
   }

   private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Ocurrio un error. Por favor intente mas tarde');
  }

  public getAlumnoById(id: number): Observable<Alumno> {
    const urlGet = '${this.url}/${id}';
    return this.http.get<Alumno>(urlGet)
    .pipe(
      catchError(this.handleError)
    );
  } 

   public deleteAlumno(id:number):Observable<{}>{
    const urlDelete = '${this.url}/${id}'
    return this.http.delete(urlDelete, httpOptions)
    .pipe(
      catchError(this.handleError)
    );

   }
   public getAlumnos(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(this.url);
  }
 
  public addAlumno(alumno: Alumno) {
    return this.http.post<Alumno>(this.url, alumno, httpOptions)
    .pipe(
      catchError(this.handleError)
      );
  }

  public modifyAlumno(alumno: Alumno): Observable<Alumno> {
    const urlPut = '${this.url}/${alumno.numSocio}'
    return this.http.put<Alumno>(this.url, alumno, httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }
}
