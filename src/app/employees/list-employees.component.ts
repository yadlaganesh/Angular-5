import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[];
  employeeDisplay: Employee;
  private arrayIndex = 1;
  dataFromchild : Employee;
  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.employees = this.employeeService.getEmployees();
    this.employeeDisplay = this.employees[0];
    //console.log(this.employees);
  }
  onClick(employeeId: number){
    this.router.navigate(['/employees', employeeId]);
  }
  changeEmployeeName(){ 
    this.employees[0].name = 'Nikesh';
  }
  
  /*-- handleNotify(eventData: Employee){
    this.dataFromchild = eventData;
  }
  nextEmployee(): void{
    if(this.arrayIndex <= 2){
      this.employeeDisplay = this.employees[this.arrayIndex];
      this.arrayIndex++;
    }else{
      this.employeeDisplay =this.employees[0];
      this.arrayIndex = 1;
    }
  } */
}
