package edu.trabajoFinal.log;

import java.io.IOException;
import java.util.Date;
import java.util.logging.FileHandler;
import java.util.logging.Logger;
import java.util.logging.SimpleFormatter;



public class LogFile {
	 private Date fecha = new Date();
	 private FileHandler fh = new FileHandler("C:\\Users\\giuli\\eclipse-workspace\\TrabajoFinalCursoCC\\MyLog.log"); 
	 private Logger log = Logger.getLogger("MyLog");
	 private SimpleFormatter formatter = new SimpleFormatter();  
     fh.setFormatter(formatter);   
    	

     public void escribirLog(String mensaje) {
    	 log.info(mensaje);
     }
}
