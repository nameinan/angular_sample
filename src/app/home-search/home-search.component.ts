import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html'
})
export class HomeSearchComponent implements OnInit {

  
  @Output() applied =  new EventEmitter();
  form:FormGroup;

  constructor(private formBuilder:FormBuilder) { }


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      search:[]      
    });

    this.form.get('search').valueChanges.subscribe(value =>{
      this.applied.emit(value);
    });

    }
}

