import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-home-type-filter',
  templateUrl: './home-type-filter.component.html'
 })
export class HomeTypeFilterComponent implements OnInit {


 @Output() applied =  new EventEmitter();

  public form:FormGroup;

  constructor( private formBuilder : FormBuilder) { 
      
  }

  ngOnInit(): void {
     this.form = this.formBuilder.group({
      Apartment:[],
      Room:[],
      House:[]
    });
  }

  submit(formValue:any){
    
    const homeTypes = Object.keys(formValue).filter(item=>formValue[item]);
    this.applied.emit(homeTypes);
    

  }

}
