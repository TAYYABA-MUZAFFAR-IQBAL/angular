import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { element } from 'protractor';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[]=[];


  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees() {
    this.employeeService.getEmployeesList().subscribe((data) => { 
      this.employees= data;
    //  this.employees?.forEach(element=>{console.log(element) 
    //   return false;
    //  })
      const emp=this.employees
      console.log("=======>All data",emp);
      
    });
  }

  employeeDetails(id: string) {
    this.router.navigate(['employee-details', id]);
  }

  updateEmployee(id: string) {
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id: string) {
    this.employeeService.deleteEmployee(id).subscribe((data) => {
      console.log("deleted data====>",data);
      this.getEmployees();
    });
  }
}
