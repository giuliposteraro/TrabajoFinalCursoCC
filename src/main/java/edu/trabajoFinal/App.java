package edu.trabajoFinal;

import java.util.logging.FileHandler;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import edu.trabajoFinal.log.LogFile;


@SpringBootApplication
public class App 
{
    public static void main( String[] args )
    {	
    	LogFile log = new LogFile();
    	FileHandler fh = new FileHandler("C:\\Users\\giuli\\eclipse-workspace\\TrabajoFinalCursoCC\\MyLog.log");
    	log.addHandler(fh);
        SpringApplication.run(App.class, args);
    }
}
