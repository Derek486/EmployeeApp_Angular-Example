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
  errores : Record<string, string> = {}

  constructor(private service : EmployeeServiceService, private router : Router) { }

  ngOnInit(): void {

    const routes = this.router.url.split('/')
    const id = routes[routes.length-1];
    
    this.service.show(id).subscribe((data : Employee) => {
      this.employee = data
    })

  }

  updateEmployee(employee : Employee) {
    this.service.update(employee.id, employee).subscribe({
      next: (res : any) => {
        this.router.navigate(['/table'])
      },
      error: (err : any) => {
        err.error.errors.forEach((element : any) => {
          let error = Object.entries(element)[0]
          this.errores[error[0] as string] = error[1] as string
        });
      }
    })
  }
}
