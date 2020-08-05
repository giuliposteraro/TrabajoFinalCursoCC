package edu.trabajoFinal;

import java.io.IOException;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import edu.trabajoFinal.log.LogFile;


@SpringBootApplication
public class App 
{
    public static void main( String[] args )
    {	
    	try {
			LogFile miLog = new LogFile("Log.txt");
			miLog.log.info("---------------------------------Log------------------------------");
			miLog.log.info("Log creado correctamente");
		} catch (SecurityException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
    	
        SpringApplication.run(App.class, args);
    }
}
