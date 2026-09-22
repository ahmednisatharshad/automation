import * as XLSX from 'xlsx'

export function readTestDataFromExcel(filePath: string, sheetName: string): string[][] {
    const workbook = XLSX.readFile(filePath);
    const sheet = workbook.Sheets[sheetName];
    // const testData: string[][] = XLSX.utils.sheet_to_json(sheet, { header: 1 });
    const testData: string[][] = XLSX.utils.sheet_to_json(sheet);
    return testData;

  }