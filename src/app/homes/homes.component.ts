import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html'
})
export class HomesComponent implements OnInit {


  showHomeTypeDropDown=false;

  homes$= this.dataService.homes$
  
  constructor(
    private dataService : DataService,
    private router:Router
    
    ) { }

  ngOnInit(): void {
    this.dataService.loadHomes();
  }


  homeTypeFilterApplied($event){
    console.log($event);
    this.router.navigate(['homes'],{queryParams: {'home-type': $event}})
  }
}
