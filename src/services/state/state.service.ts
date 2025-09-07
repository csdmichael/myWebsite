import { Injectable } from '@angular/core';
import { State } from 'src/models/state';
import { HttpService } from '../http/http';
import { StorageService } from '../storage/storage.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private appAccessToken: string;
  
  constructor(private http: HttpService, private storage: StorageService) { 
    this.appAccessToken = this.storage.getUserAccessToken();
  }

  private getStates(): Observable<any> {
    this.appAccessToken = this.storage.getUserAccessToken();
    return this.http.getSecure('States', this.appAccessToken);
  }

  public clearStates() {
    this.storage.setStates(null);
  }

  public loadStates() {
    this.getStates().subscribe(
      (res: State[]) => {
        console.log('States Result', res);
        
        let states: State[];
        states = res;
        
        console.log('States ', states);
        this.storage.setStates(states);
      },
      (err: Error) => {
        console.log('Error in getStates', err.message);
      }
    );
  }

  public fetchStates(): Promise<any> {
    return this.storage.getStates();
  }

  public getStateById(states: State[], stateId: string): State {
    return states.find(
      ut => ut.Id == stateId
    );
  }
}
