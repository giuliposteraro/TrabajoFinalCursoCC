import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Curso } from '../models/curso';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable()
export class CursoService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = "http://localhost:8080/cursos";
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

   public getCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.url)
    .pipe(
      catchError(this.handleError)
    );
  }

  public getCursoById(id: number): Observable<Curso> {
    const urlGet = '${this.url}/${id}';
    return this.http.get<Curso>(urlGet).pipe(
      catchError(this.handleError)
    );
  } 

   public addCurso(curso:Curso): Observable<Curso>{
     return this.http.post<Curso>(this.url,curso, httpOptions)
     .pipe(
      catchError(this.handleError)
      );
   }

   public modifyCurso(curso:Curso): Observable<Curso>{
    const urlPut = '${this.url}/${curso.id}'
     return this.http.put<Curso>(urlPut,curso, httpOptions)
     .pipe(
      catchError(this.handleError)
    );
   }

   public deleteCurso(id:number):Observable<{}>{
    const urlDelete = '${this.url}/${id}'
    return this.http.delete(urlDelete, httpOptions)
    .pipe(
      catchError(this.handleError)
    );

   }
}