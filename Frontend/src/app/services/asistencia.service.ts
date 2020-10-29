import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError} from 'rxjs/operators';

import { Asistencia } from '../models/asistencia';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = "http://localhost:8080/asistencias";
   }

   private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  public getAsistencias(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  public getAsistenciaByCurso(id:number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`)
  } 

  public getAsistenciaByAlumno(numSocio:number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${numSocio}`)
  }

  public addAsistencia(asistencia: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`,asistencia, httpOptions)
  }

  public updateAsistencia(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value, httpOptions)
    .pipe(
      catchError(this.handleError('updateAsistencia', value))
    );
  }

  public delete(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' })
   }

}
