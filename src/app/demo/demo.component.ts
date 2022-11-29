import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
@Input() employee_new=[];
  constructor() { }

  ngOnInit() {
    console.table(this.employee_new);
    
  }

}
