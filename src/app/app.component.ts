import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
    standalone: false
})
export class AppComponent {
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    //private networkSvc: NetworkInterfaceService
  ) {

  }
  

  initializeApp() {
    this.platform.ready().then(() => {

      // This code is necessary for browser
      /*
      Environment.setEnv({
        'API_KEY_FOR_BROWSER_RELEASE': environment.googleMapsAPIKey,
        'API_KEY_FOR_BROWSER_DEBUG': environment.googleMapsAPIKey
      });
      */
      //this.networkSvc.loadNetworkInfo();

      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.router.navigate(['home']);
    });
  }
  
}
