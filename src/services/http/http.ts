import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import JWT from 'jwt-decode';
import { tap, finalize, filter, map } from 'rxjs/operators';
import { HTTP } from '@ionic-native/http/ngx';
import { PlatformService } from '../platform/platform.service';
import { from } from 'rxjs';
import { Router } from '@angular/router';

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpService {
  private apisBaseURL: string;;

  constructor(
      private http: HttpClient
      , private nativeHttp: HTTP
      , private platformSvc: PlatformService
      , private router: Router) {
    console.log('Hello HttpProvider Provider');

    this.nativeHttp.setDataSerializer('json'); 
    this.apisBaseURL = environment.apisURL;
    this.apisBaseURL += this.apisBaseURL.endsWith('/') ? '' : '/';
  }

  private getBase<T>(url: string, userAccessToken: string, isSecure: boolean, isAbsoluteUrl?: boolean): Observable<any> {
    if (!isAbsoluteUrl) {
        url = this.apisBaseURL + url;
    }
        
    console.log(url);

    let headersDict;
    let additionalHeaders: HttpHeaders;
    let httpHeaders: any;
    if (isSecure) {
        headersDict = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Header': '*',
            Authorization: 'Bearer ' + userAccessToken
       };
        
    } else if (isAbsoluteUrl) {
        headersDict = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Header': '*',
        };
    } else {
        headersDict = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Header': '*'
       };
    }

    httpHeaders = new HttpHeaders(headersDict);

    const httpOpts = { 
        headers: httpHeaders
        //, withCredentials: true
    };

    if (this.platformSvc.isMobile() && !isAbsoluteUrl){
        this.nativeHttp.setDataSerializer('json'); 
        let nativeCall = this.nativeHttp.get(url, {}, headersDict);
        return from(nativeCall).pipe(
            map((res) => JSON.parse(res.data)),
            tap(
                (data) => {
                    console.log('Native Http Data', data);
                    return;
                },
                (err: any) => {
                    console.log(err);
                }
            )
        );
    } else {
        return this.http.get<T>(url, httpOpts);
    }
    
  }

  get<T>(url: string, isAbsoluteUrl?: boolean): Observable<T>|undefined {
    return this.getBase<T>(url, '', false, isAbsoluteUrl);
  }

  getSecure<T>(url: string, userAccessToken: string): Observable<T>|undefined|undefined {
    console.log('Token Value', userAccessToken);
    if (userAccessToken !== null && userAccessToken !== undefined) {
        let decodedToken = JWT(userAccessToken);
        // decodedToken.exp = 1565212335
        console.log(decodedToken);
        return this.getBase<T>(url, userAccessToken, true, false).pipe(
            tap(
                () => {},
                (err: HttpErrorResponse) => {
                    console.log('Get Error' + err.error);
                    if (err instanceof HttpErrorResponse) {
                        if (err.status === 401) {
                            this.logout();
                            console.log('Get Error 401!');
                            return;
                        }
                        if (err.status === 500) {
                            //this.logout();
                            console.log('Get Error 500!');
                            return;
                        }
                    }
                }
            )
        );
    } else {
        return;
    }
    
  }

  postSecure<T>(url: string, body: any, userAccessToken: string, isxport?: boolean): Observable<T>|undefined {
    const decodedToken = JWT(userAccessToken);
    console.log(decodedToken);
    return this.postBase<T>(url, body, userAccessToken, true, false).pipe(
        tap(
            () => {},
            (err: any) => {
                console.log('Post Error' + err);
                if (err instanceof HttpErrorResponse) {
                    if (err.status === 401) {
                        this.logout();
                        console.log('Post Error 401!');
                        return;
                    }
                    if (err.status === 500) {
                        //this.logout();
                        console.log('Post Error 500!');
                        return;
                    }
                }
            }
        )
    );
  }

  putSecure<T>(url: string, body: any, userAccessToken: string): Observable<T>|undefined {
    const decodedToken = JWT(userAccessToken);
    console.log(decodedToken);
    return this.putBase<T>(url, body, userAccessToken, true, false).pipe(
        tap(
            () => {},
            (err: any) => {
                console.log('Put Error' + err);
                if (err instanceof HttpErrorResponse) {
                    if (err.status === 401) {
                        this.logout();
                        console.log('Put Error 401!');
                        return;
                    }
                    if (err.status === 500) {
                        //this.logout();
                        console.log('Put Error 500!');
                        return;
                    }
                }
            }
        )
    );
  }

  post<T>(url: string, body: any): Observable<T>|undefined {
    return this.postBase<T>(url, body, '', false, false);
  }

  postAbsoluteUrl<T>(url: string, body: any): Observable<T>|undefined {
    return this.postBase<T>(url, body, '', false, true);
  }

  // check to see if other methods use post. If not, make body type of Object.

  private postBase<T>(url: string, body: any, userAccessToken: string, isSecure?: boolean, isAbsoluteUrl?: boolean): Observable<any> {
    if (!isAbsoluteUrl) {
        url = this.apisBaseURL + url;
    }

    console.log(url);
    console.log(body);

    let httpHeaders: any;
    let headersDict;

    if (isSecure) {
        headersDict = {
             'Content-Type': 'application/json',
             'Access-Control-Allow-Origin': '*',
             'Access-Control-Allow-Header': '*',
             Authorization: 'Bearer ' + userAccessToken
        };
    } else {
        headersDict = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Header': '*'
       };
    }

    httpHeaders = new HttpHeaders(headersDict);

    const httpOpts = { 
        headers: httpHeaders
        //, withCredentials: true
    };

    if (this.platformSvc.isMobile()) {
        this.nativeHttp.setDataSerializer('json'); 
        let nativeCall = this.nativeHttp.post(url, body, headersDict);
        return from(nativeCall).pipe(
            map((res) => JSON.parse(res.data)),
            tap(
                (data) => {
                    console.log('Native Http Data', data);
                    return;
                },
                (err: any) => {
                    console.log(err);
                }
            )
        );
    } else {
        return this.http.post<T>(url, body, httpOpts);
    }

  }

  private putBase<T>(url: string, body: any, userAccessToken: string, isSecure?: boolean, isAbsoluteUrl?: boolean): Observable<any> {
    if (!isAbsoluteUrl) {
        url = this.apisBaseURL + url;
    }

    console.log(url);
    console.log(body);

    let httpHeaders: any;
    let headersDict;

    if (isSecure) {
        headersDict = {
             'Content-Type': 'application/json',
             'Access-Control-Allow-Origin': '*',
             'Access-Control-Allow-Header': '*',
             Authorization: 'Bearer ' + userAccessToken
        };
    } else {
        headersDict = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Header': '*'
       };
    }

    httpHeaders = new HttpHeaders(headersDict);

    const httpOpts = { 
        headers: httpHeaders
        //, withCredentials: true
    };

    if (this.platformSvc.isMobile()) {
        this.nativeHttp.setDataSerializer('json'); 
        let nativeCall = this.nativeHttp.put(url, body, headersDict);
        return from(nativeCall).pipe(
            map((res) => JSON.parse(res.data)),
            tap(
                (data) => {
                    console.log('Native Http Data', data);
                    return;
                },
                (err: any) => {
                    console.log(err);
                }
            )
        );
    } else {
        return this.http.put<T>(url, body, httpOpts);
    }

  }

  private deleteBase<T>(url: string, userAccessToken: string, isSecure?: boolean): Observable<any> {
    
    url = this.apisBaseURL + url;

    console.log(url);

    let additionalHeaders;
    let headersDict;

    if (isSecure) {
        headersDict = {
            Authorization: 'Bearer ' + userAccessToken
        };
    } else {
        headersDict = {};
    }

    additionalHeaders = new HttpHeaders(headersDict);

    if (this.platformSvc.isMobile()) {
        this.nativeHttp.setDataSerializer('json'); 
        let nativeCall = this.nativeHttp.delete(url, {}, headersDict);
        return from(nativeCall).pipe(
            map((res) => JSON.parse(res.data)),
            tap(
                (data) => {
                    console.log('Native Http Data', data);
                    return;
                },
                (err: any) => {
                    console.log(err);
                }
            )
        );
    } else {
        return this.http.delete<T>(url, { headers: additionalHeaders});
    }
  }

  deleteSecure<T>(url: string, userAccessToken: string): Observable<T>|undefined {
    const decodedToken = JWT(userAccessToken);
    console.log(decodedToken);
    return this.deleteBase<T>(url, userAccessToken, true).pipe(
        tap(
            () => {},
            (err: any) => {
                if (err instanceof HttpErrorResponse) {
                    if (err.status === 401) {
                        this.logout();
                        return;
                    }
                    if (err.status === 500) {
                        //this.logout();
                        console.log('Delete Error 500!');
                        return;
                    }
                }
            }
        )
    );
  }

  logout() {
    this.router.navigate(['home']);
  }

}
