import { CanDeactivate } from "@angular/router";
import { CreateEmployeeComponent } from "./create-employee.component";
import { Injectable } from "@angular/core";


@Injectable()
export class CreateEmployeeCanDeactiveGuardService implements CanDeactivate<CreateEmployeeComponent>{
    canDeactivate(component: CreateEmployeeComponent): boolean{ 
        //alert('test');
        if(component.createEmployeeForm.dirty) {
            return confirm('Are you sure you want to discard your changes ?');
        }
        return true;
    }
}