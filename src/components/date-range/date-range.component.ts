import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CalendarComponentOptions, CalendarModal, CalendarModalOptions, CalendarResult } from '@googlproxer/ion-range-calendar';
import { DatetimeService } from 'src/services/datetime/datetime.service';

@Component({
    selector: 'date-range',
    templateUrl: './date-range.component.html',
    styleUrls: ['./date-range.component.scss'],
    standalone: false
})
export class DateRangeComponent implements OnInit {
@Input() dateRange: { from: string; to: string; };
@Output() dateRangeChanged = new EventEmitter<{ from: string; to: string; }>();

public optionsRange: CalendarComponentOptions = {
  pickMode: 'range'
};

  constructor(
    public modalCtrl: ModalController,
    private dtSvc: DatetimeService
    ) {
   }

  ngOnInit() {
    
  }

  async filterByDate() {
    const options: CalendarModalOptions = {
        pickMode: 'range',
        title: 'Select a date range',
        canBackwardsSelected: true
    };
  
    let myCalendar = await this.modalCtrl.create({
        component: CalendarModal,
        componentProps: { options }
      });
  
    myCalendar.present();
  
    const event: any = await myCalendar.onDidDismiss();
    const date = event.data;
    if (date !== null && date !== undefined) {
      console.log(date);
      const from: CalendarResult = date.from;
      const to: CalendarResult = date.to;
  
      console.log(date, from, to);

      this.dateRange = 
          { 
            from: this.dtSvc.getDateDashes(date.from.dateObj),
            to: this.dtSvc.getDateDashes(date.to.dateObj)
          };
    }
    
    this.dateRangeChanged.emit(this.dateRange);
    let startDate = this.dateRange.from;
    let endDate = this.dateRange.to;
      
    console.log('startDate', startDate);
    console.log('endDate', endDate);
  }

}
