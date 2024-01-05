import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from 'src/app/interfaces/Employee';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent{

  @Input() employees : any
  @Output() deletedEmployee = new EventEmitter<number>()

  constructor(private service : EmployeeServiceService) { }

  deleteEmployee(id : number, event : Event) {
    event.stopPropagation()
    this.service.delete(id).subscribe((res : any) => {
      this.deletedEmployee.emit(id)
    })
  }
}
