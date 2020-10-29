import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of, Subject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Curso } from '../models/curso';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  
  private baseUrl = 'http://localhost:8080/cursos';

  constructor(private http: HttpClient) { }

   private handleError<T>(operation = 'operation', result?: T) {
   return (error: any): Observable<T> => {
  
  //     // TODO: send the error to remote logging infrastructure
     console.error(error); // log to console instead
  
  
  //     // Let the app keep running by returning an empty result.
     return of(result as T);
     };
 }

   public getCursos(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
   // .pipe(
   //   catchError(this.handleError<Curso[]>('getCursos', []))
   // );
  }

  public getCursoById(id: number): Observable<any> {
   // const urlGet = '${this.url}/${id}';
    return this.http.get(`${this.baseUrl}/${id}`);
   // .pipe(
   //   catchError(this.handleError<Curso>(`getCurso id=${id}`))
   // );
  } 


  public updateCurso(id: number, value: any): Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`, value, httpOptions)
    .pipe(
     catchError(this.handleError('updateCurso', value))
     );
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  //  .pipe(
  //    catchError(this.handleError('deleteCurso'))
  //  );
   }

  public addCurso(curso: Object): Observable<Object> {  
    return this.http.post(`${this.baseUrl}`, curso, httpOptions);  
  }  

}