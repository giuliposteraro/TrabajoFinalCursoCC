export class Alumno {
    
    public numSocio: number;
    public nombre: string;
    public apellido: string;
    public fechaNac: string;
    public mail: string;
    public obraSoc: string;
    public certMedico: ImageData;
    public nombreMayor: string;
    public apellidoMayor: string;
    public dniMayor: number;
    public mailMayor: string;
    public telefonoMayor: number;
    public nivel: string;

    constructor(){}

    menorEdad: boolean = true;
    datosAlumno: any = null;

    setAlumno(){
        this.menorEdad = this.datosAlumno?
        this.getEdad(this.datosAlumno.fechaNacimiento)<18 :
        false;
        }
    
      getEdad(fecha: string){
          let today = new Date(); 
          let date = new Date(fecha);
          return today.getFullYear() - date.getFullYear(); 
        }
}
