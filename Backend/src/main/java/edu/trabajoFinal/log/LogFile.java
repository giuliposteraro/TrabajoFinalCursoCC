package edu.trabajoFinal.log;

import java.io.File;
import java.io.IOException;
import java.util.logging.FileHandler;
import java.util.logging.Logger;
import java.util.logging.SimpleFormatter;



public class LogFile {
	public Logger log;
	FileHandler fh;
	
	public LogFile(String file_name) throws SecurityException, IOException{
		
		File f = new File(file_name);
		if(!f.exists()) {
			f.createNewFile();
		}
		
		fh = new FileHandler(file_name, true);
		log = Logger.getLogger("test");
		log.addHandler(fh);
		SimpleFormatter formatter = new SimpleFormatter();
		fh.setFormatter(formatter);
	}
	
	
}
