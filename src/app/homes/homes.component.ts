import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html'
})
export class HomesComponent implements OnInit {


  showHomeTypeDropDown=false;
  currentHomeTypeFilter=[];
  currentSearch="";

  homes$= this.dataService.homes$
  
  constructor(
    private dataService : DataService,
    private router:Router,
    private route:ActivatedRoute
    
    ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      const homeTypeFilters= params['home-type'] || [];
      const searchString= params['search'] || '';

      this.dataService.loadHomes(homeTypeFilters,searchString);
      this.currentHomeTypeFilter=homeTypeFilters;
      this.currentSearch=searchString;
      //console.log(params);
    });
    //this.dataService.loadHomes();
  }


  homeTypeFilterApplied($event){
    this.showHomeTypeDropDown=false
    this.router.navigate(['homes'],{queryParams: {'home-type': $event}})
  }


  searchApplied($event){
    this.showHomeTypeDropDown=false
    this.router.navigate(['homes'],{queryParams: {'search': $event}})
  }
}
