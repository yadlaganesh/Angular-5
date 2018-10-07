import { Component, OnInit , SimpleChanges} from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { EmployeeService } from './employee.service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  id: number;
  employee: Employee;
  
  constructor(private routeActive: ActivatedRoute, private empService: EmployeeService, private router: Router) {
    
    
   }

  ngOnInit() {
    //this.id = +this.routeActive.snapshot.params['id'];
    this.routeActive.params.subscribe( params => {
      this.id = +params['id'];
      this.employee = this.empService.getEmployee(this.id);
    })

  }

  viewNextEmployee(){
    if(this.id < 3){
      this.id =this.id +1;
    }else{
      this.id = 1;
    }
    this.router.navigate(['/employees',this.id]);
  }
}
