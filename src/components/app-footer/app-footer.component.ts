import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/services/common/common';
import { AppVersionService } from 'src/services/appVersion/app-version.service';

@Component({
    selector: 'app-footer',
    templateUrl: './app-footer.component.html',
    styleUrls: ['./app-footer.component.scss'],
    standalone: false
})
export class AppFooterComponent implements OnInit {
  
  public appVersion: string;
  public privacyPolicyUrl: string;

  constructor(
    private common: CommonService
    , private appVersionSvc: AppVersionService
    ) {
    this.appVersion = this.common.getAppVersion();
   }

  ngOnInit() {}

  showVersionInfo() {
    if (this.common.isMobile()) {
      let appVersionInfo: string;
      appVersionInfo = '';
      this.appVersionSvc.getAppName().then(
        (appName: string) => {
          appVersionInfo += 'App Name: ' + appName + '\r\n';
          this.appVersionSvc.getPackageName().then(
            (packageName: string) => {
              appVersionInfo += 'Package Name: ' + packageName + '\r\n';
              this.appVersionSvc.getVersionCode().then(
                (versionCode: string) => {
                  appVersionInfo += 'Version Code: ' + versionCode + '\r\n';
                  this.appVersionSvc.getVersionNumber().then(
                    (versionNum: string) => {
                      appVersionInfo += 'Version Num: ' + versionNum + '\r\n';
                      appVersionInfo += 'Window Href: ' + this.appVersionSvc.getWindowHref() + '\r\n';
                      this.common.presentToastTop(appVersionInfo);
                    }, (err: any) => {
                      this.common.presentToastTop('Error in getVersionNum. Error: ' + err.message);
                    }
                  );
                }, (err: any) => {
                  this.common.presentToastTop('Error in getVersionCode. Error: ' + err.message);
                }
              );
            }, (err: any) => {
              this.common.presentToastTop('Error in getAppName. Error: ' + err.message);
            }
          );
        }, (err: any) => {
          this.common.presentToastTop('Error in getAppName. Error: ' + err.message);
        }
      );
    }
  }

  openPrivacyPolicy() {}

}
