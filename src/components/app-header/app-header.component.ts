import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { CommonService } from 'src/services/common/common';
import { NavigationExtras, Router } from '@angular/router';
import { DatetimeService } from 'src/services/datetime/datetime.service';
import { Site } from 'src/models/site';
import { MenuController } from '@ionic/angular';
import { Location } from '@angular/common';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-header',
    templateUrl: './app-header.component.html',
    styleUrls: ['./app-header.component.scss'],
    standalone: false
})
export class AppHeaderComponent implements OnInit, OnDestroy {
  @Input()
  PageTitle!: string;
  @Input() PageDisclaimer!: string;
  @Input()
  ShowMenu!: boolean;
  @Input()
  HideHome!: boolean;
  @Input()
  UserName!: string;
  @Input()
  ParentPage!: string;
  @Input()
  IsSetup!: boolean;
  @Input()
  NewSite!: Site;

  // @Input() ShowBack: boolean;
  // @Input() ShowExit: boolean;
  // @Input() ShowVersion: boolean;

  public SiteName!: string;
  public TimeZoneId!: string;
  // public appVersion: string;
  public CurrDate!: string;
  public CurrTime!: string;
  private timer: any;
  public showChat: boolean;

  constructor(
    public common: CommonService,
    private router: Router,
    private dtSvc: DatetimeService,
    public menuCtrl: MenuController,
    private location: Location
  ) {}

  ngOnInit() {
    console.log('Hello HeaderComponent Component');
    

  }
  
  ngOnChanges() {
  }

  refresh(){
    
    let currPageParts = window.location.href.split("/");
    window.location.reload();
    
  }

  toggleMenu() {
    console.log('In toggleMenu');
    this.menuCtrl.enable(true).then((isMenuEnabled) => {
      console.log('Is Menu Enabled', isMenuEnabled);
      this.menuCtrl.open();
    });
    
  }

  
  getCurrentTimeInterval(timeZoneUI: string) {
    this.timer = setInterval(() => {
      this.getCurrDateTime(timeZoneUI);
    }, 30000);
  }
  

  getCurrDateTime(timeZoneUI: string) {
    this.CurrDate = this.dtSvc.getCurrDate(timeZoneUI);
    this.CurrTime = this.dtSvc.getCurrTime(timeZoneUI);
  }

  goToPreviousPage() {
    this.router.navigate(['home']);
  }

  

  exit() {
    this.router.navigate(['home']);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  goBack() {
    if (this.ParentPage == 'transactions') {
      this.location.back();
    } else {
      this.router.navigate([this.ParentPage]);
    }
  }
}
