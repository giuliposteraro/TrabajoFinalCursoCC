import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { Alumno } from '../models/alumno';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private baseUrl = 'http://localhost:8080/alumnos';

  constructor(private http: HttpClient) {}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      console.error(error); 
   
      return of(result as T);
      };
  }

  public getAlumnos(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  public getAlumnoById(numSocio: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${numSocio}`)
    // .pipe(
    //   catchError(this.handleError)
    // );
  } 

  public updateAlumno(numSocio: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${numSocio}`, value, httpOptions)
    .pipe(
      catchError(this.handleError('updateCurso', value))
    );
  }

   public delete(numSocio:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${numSocio}`, { responseType: 'text' })
   }
 
  public addAlumno(alumno: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`,alumno, httpOptions)
  }

  // getAlumnosByIdCurso(id: number): Observable<Alumno>{
  //   const urlGet = '${this.url}/curso/${id}'
  //   return this.http.get<Alumno>(urlGet).pipe(catchError(this.handleError));
  // }
}
