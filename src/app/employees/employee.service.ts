import { Injectable } from "@angular/core";
import { Employee } from "../models/employee.model";
 

@Injectable()
export class EmployeeService{
    private listEmployee: Employee[]=[ 
        {
            id: 1,
            name: 'Ganesh',
            gender: 'Male',
            email: 'ganeshyadla@gmail.com',
            phoneNumber: 9070898989,
            contactPreference: 'Email',
            dateOfBirth: new Date('10-28-2018'),
            department: '1', 
            isActive: true,
            photoPath: 'assets/images/emp_1.jpg'
          },
          {
            id: 2,
            name: 'Suresh',
            gender: 'Male',
            email: 'sureshvarma@gmail.com',
            phoneNumber: 7097456789,
            contactPreference: 'Email',
            dateOfBirth: new Date('10-06-2018'),
            department: '2',
            isActive: true,
            photoPath: 'assets/images/emp_2.jpg'
          },
          {
            id: 3,
            name: 'Sarvesh',
            gender: 'Male',
            email: 'sarveshyadla@gmail.com',
            phoneNumber: 6098753625,
            contactPreference: 'Email',
            dateOfBirth: new Date('11-12-2018'),
            department: '3',
            isActive: true,
            photoPath: 'assets/images/emp_3.jpg'
          }
    ];
    getEmployees(): Employee[]{
        return this.listEmployee;
    }
    getEmployee(id: number): Employee{
        return this.listEmployee.find(e => e.id === id);
    }
    saveEmployee(employee: Employee){
        employee.id = this.listEmployee.length + 1;
        this.listEmployee.push(employee); 
        console.log(this.listEmployee);
    }
}