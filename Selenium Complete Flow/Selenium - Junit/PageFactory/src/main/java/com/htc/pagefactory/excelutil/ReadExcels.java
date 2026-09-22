
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

public class ReadExcels {
	
	public static List<String[]> readData() throws IOException {

			List<String[]> dataList = new ArrayList<>();

			// Create an object of File class to open xls file
			File file = new File("excelfiles.xls");

			// Create an object of FileInputStream class to read excel file
			FileInputStream inputStream = new FileInputStream(file);

			// Creating workbook instance that refers to .xls file
			HSSFWorkbook wb = new HSSFWorkbook(inputStream);

			// Creating a Sheet object using the sheet Name
			HSSFSheet sheet = wb.getSheet("sheet1");

			// Get total row count (excluding header row)
			int rowCount = sheet.getLastRowNum();

			// Loop through all rows starting from row index 1 (skipping header)
			for (int i = 1; i <= rowCount; i++) {
				Row row = sheet.getRow(i);
				if (row == null)
					continue;

				String[] rowData = new String[row.getLastCellNum()];
				for (int j = 0; j < row.getLastCellNum(); j++) {
					Cell cell = row.getCell(j);
					rowData[j] = (cell != null) ? cell.getStringCellValue() : "";
				}
				dataList.add(rowData);
			}

			wb.close();
			return dataList;
		}
		
		static Stream<String[]> excelDataProvider() throws IOException {
	        return readData().stream(); // Replace with actual file path
	    }

	
}