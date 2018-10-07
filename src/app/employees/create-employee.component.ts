import { Component, OnInit, Input, ViewChild} from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';
import { Department} from '../models/department.model';
import { Employee } from '../models/employee.model';
import { SelectRequiredValidatorDirective } from '../shared/select-required-directive';
import { EmployeeService } from './employee.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  @ViewChild('employeeForm') public createEmployeeForm: NgForm;
  isActive = true;
  photoPathView = false;
  department = 3;
  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    email: null,
    phoneNumber: null,
    contactPreference: null,
    dateOfBirth: null,
    department: null,
    isActive: null,
    photoPath: null
}
  departMents: Department[] = [
    {id: 1, name: 'Help Desk'},
    {id: 2, name: 'HR'},
    {id: 3, name: 'IT'},
    {id: 4, name: 'Payroll'},
    {id: 5, name: 'Admin'}
  ];
  constructor(private employeeService: EmployeeService,private router: Router) { }

  ngOnInit() {
  }
  photoPathToggle(){
    this.photoPathView = !this.photoPathView;
  } 
  saveEmployee(): void{ 
    const newEmp:Employee = Object.assign({}, this.employee);

    this.employeeService.saveEmployee(newEmp);
    //newEmp.reset();
    this.createEmployeeForm.reset({
      name: 'Ganesh'
    });
    this.router.navigate(['list']);
  }
}
