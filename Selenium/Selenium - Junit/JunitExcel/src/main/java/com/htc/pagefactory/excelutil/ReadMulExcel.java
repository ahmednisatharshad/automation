package com.htc.pagefactory.excelutil;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Stream;

import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;

public class ReadMulExcel {
//	public static void main(String args[]) throws IOException {
//		readData();
//	}
	public static List<String[]> readData() throws IOException {

		List<String[]> datalist = new ArrayList<>();
		// Create an object of File class to open xlsx file
		File file = new File("excelfiles.xls");
		// Create an object of FileInputStream class to read excel file
		FileInputStream inputStream = new FileInputStream(file);
		// Creating workbook instance that refers to .xls file
		HSSFWorkbook wb = new HSSFWorkbook(inputStream);
		// Creating a Sheet object using the sheet Name
		HSSFSheet sheet = wb.getSheet("Sheet1");
		// row count
		int rowCount = sheet.getLastRowNum();

		for (int i = 1; i <= rowCount; i++) {
			Row row = sheet.getRow(i);
			if (row == null) {
				continue;
			}
			String[] rowsdata = new String[row.getLastCellNum()];

			for (int j = 0; j < row.getLastCellNum(); j++) {
				Cell cell = row.getCell(j);
				rowsdata[j] = (cell != null) ? cell.getStringCellValue() : "";

				System.out.print(Arrays.toString(rowsdata));

			}
			datalist.add(rowsdata);
		}

		wb.close();
		return datalist;

	}

	static Stream<String[]> getStream() throws Exception {
		return readData().stream();
	}
}
