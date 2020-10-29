import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of} from 'rxjs';
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
    return this.http.get(`${this.baseUrl}`)
    .pipe(
      catchError(this.handleError('getAlumnoById'))
    );
  }

  public getAlumnoById(numSocio: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${numSocio}`)
    .pipe(
      catchError(this.handleError('getAlumnoById'))
    );
  } 

  public updateAlumno(numSocio: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${numSocio}`, value, httpOptions)
    .pipe(
      catchError(this.handleError('updateAlumno', value))
    );
  }

   public delete(numSocio:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${numSocio}`, { responseType: 'text' })
   }
 
  public addAlumno(alumno: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`,alumno, httpOptions)
    .pipe(
      catchError(this.handleError('addAlumno', alumno))
    );
  }
}
