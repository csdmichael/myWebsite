import { Injectable } from '@angular/core';
import { timestamp } from 'rxjs/operators';

declare var require: any;
var moment = require('moment-timezone');

@Injectable({
  providedIn: 'root'
})
export class DatetimeService {

  constructor() { }
  
  public getExpirationStatus(expireDate: Date): string {
    let daysLeft: number = -1 * this.calculateDiff(expireDate);
    if (daysLeft <= 0) {
      return "Expired";
    }
    else {
      return daysLeft.toString() + ' days remaining';
    }
  }

  public calculateDiff(dateSent): number{
    let currentDate = new Date();
    dateSent = new Date(dateSent);

    return Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) - Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate()) ) /(1000 * 60 * 60 * 24));
  }

  public getDateRangeByPeriodId(periodId: string): any {
    let dateRange: { from: string; to: string; };
    if (periodId == 'TD') {
      dateRange = {from: this.getTodayDateDashes(), to: this.getTodayDateDashes() }
    } else if (periodId == 'LD') {
      dateRange = {from: this.getDaysAgoDashes(1), to: this.getDaysAgoDashes(1) }
    } else if (periodId == 'TM') {
      dateRange = {from: this.getMonthStartDashes(), to: this.getTodayDateDashes() }
    } else if (periodId == 'LM') {
      dateRange = {from: this.getLastMonthStartDashes(), to: this.getLastMonthEndDashes() }
    } else if (periodId == 'TY') {
      dateRange = {from: this.getCurrentYearStart(), to: this.getCurrentYearEnd() }
    } else if (periodId == 'LY') {
      dateRange = {from: this.getPreviousYearStart(), to: this.getPreviousYearEnd() }
    }

    return dateRange;
  }

  public convertSecondsToDHMS(seconds: number): string{
    let dhms: string = '';
    let sec: number;
    let min: number = 0;
    let hr: number = 0;
    let day: number = 0;

    if (seconds != null && seconds != undefined) {
      if (seconds >= 60) {
        sec = seconds % 60;
        min = Math.floor(seconds / 60);
        if (min >= 60) {
          hr = Math.floor(min / 60);
          min = min % 60;
  
          if (hr >= 24) {
            day = Math.floor(hr / 24);
            hr = hr % 24;
          }
        }
      } else {
        sec = seconds; 
      }
  
      if (day > 0) {
        dhms = day.toString() + ' day, ' + hr.toString() + ' hour, ' + min.toString() + ' min, ' + sec.toString() + ' sec';  
      } else if (hr > 0) {
        dhms = hr.toString() + ' hour, ' + min.toString() + ' min, ' + sec.toString() + ' sec';
      } else if (min > 0) {
        dhms = min.toString() + ' min, ' + sec.toString() + ' sec';
      } else if (sec > 0) {
        dhms = sec.toString() + ' sec';
      }
    }

    return dhms;
  }

  public calculateDiffTwoDate(startDate, endDate): number{
    startDate = new Date(startDate);
    endDate = new Date(endDate);
    return Math.floor((Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate()) - Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()) ) /(1000 * 60 * 60 * 24));
  }

  public padDateTimePart(dtPart: number): string {
    let paddedStr: string;
    console.log('Orig:', dtPart);

    if (dtPart <= 9) {
      paddedStr = "0" + dtPart.toString();
    } else {
      paddedStr = dtPart.toString();
    }
    console.log('Padded:', paddedStr);
    return paddedStr;
  }
  
  public getTimeStamp(): string {
    let timestamp = '';
    let todayTime = new Date();
    let monthPart = this.padDateTimePart(todayTime.getMonth() + 1);
    let dayPart = this.padDateTimePart(todayTime.getDate());

    timestamp = todayTime.getFullYear().toString() + '-' +
                monthPart + '-' +
                dayPart  + 'T' +
                this.padDateTimePart(todayTime.getHours()) + ':' +
                this.padDateTimePart(todayTime.getMinutes()) + ':' +
                this.padDateTimePart(todayTime.getSeconds()) + '.000Z';
    return timestamp;
  }

  public getMinutesAgo(minutesAgo: number): string {
    let momentCurr = moment();
    let momentAgo = momentCurr.subtract({ minutes: minutesAgo }); 
    let minPart = momentAgo.minute();
    let hourPart = momentAgo.hour();
    if (hourPart < 10) {
      hourPart = '0' + hourPart;
    }
    if (minPart < 10) {
      minPart = '0' + minPart;
    }
    let minAgoResult = hourPart + ":" + minPart;
    return minAgoResult;
  }

  public GetFileTimeStamp(): string {
    let todayTime = new Date();
    let ts = this.padDateTimePart(todayTime.getHours()) + 
      this.padDateTimePart(todayTime.getMinutes()) + 
      this.padDateTimePart(todayTime.getSeconds());
    return ts;
  }

  public getDateDashes(dateVal: Date): string {
    let timestamp = '';

    let yearPart =  0;
    try {
      yearPart = dateVal.getFullYear();
    }
    catch(ex) {
      yearPart = + dateVal.toString().split('-')[0];
    }
    if (yearPart > 1900) {
      let monthPart: string;
      
      try {
        monthPart = this.padDateTimePart(dateVal.getMonth() + 1);
      }
      catch(ex) {
        monthPart = dateVal.toString().split('-')[1];
      }
      let dayPart: string;
      
      try {
        dayPart = this.padDateTimePart(dateVal.getDate());
      }
      catch(ex) {
        dayPart = dateVal.toString().split('-')[2].split('T')[0];
      }

      timestamp = yearPart.toString()
                  + '-' + monthPart
                  + '-' + dayPart;
    }
                
    return timestamp;
  }

  public getDateDashesStr(dateVal: string): string {
    let timestamp: Date = new Date(dateVal);
                
    return this.getDateDashes(timestamp);
  }

  public getTodayDateDashes(): string {
    
    let todayTime = new Date();
    return this.getDateDashes(todayTime);
  }

  public getCurrentYear(): number {
    
    let todayTime = new Date();
    return todayTime.getFullYear();
  }

  public getPreviousYear(): number {
    return this.getCurrentYear() - 1;
  }

  public getPreviousYearStart(): string {
    let yearPart = this.getCurrentYear() - 1;
    return yearPart + '-01-01';
  }

  public getPreviousYearEnd(): string {
    let yearPart = this.getCurrentYear() - 1;
    return yearPart + '-12-31';
  }

  public getCurrentYearStart(): string {
    let yearPart = this.getCurrentYear();
    return yearPart + '-01-01';
  }

  public getCurrentYearEnd(): string {
    let yearPart = this.getCurrentYear();
    return yearPart + '-12-31';
  }

  public getCurrentMonth(): number {
    
    let todayTime = new Date();
    return todayTime.getMonth();
  }

  public getNextMonth(): number {
    
    let currMonth = this.getCurrentMonth();
    let nextMonth = currMonth + 1;
    if (nextMonth == 13) {
      nextMonth = 1;
    }
    return nextMonth;
  }

  public getMonthStartDashes(): string {

    let monthStart = this.getTodayDateDashes();
    let yearPart = monthStart.split('-')[0];
    let monthPart = monthStart.split('-')[1];
    return yearPart + '-' + monthPart + '-01';
  }

  public getLastMonthStartDashes(): string {

    let monthStart = this.getTodayDateDashes();
    let yearPart = +monthStart.split('-')[0];
    let monthPart = +(monthStart.split('-')[1]) - 1;
    if (monthPart == 0) {
      monthPart = 12;
      yearPart = yearPart - 1;
    }
    return yearPart + '-' + monthPart + '-01';
  }

  public getLastMonthEndDashes(): string {

    let thisMonthStart = this.getMonthStartDashes();
    let yearPart = +thisMonthStart.split('-')[0];
    let monthPart = +thisMonthStart.split('-')[1] - 1;

    var d = new Date(yearPart, monthPart, 0);
    
    return this.getDateDashes(d);
  }

  public getDaysAgoDashes(numOfDays: number): string {
    
    let todayTime = new Date();
    let daysAgoDate = new Date();
    daysAgoDate.setDate(todayTime.getDate() - numOfDays);
    return this.getDateDashes(daysAgoDate);
  }

  public getDaysForwardDashes(numOfDays: number): string {
    
    let todayTime = new Date();
    let daysAgoDate = new Date();
    daysAgoDate.setDate(todayTime.getDate() + numOfDays);
    return this.getDateDashes(daysAgoDate);
  }

  public getWeekDayName(wkDay: number): string {
    let weekday: string[];
    weekday = [];
    weekday[0] =  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    return weekday[wkDay];
  }

  public getDateFromTimeStamp(strDT: string): string {
    //let ts = new Date(strDT);
    let dateVal = '';
    //let weekDay = this.getWeekDayName(ts.getDay()).substr(0, 3);
    //let monthPart = this.padDateTimePart(ts.getMonth() + 1);
    //let dayPart = this.padDateTimePart(ts.getDate());
    if (strDT == null || strDT == undefined) {
      return '';
    }
    let datePart = strDT.split('T')[0];
    let yearPart = datePart.split('-')[0];
    let monthPart = datePart.split('-')[1];
    let dayPart = datePart.split('-')[2];

    dateVal = 
                //weekDay + ' ' + 
                monthPart + '/' +
                dayPart + '/' +
                yearPart;
                
    
    console.log('getDateFromTimeStamp:', dateVal);

    return dateVal;
  }

  public convertUSDateToUniversalDate(strDT: string): string {
    //let ts = new Date(strDT);
    let dateVal = '';
    //let weekDay = this.getWeekDayName(ts.getDay()).substr(0, 3);
    //let monthPart = this.padDateTimePart(ts.getMonth() + 1);
    //let dayPart = this.padDateTimePart(ts.getDate());
    let yearPart = strDT.split('/')[2];
    let monthPart = strDT.split('/')[0];
    let dayPart = strDT.split('/')[1];
    dateVal = 
                //weekDay + ' ' + 
                yearPart + '-' +
                monthPart + '-' +
                dayPart;
                
    
    console.log('convertUSDateToUniversalDate:', dateVal);
    return dateVal;
  }

  /*
  public getTimeFromTimeStamp(strDT: string): string {
    let ts = new Date(strDT);
    let today = new Date();
    let timeVal = '';
    
    if (Math.abs(ts.getFullYear() - today.getFullYear()) > 1) {
      return timeVal;
    } 
    timeVal = this.padDateTimePart(ts.getHours()) + ':' +
                this.padDateTimePart(ts.getMinutes());
                // + ':' + this.padDateTimePart(todayTime.getSeconds());
    return timeVal;
  }
  */

  public getTimeFromTimeStamp(strDT: string): string {
    let timeVal = '';
    if (strDT == null || strDT == undefined) {
      return '';
    }
    let datePart = strDT.split('T')[0];
    let yearPart = datePart.split('-')[0];
    let timePart = strDT.split('T')[1];

    if (yearPart !== '0000' && yearPart !== '0001') {

      let hourPart = timePart.split(':')[0];
      let minPart = timePart.split(':')[1];

      timeVal = hourPart + ':' + minPart;
    }

    if (timeVal !== '') {
      timeVal = this.formatTime(timeVal);
    }
    
    console.log('getTimeFromTimeStamp:', timeVal);

    return timeVal;
  }


  public getCurrDate(timeZoneUI: string): string {
    let timestamp = '';
    let todayTime = new Date();
    let timezoneTime = moment.tz(todayTime, timeZoneUI /*"America/New_York"*/).format();
    console.log('Time by zone', timezoneTime);
  
    let dateVal = this.getDateFromTimeStamp(timezoneTime);
         
    return dateVal;
  }

  public getCurrTime(timeZoneUI: string): string {
    let timestamp = '';
    let todayTime = new Date();
    let timezoneTime = moment.tz(todayTime, timeZoneUI /*"America/New_York"*/).format();
    console.log('Time by zone', timezoneTime);
    
    let timeVal = this.getTimeFromTimeStamp(timezoneTime);
    
    return timeVal;
  }

  public getCurrentTime(): string {
    let todayTime = new Date();
    let minPart: any = todayTime.getMinutes();
    let hourPart: any = todayTime.getHours();
    if (hourPart < 10) {
      hourPart = '0' + hourPart;
    }
    if (minPart < 10) {
      minPart = '0' + minPart;
    }
    let timeVal = hourPart + ":" + minPart;
    
    return timeVal;
  }

  public formatDateTime(timeStamp: string, timezoneShortName: string = 'PST'): string {
    let dtStr: string = '';
    if (timeStamp == null || timeStamp == undefined) return '';
    if (timeStamp.startsWith('1900')) return '';
    let datePart = this.getDateFromTimeStamp(timeStamp);
    let timePart = this.getTimeFromTimeStamp(timeStamp);
    dtStr = datePart + ' ' + timePart + ' ' + timezoneShortName;
    return dtStr;
  }

  public formatTime(militaryTime: string): string {
    let twelveHourTime: string;
    twelveHourTime = '';
    let hrPart = militaryTime.split(':')[0];
    let minPart = militaryTime.split(':')[1];
    let intHrPart: number;
    intHrPart = +hrPart;

    if (intHrPart == 12) {
      twelveHourTime = militaryTime + ' PM';
    } else if (intHrPart == 24 || intHrPart == 0) {
      intHrPart = 12;
      hrPart = intHrPart.toString();
      twelveHourTime = hrPart + ':' + minPart + '  AM';
    } else if (intHrPart > 12) {
      intHrPart = intHrPart - 12;
      
      if (intHrPart < 10) {
        hrPart = "0" + intHrPart.toString();
      } else {
        hrPart = intHrPart.toString();
      }
      twelveHourTime = hrPart + ':' + minPart + ' PM';
    } else {
      twelveHourTime = militaryTime + ' AM';
    }

    return twelveHourTime;
  }

  public convertDateTimeByTimeZone(timeZoneUI: string, dateTimeVal: Date): Date {
    console.log('Date Time', dateTimeVal);
    let timezoneTime = moment.tz(dateTimeVal, timeZoneUI /*"America/New_York"*/).format();
    console.log('Date Time by zone', timezoneTime);
    return new Date(timezoneTime);
  }

  public getLocalTimeZone(): string {
    let timeZoneName = moment.tz.guess();
    console.log(timeZoneName);
    /*
    if (timeZoneName === 'America/Los_Angeles') {
      timeZoneName = 'PST';
    } else if (timeZoneName === 'America/New_York') {
      timeZoneName = 'EST';
    } else if (timeZoneName === 'America/Denver' || timeZoneName === 'America/Phoenix') {
      timeZoneName = 'MST';
    } else if (timeZoneName === 'America/Chicago') {
      timeZoneName = 'CST';
    }
    */
    return timeZoneName;
  }
}
