import { Component, OnInit } from '@angular/core';
import { Car } from '../cars/Car';

@Component({
  selector: 'app-assignmentdirectives',
  templateUrl: './assignmentdirectives.component.html',
  styleUrls: ['./assignmentdirectives.component.css']
})
export class AssignmentdirectivesComponent implements OnInit {
title:string="Top Five Countries";
cars: Car[] = [
  { no: 1, country: 'India', capital: 'New Delhi', language: 'Hindi' },
  { no: 2, country: 'china', capital: 'Beijing', language: 'Mandarin' },
  { no: 3, country: 'Japan', capital: 'Tokyo', language: 'Nihongo' },
  { no: 4, country: 'Russia', capital: 'Moscow', language: 'Russian' },
  { no: 5, country: 'Canada', capital: 'Ottawa', language: 'English' },
  ]
selectedProduct:string;
constructor() { }

ngOnInit() {
}
getProductValue(value){
console.log(value.target.value);
this.selectedProduct=value.target.value;
}
}

