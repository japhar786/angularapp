import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
  employees:Employee[]=[
    {emp_id:1,emp_name:"Pradip",emp_dept:"HR",emp_salary:90000,emp_company:"Google"},
    {emp_id:2,emp_name:"Amit",emp_dept:"IT",emp_salary:80000,emp_company:"Microsoft"},
    {emp_id:3,emp_name:"Vasant",emp_dept:"HR",emp_salary:70000,emp_company:"Apple"},
    {emp_id:4,emp_name:"Avinash",emp_dept:"Finance",emp_salary:40000,emp_company:"Tesla"},
  {emp_id:5,emp_name:"Rohit",emp_dept:"IT",emp_salary:50000,emp_company:"Facebook"}
]
ngOnint(){

}
}
