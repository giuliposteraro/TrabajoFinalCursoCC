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

@Injectable()
export class AsistenciaService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = "http://localhost:8080/asistencias";
   }

   private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  public getAsistencia(): Observable<Asistencia[]> {
    return this.http.get<Asistencia[]>(this.url)
    .pipe(
      catchError(this.handleError<Asistencia[]>('getCursos', []))
    );
  }

  public getAsistenciaByCurso(id: number): Observable<Asistencia> {
    const urlGet = '${this.url}/${id}';
    return this.http.get<Asistencia>(urlGet).pipe(
      catchError(this.handleError<Asistencia>(`getAsistencia id=${id}`))
    );
  } 
}
