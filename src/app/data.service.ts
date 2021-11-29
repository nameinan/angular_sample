import { HttpClient } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { delay, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  homes$ =  new BehaviorSubject([]);

  constructor( private httpClient: HttpClient) { }

  loadHomes(homeTypeFilters){

    this.homes$.next([]);
    this.httpClient.get<any[]>('assets/homes.json')
    .pipe(
      delay(2000),
      //Filter homes on client side.
      map(homes =>{

        if(!homeTypeFilters.length){
          return homes;
        }
        return homes.filter(home => homeTypeFilters.includes(home.type));

      })

    ).subscribe( homes =>{
      this.homes$.next(homes);
    });

  }
}
