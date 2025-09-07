///////////////////////////////////////////////////////////////////////////////////////////////
///////// AUTHOR: MICHAEL YAACOUB /////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';

import { PlatformService } from '../platform/platform.service';


@Injectable()
export class CommonService {
  public appAccessToken: string;
  public loadingComponent;
  public initNumOfRetries: number;
  //private maxRetries = 3;

  constructor(
    private loadingController: LoadingController
    , private toastCtrl: ToastController
    , private alertController: AlertController
    , private platformSvc: PlatformService
    ) {
    console.log('Hello CommonProvider Provider');

  }



  concatListOfString(lst: string[]): string {
    if (lst == null || lst == undefined) return null;
    let concatstr = '';
    for (let i = 0; i < lst.length; i++) {
      if (i == lst.length - 1) {
        concatstr += lst[i];
      } else {

        concatstr += lst[i] + ',';
      }
    }
    if (concatstr == '') {
      concatstr = 'all';
    }
    console.log('CONCAT LIST: ', concatstr);
    return concatstr;
  }

  getAppVersion(): string {
    return environment.appVersionNumber;
  }

  

  ////////////////////////////////////////////////////////////////////////////////////
  // ------------------------------------------------------------------------------------------------
    // ---------------------- UI METHODS --------------------------------------------------------------
    // ------------------------------------------------------------------------------------------------
    numberWithCommas(x: number): string {
      let s = x.toFixed(2);
      s = s.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      return s;
    }

    async presentToast(msg: string) {
      const toast = await this.toastCtrl.create({
        message: msg,
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
    }

    async presentToastMiddle(msg: string) {
      const toast = await this.toastCtrl.create({
        message: msg,
        duration: 3000,
        position: 'middle'
      });
      toast.present();
    }

    async presentToastTop(msg: string) {
      const toast = await this.toastCtrl.create({
        message: msg,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }

    async presentToastTopDuration(msg: string, durationVal: number) {
      const toast = await this.toastCtrl.create({
        message: msg,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }



    public getPlatformIdByName(platform: string): number {
      if (platform == 'android') return 1;
      else if (platform == 'ios') return 2;
      else if (platform == 'xevo') return 3;
      else return 0;
    }

    async showAlert(title, msg, task) {
      const alert = await this.alertController.create({
        header: title,
        subHeader: msg,
        buttons: [
          {
            text: `Action: ${task}`,
            handler: () => {
              // E.g: Navigate to a specific screen
            }
          }
        ]
      });
      alert.present();
    }


    async ShowLoading(msg: string) {
      try {
        if (this.loadingComponent == null) {
          // const loadingController = document.querySelector('ion-loading-controller');
          // await loadingController.componentOnReady();
          this.loadingComponent = await this.loadingController.create({
            message: msg
            //,
            //showBackdrop: true
          });
          await this.loadingComponent.present();
        }
      } catch (ex) { }
    }

    async ShowLoadingByTimer(msg: string, durationInMSec: number) {
      try {
        if (this.loadingComponent == null) {
          // const loadingController = document.querySelector('ion-loading-controller');
          // await loadingController.componentOnReady();
          this.loadingComponent = await this.loadingController.create({
            message: msg,
            duration: durationInMSec
          });
          await this.loadingComponent.present();
        }
      } catch (ex) { }
    }

    async HideLoading() {
      try {
        if (this.loadingComponent) { await this.loadingComponent.dismiss(); this.loadingComponent = null; }
      } catch (ex) { }
    }
  ////////////////////////////////////////////////////////////////////////////////////

  public isMobile(): boolean {
    return this.platformSvc.isMobile();
  }
  ///////////////////////////////////////////////////////////////////////////////////////////



}
