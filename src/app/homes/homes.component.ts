import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router:Router,
    private route:ActivatedRoute
    
    ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      const homeTypeFilters= params['home-type'] || [];
      this.dataService.loadHomes(homeTypeFilters);
      //console.log(params);
    });
    //this.dataService.loadHomes();
  }


  homeTypeFilterApplied($event){
    this.showHomeTypeDropDown=false
    this.router.navigate(['homes'],{queryParams: {'home-type': $event}})
  }
}
