import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: 'order-history-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  

  status = ['pending', 'ready', 'completed']

  constructor(private formBuilder: FormBuilder) {

    this.ordersQueryForm = formBuilder.group({
      'status': [''],
      'fromDate': [''],
      'toDate': [''],
    });

  }

onSearch(){
  
}

  ngOnInit(): void {
  }

}
