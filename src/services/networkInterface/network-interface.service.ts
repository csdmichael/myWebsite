///////////////////////////////////////////////////////////////////////////////////////////////
///////// AUTHOR: MICHAEL YAACOUB /////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

import { Injectable } from '@angular/core';
import { NetworkInterface } from '@ionic-native/network-interface/ngx';
import { NetworkInfo } from 'src/models/networkInfo';

@Injectable({
  providedIn: 'root'
})
export class NetworkInterfaceService {
  public networkInfo: NetworkInfo;

  constructor(
    private networkInterface: NetworkInterface
  ) { 
    this.loadNetworkInfo();
  } 

  public loadNetworkInfo() {
    this.networkInterface = new NetworkInterface();
    this.networkInterface.getWiFiIPAddress()
    .then(
      (address) => {
        if (address !== null && address!== undefined) {
          console.info(`IP: ${address.ip}, Subnet: ${address.subnet}`);
          this.networkInfo.wiFiIP = address.ip;
          this.networkInfo.wiFiSubnet = address.subnet;
        } else {
          this.networkInfo.wiFiIP = '';
          this.networkInfo.wiFiSubnet = '';
          console.log('Wifi address is blank');
        }
        this.networkInterface.getCarrierIPAddress()
        .then(
          (address) => {
            if (address !== null && address!== undefined) {
              console.info(`IP: ${address.ip}, Subnet: ${address.subnet}`);
              this.networkInfo.carrierIP = address.ip;
              this.networkInfo.carrierSubnet = address.subnet;
            } else {
              this.networkInfo.carrierIP = '';
              this.networkInfo.carrierSubnet = '';
              console.log('Carrier address is blank');
            }
            const url = 'www.chevron.com';
            this.networkInterface.getHttpProxyInformation(url)
              .then(
                (proxy) => {
                  if (proxy !== null && proxy!== undefined) {
                    console.info(`Type: ${proxy.type}, Host: ${proxy.host}, Port: ${proxy.port}`);
                    this.networkInfo.proxyType = proxy.type;
                    this.networkInfo.proxyHost = proxy.host;
                    this.networkInfo.proxyPort = proxy.port;
                  } else {
                    this.networkInfo.proxyType = '';
                    this.networkInfo.proxyHost = '';
                    this.networkInfo.proxyPort = '';
                    console.log('Proxy is blank');
                  }
                  
                })
              .catch(
                (error) => {
                  console.error(`Unable to get proxy info: ${error}`);
                });
            }
          
        )
        .catch(
          (error) => {
            console.error(`Unable to get Carrier IP: ${error}`);
          }
        );
      }
    )
    .catch(
      (error) => {
        console.error(`Unable to get Wifi IP: ${error}`);
      }
    );

  }

  

}
