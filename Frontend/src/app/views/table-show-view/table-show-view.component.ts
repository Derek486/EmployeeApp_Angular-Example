import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/interfaces/Employee';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';

@Component({
  selector: 'app-table-show-view',
  templateUrl: './table-show-view.component.html',
  styleUrls: ['./table-show-view.component.css']
})
export class TableShowViewComponent implements OnInit{

  employee !: Employee

  constructor(private service : EmployeeServiceService, private router : Router) { }

  ngOnInit(): void {

    const routes = this.router.url.split('/')
    const id = routes[routes.length-1];

    this.service.show(Number(id)).subscribe((data : Employee) => {
      this.employee = data
    })

  }

  updateEmployee(employee : Employee) {
    this.service.update(employee.id, employee).subscribe((res : any) => {
      this.router.navigate(['/table'])
    })
  }
}
