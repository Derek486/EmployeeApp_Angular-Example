import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeErrores } from 'src/app/interfaces/Employee';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {

  employees : Employee[] = []
  errores : Record<string, string> = {}

  constructor(private service : EmployeeServiceService) { }

  ngOnInit(): void {
    this.service.index().subscribe((data : any) => {
      this.employees = data
    })
  }

  popEmployeeList(id : number | string) {
    this.employees = this.employees.filter((employee : Employee) => employee.id !== id)
  }

  createEmployee(employee : Employee) {
    this.service.create(employee).subscribe({
      next: (res : any) => {
        employee.id = res.id
        this.employees.push(employee)
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
