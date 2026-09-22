
	package com.htc.pagefactory.excelutil;


	import java.io.File;
	import java.io.FileInputStream;
	import java.io.IOException;
	import java.util.ArrayList;
	import java.util.List;
	import java.util.stream.Stream;

	import org.apache.poi.hssf.usermodel.HSSFSheet;
	import org.apache.poi.hssf.usermodel.HSSFWorkbook;
	import org.apache.poi.ss.usermodel.Cell;
	import org.apache.poi.ss.usermodel.Row;

	public class ReadExcel {
	
	public String[] readData() throws IOException {

		
		String return_value[] = new String[2];
		//Create an object of File class to open xlsx file
        File file =    new File("excelfile.xls");
        
        //Create an object of FileInputStream class to read excel file
        FileInputStream inputStream = new FileInputStream(file);
        
        //Creating workbook instance that refers to .xls file
        HSSFWorkbook wb = new HSSFWorkbook(inputStream);
        
        //Creating a Sheet object using the sheet Name
        HSSFSheet sheet = wb.getSheet("Sheet1");
        
        //row count
        int rowCount = sheet.getLastRowNum();

        
        for(int i = 1; i<=rowCount;i++) {
        	Row row = sheet.getRow(i);
        	for(int j = 0; j<row.getLastCellNum()-1;j++) {
        		String uname= row.getCell(j).getStringCellValue();
        		System.out.println("uname"+uname);
        		return_value[0] = uname;
        		
        		String pwd= row.getCell(j+1).getStringCellValue();
        		System.out.println("pass"+pwd);
        		return_value[1] = pwd;
        		}
        	}
        wb.close();
        return return_value;
        
        }
	

}
