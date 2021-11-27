import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private httpClient: HttpClient) { }

  getHomes(){
    return this.httpClient.get<any>('assets/homes.json')
    .pipe(
      delay(2000)
    );

  }
}
