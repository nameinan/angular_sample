import { Component, OnInit, Output,EventEmitter ,Input} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html'
})
export class HomeSearchComponent implements OnInit {

  @Input() defaultSearch;
  @Output() applied =  new EventEmitter();
  form:FormGroup;

  constructor(private formBuilder:FormBuilder) { }


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      search:[this.defaultSearch]      
    });

    this.form.get('search').valueChanges
    .pipe(
      debounceTime(500)
    )
    .subscribe(value =>{
      this.applied.emit(value);
    });

    }
}

