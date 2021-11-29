import { HttpClient } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  homes$ =  new BehaviorSubject([]);

  constructor( private httpClient: HttpClient) { }

  loadHomes(){
    this.httpClient.get<any[]>('assets/homes.json')
    .pipe(
      delay(2000)
    ).subscribe( homes =>{
      this.homes$.next(homes);
    });

  }
}
