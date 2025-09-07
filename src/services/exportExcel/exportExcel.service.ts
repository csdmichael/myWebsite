import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable()
export class ExportExcelService {
  //https://stackoverflow.com/questions/39177183/how-to-export-json-to-csv-or-excel-angular-2

  constructor() { }

  public exportAsExcelFile(json: any[], excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    //const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
    XLSX.writeFile(workbook, excelFileName + '.xlsx');
  }

  public exportStationsAsExcelFile(
    data1: any[], worksheetLabel1: string = 'data', 
    data2: any[], worksheetLabel2: string = 'filters', 
    excelFileName: string
    ): void {
    const worksheet1: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data1);
    const worksheet2: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data2);
    const workbook: XLSX.WorkBook = { 
      Sheets: { 
        'Website (API)': worksheet1,
        'Mobile (Cache)': worksheet2
      }, 
      SheetNames: [
        'Website (API)',
        'Mobile (Cache)'
      ] };
    //const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
    XLSX.writeFile(workbook, excelFileName + '.xlsx');
  }

  public exportWithLogsAsExcelFile(
    json: any[],
    exceptions: any[],
    trace: any[],
    dependencies: any[],
    requests: any[],
    excelFileName: string
  ): void {
    const worksheetData: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const worksheetE: XLSX.WorkSheet = XLSX.utils.json_to_sheet(exceptions);
    const worksheetT: XLSX.WorkSheet = XLSX.utils.json_to_sheet(trace);
    const worksheetD: XLSX.WorkSheet = XLSX.utils.json_to_sheet(dependencies);
    const worksheetR: XLSX.WorkSheet = XLSX.utils.json_to_sheet(requests);
    const workbook: XLSX.WorkBook = { 
      Sheets: { 
        'data': worksheetData,
        'exceptions': worksheetE,
        'trace': worksheetT,
        'dependencies': worksheetD,
        'requests': worksheetR
      }, 
      SheetNames: [
        'data',
        'exceptions',
        'trace',
        'dependencies',
        'requests'
      ] };
    //const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
    XLSX.writeFile(workbook, excelFileName + '.xlsx');
  }

  public exportAllLogsAsExcelFile(
    exceptions: any[],
    trace: any[],
    dependencies: any[],
    requests: any[],
    excelFileName: string
  ): void {
    const worksheetE: XLSX.WorkSheet = XLSX.utils.json_to_sheet(exceptions);
    const worksheetT: XLSX.WorkSheet = XLSX.utils.json_to_sheet(trace);
    const worksheetD: XLSX.WorkSheet = XLSX.utils.json_to_sheet(dependencies);
    const worksheetR: XLSX.WorkSheet = XLSX.utils.json_to_sheet(requests);
    const workbook: XLSX.WorkBook = { 
      Sheets: { 
        'exceptions': worksheetE,
        'trace': worksheetT,
        'dependencies': worksheetD,
        'requests': worksheetR
      }, 
      SheetNames: [
        'exceptions',
        'trace',
        'dependencies',
        'requests'
      ] };
    //const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
    XLSX.writeFile(workbook, excelFileName + '.xlsx');
  }

  public exportUserInfoAsExcelFile(
    userInfo: any[],
    preferences: any[],
    devices: any[],
    paymentMethods: any[],
    transactions: any[],
    excelFileName: string
  ): void {
    const worksheetU: XLSX.WorkSheet = XLSX.utils.json_to_sheet(userInfo);
    const worksheetPref: XLSX.WorkSheet = XLSX.utils.json_to_sheet(preferences);
    const worksheetD: XLSX.WorkSheet = XLSX.utils.json_to_sheet(devices);
    const worksheetPay: XLSX.WorkSheet = XLSX.utils.json_to_sheet(paymentMethods);
    const worksheetT: XLSX.WorkSheet = XLSX.utils.json_to_sheet(transactions);
    const workbook: XLSX.WorkBook = { 
      Sheets: { 
        'userInfo': worksheetU,
        'preferences': worksheetPref,
        'devices': worksheetD,
        'paymentMethods': worksheetPay,
        'transactions': worksheetT
      }, 
      SheetNames: [
        'userInfo',
        'preferences',
        'devices',
        'paymentMethods',
        'transactions'
      ] };
    //const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
    XLSX.writeFile(workbook, excelFileName + '.xlsx');
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }

}