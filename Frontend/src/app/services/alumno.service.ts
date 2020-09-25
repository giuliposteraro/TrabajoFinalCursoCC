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

  private baseUrl = "http://localhost:8080/alumnos";

  constructor(private http: HttpClient) {}

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

  public getAlumnoById(id: number): Observable<any> {
    const urlGet = '${this.url}/${id}';
    return this.http.get(`${this.baseUrl}/${id}`)
    .pipe(
      catchError(this.handleError)
    );
  } 

   public deleteAlumno(id:number):Observable<any>{
    const urlDelete = '${this.url}/${id}'
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' })
    .pipe(
      catchError(this.handleError)
    );

   }
   public getAlumnos(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
 
  public addAlumno(alumno: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`,alumno, httpOptions)
    .pipe(
      catchError(this.handleError)
      );
  }

  public modifyAlumno(id: number, value: any): Observable<Object> {
    return this.http.put<Alumno>(`${this.baseUrl}/${id}`, value, httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  getAlumnosByIdCurso(id: number): Observable<Alumno>{
    const urlGet = '${this.url}/curso/${id}'
    return this.http.get<Alumno>(urlGet).pipe(catchError(this.handleError));
  }
}
