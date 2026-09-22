
package com.htc.pagefactory.excelutil;
import java.io.FileInputStream;
import java.io.IOException;

import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.testng.annotations.DataProvider;


public class TestDataProvider {

	@DataProvider(name="MyTestData")
	public Object[][] excelRead() throws IOException{
    	//We are creating an object from the excel sheet data by calling a method that reads data from the excel stored locally in our system
    	Object[][] arrObj = getExcelData("excelfiles.xls","Sheet1");
    	return arrObj;
	}
	public String[][] getExcelData(String fileName, String sheetName){
    	
    	String[][] data = null;   	
	  	try
	  	{
	   	FileInputStream fis = new FileInputStream(fileName);
	   	HSSFWorkbook wb = new HSSFWorkbook(fis);
	   	HSSFSheet sh = wb.getSheet(sheetName);
	   	HSSFRow row = sh.getRow(0);
	   	int noOfRows = sh.getLastRowNum()+1;
	   	int noOfCols = row.getLastCellNum();
	   	System.out.println("row"+noOfRows+""+"col"+noOfCols);
	   	Cell cell;
	   	data = new String[noOfRows-1][noOfCols];
	   	for(int i =1; i<noOfRows;i++){
		     for(int j=0;j<noOfCols;j++){
		    	   row = sh.getRow(i);
		    	   cell= row.getCell(j);
		    	   data[i-1][j] = cell.getStringCellValue();
	   	 	   }
	   	}
	  	}
	  	catch (Exception e) {
	     	   System.out.println("The exception is: " +e.getMessage());
	     	           	}
    	return data;
	}
	
}