package com.htc.redbus.excelutil;

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

public class ReadMultipleExcel {

    // Method to read data from Excel file and return a list of String arrays
    public static List<String[]> readData() throws IOException {

        List<String[]> dataList = new ArrayList<>(); // List to store data from Excel
        // Create a File object to open the Excel file
        File file = new File("YatraData.xls");
        // Create a FileInputStream object to read the Excel file
        FileInputStream inputStream = new FileInputStream(file);
        // Create a workbook instance to refer to the .xls file
        HSSFWorkbook workbook = new HSSFWorkbook(inputStream);
        // Create a Sheet object using the sheet name
        HSSFSheet sheet = workbook.getSheet("Sheet1");

        // Get the total number of rows
        int rowCount = sheet.getLastRowNum();

        // Loop through rows (skipping header row)
        for (int i = 1; i <= rowCount; i++) {
            Row row = sheet.getRow(i);
            if (row == null) {
                continue; // Skip empty rows
            }

            // Create an array to store cell data for the current row
            String[] rowData = new String[row.getLastCellNum()];
            for (int column = 0; column < row.getLastCellNum(); column++) {
                Cell cell = row.getCell(column);
                // Add cell data to the array (handle null cells)
                rowData[column] = (cell != null) ? cell.getStringCellValue() : "";
                System.out.println(rowData[column]); // Print data for debugging
            }

            // Add the current row's data to the list
            dataList.add(rowData);
        }

        // Close the workbook to release resources
        workbook.close();

        // Return the list containing Excel data
        return dataList;
    }

    // Method to return data as a Stream for further processing
    static Stream<String[]> getStream() throws Exception {
        return readData().stream();
    }
}