import { Component, OnInit, Input, SimpleChanges, OnChanges, EventEmitter, Output} from '@angular/core';
import { Employee } from '../models/employee.model';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit, OnChanges {
  //@Input() employee: Employee[];
  @Input() employee: Employee;
  private selectedEmployee: number;
  //employee: Employee[];
  //@Output() notify:EventEmitter<Employee[]> = new EventEmitter<Employee[]>();


  /*-- handleClick(){
   this.notify.emit(this.employee); 
  } --*/

  /*-- private _employee: Employee;
  @Input()
  set employee(val: Employee){
    this._employee = val;
    console.log("Previous value"+this._employee.name);
    console.log("Current value"+val.name); 
  }
  get employee(): Employee{
    return this._employee;
  } --*/
  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.employee = this.employee;
    this.selectedEmployee = +this.activeRoute.snapshot.paramMap.get('id');
  }
  getEmployeeNameAndGeder(){
    return this.employee.name + ' ' + this.employee.gender;
  }
  ngOnChanges(changes: SimpleChanges){
    //console.log(changes);
    /*--for(const propname of Object.keys(changes)){
      const change = changes[propname];
      const cuurentValue = JSON.stringify(change.currentValue);
      const prevValue = JSON.stringify(change.previousValue);
      console.log(cuurentValue);
      console.log(prevValue);
    } --*/
  }

}
