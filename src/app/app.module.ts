import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonService } from 'src/services/common/common';
import { HttpService } from 'src/services/http/http';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage-angular';
import { FormsModule } from '@angular/forms';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { Device } from '@ionic-native/device/ngx';
import { NetworkInterface } from '@ionic-native/network-interface/ngx';
import { environment } from 'src/environments/environment';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { PlatformService } from 'src/services/platform/platform.service';
import { HTTP } from '@ionic-native/http/ngx';
import { NgxPaginationModule } from 'ngx-pagination';
//import {  MsalModule } from '@azure/msal-angular';
//import { PublicClientApplication } from '@azure/msal-browser';
import { TranslateModule } from "@ngx-translate/core";
import { PdfViewerModule } from 'ng2-pdf-viewer';

const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1 || window.navigator.userAgent.indexOf('Edge/') > -1;

@NgModule({ declarations: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent], 
    imports: [BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        IonicStorageModule.forRoot(),
        TranslateModule.forRoot(),
        FormsModule,
        PdfViewerModule,
        NgxPaginationModule
        
    ], providers: [
        /*
        {
          provide: HTTP_INTERCEPTORS,
          useClass: MsalInterceptor,
          multi: true
        },
        */
        HTTP,
        StatusBar,
        SplashScreen,
        CommonService,
        HttpService,
        PlatformService,
        Platform,
        AppVersion,
        Device,
        FileOpener,
        FileTransfer,
        File,
        InAppBrowser,
        NetworkInterface,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule {}
