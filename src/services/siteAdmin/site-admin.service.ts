import { Injectable } from '@angular/core';
import { HttpService } from '../http/http';
import { StorageService } from '../storage/storage.service';
import { Observable } from 'rxjs';
import { SiteAdmin, SiteAdminView, SiteAdminPost } from 'src/models/siteAdmin';

@Injectable({
  providedIn: 'root'
})
export class SiteAdminService {

  private appAccessToken: string;

  constructor(private http: HttpService, private storage: StorageService) {

  }

  public getSiteAdmins(): Observable<any> {
    const userAccessToken = this.storage.getUserAccessToken();
    return this.http.getSecure('siteAdmins', userAccessToken);
  }

  public getSiteAdminsBySite(siteId: string): Observable<any> {
    this.appAccessToken = this.storage.getUserAccessToken();
    return this.http.getSecure('siteAdmins/site/' + siteId, this.appAccessToken);
  }

  public loadSiteAdmins() {
    const userAccessToken = this.storage.getUserAccessToken();
    if (userAccessToken !== null && userAccessToken !== undefined) {
      this.getSiteAdmins().subscribe(
        (res: SiteAdmin[]) => {
          console.log('Site admins ', res);
          const sitesData = res.filter(t => t.isDeleted = false);
          this.storage.setSites(sitesData);
        },
        (err: Error) => {
          console.log('Error in getting site admins', err.message);
        }
      );
    }
  }

  public createSiteAdmin(siteAdmin: SiteAdminPost): Observable<any> {
    const userAccessToken = this.storage.getUserAccessToken();
    return this.http.postSecure('siteAdmins/add', siteAdmin, userAccessToken);
  }

  public updateSiteAdmin(siteAdmin: SiteAdminPost): Observable<any> {
    const userAccessToken = this.storage.getUserAccessToken();
    return this.http.postSecure('siteAdmins/update', siteAdmin, userAccessToken);
  }


  public deleteSiteAdmin(id: string, markDeleted: boolean) {
    const userAccessToken = this.storage.getUserAccessToken();
    return this.http.deleteSecure('siteAdmins/markAsDeleted/' + id + '/' + String(markDeleted), userAccessToken);
  }
}
