import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DateRangeObj } from 'src/models/dateRangeObj';
import { CommonService } from 'src/services/common/common';
import { DateRangeObjService } from 'src/services/dateRangeObj/date-range-obj.service';

@Component({
    selector: 'date-range-plus',
    templateUrl: './date-range-plus.component.html',
    styleUrls: ['./date-range-plus.component.scss'],
    standalone: false
})
export class DateRangePlusComponent implements OnInit {
  @Input() periodId: string;
  @Input() dateRange: { from: string; to: string; };
  @Input() showLabel: boolean = true;
  @Output() dateRangeChanged = new EventEmitter<{ from: string; to: string; }>();
  @Output() periodChanged = new EventEmitter<string>();
  
  public periodsList: DateRangeObj[];
  public selectedPeriodId: string;
  //public selectedPeriod: DateRangeObj;

  constructor(
    private common: CommonService,
    private drSvc: DateRangeObjService
    ) {
   }

   public periodIdChanged(event: any) {
    //this.common.presentToastTopDuration('Filter not implemented!', 1000);
    console.log('Event', event);
    console.log('Value', event.detail.value);
    this.selectedPeriodId = event.detail.value;
    this.periodChanged.emit(this.selectedPeriodId);
  }

  ngOnChanges() {
    this.ngOnInit();
  }

  ngOnInit() {
    this.selectedPeriodId = this.periodId; 

    // Load Date Ranges
    this.drSvc.fetchDateRangeObjs().then(
      (drList: DateRangeObj[]) => {
        if (drList == null || drList == undefined) {
          this.drSvc.getDateRangeObjs().subscribe(
            (drlst: any) => {
              this.periodsList = drlst.$values.filter(p=>p.Id != 'ALL');
            }, (err: any) => {
              this.common.presentToastTop('Error in getDateRangeObjs. Error: ' + err.message);
            }
          );
        } else {
          this.periodsList = drList.filter(p=>p.Id != 'ALL');
        }
        console.log('periodsList', this.periodsList);
        this.selectedPeriodId = this.periodId; 
        console.log('selectedPeriodId', this.selectedPeriodId);
      }, (err: any) => {
        this.common.presentToastTop('Error in fetchDateRangeObjs. Error: ' + err.message);
      }
    );
  }

  async onDateRangeEmitted(dateRangeOut: { from: string; to: string; }) {
    this.dateRange = dateRangeOut;
    this.dateRangeChanged.emit(this.dateRange);
  }

}
