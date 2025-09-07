import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { CommonService } from 'src/services/common/common';
import { AppMessages } from 'src/environments/messages';

@Component({
    selector: 'app-terms',
    templateUrl: './terms.page.html',
    styleUrls: ['./terms.page.scss'],
    standalone: false
})

export class TermsPage  implements OnInit {
  public showMenu: boolean;

  constructor(public router: Router
    , private common: CommonService
    , private route: ActivatedRoute) {
    
  }

  ngOnInit() {
    console.log('In Terms Page');
    this.route.queryParams.subscribe(params => {
      if (this.router.currentNavigation().extras.state) {
        this.showMenu = this.router.currentNavigation().extras.state.ShowMenu;
      } else {
        this.showMenu = true;
      }
      console.log('ShowMenu', this.showMenu);
    });
  }

  agree() {
    if (this.showMenu === true) {
      this.router.navigate(['currentvisitors']);
    } else {
      let navExtras: NavigationExtras;
      navExtras = {
        state: {
          IsSetup: true
        }
      }
      this.router.navigate(['admin'], navExtras);
    }
  }

  disagree() {
    let errorMsg: string = "";
    errorMsg += AppMessages.ACCEPT_TERMS_CONDICTION;
    this.common.presentToastTop(errorMsg);
  }

}
