import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html'
})
export class HomesComponent implements OnInit {


  showHomeTypeDropDown=false;

  homes$= this.dataService.getHomes() ;
  
  constructor(
    private dataService : DataService,
    private router:Router
    
    ) { }

  ngOnInit(): void {
  }


  homeTypeFilterApplied($event){
    console.log($event);
    this.router.navigate(['homes'],{queryParams: {'home-type': $event}})
  }
}
