import { Curso } from './curso';

export class Asistencia {
    public id:number;
    public numSocio:number;
    public curso:Curso;
    public fecha:string;
    public nombreAlumno:string;
    public presente:boolean;

}
