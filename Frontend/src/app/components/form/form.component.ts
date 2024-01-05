import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Employee } from 'src/app/interfaces/Employee';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnChanges {
  @Input() title !: string
  @Input() title_button !: string
  @Input() hasButtonBack : boolean = false
  @Input() employee !: Employee
  @Output() submitData = new EventEmitter<Employee>()

  formData : FormGroup = new FormGroup({
    id: new FormControl(''),
    firstName: new FormControl('', [Validators.minLength(25), Validators.required]),
    lastName: new FormControl('', [Validators.minLength(25), Validators.required]),
    age: new FormControl('', [Validators.required, Validators.min(18)]),
    salary: new FormControl('', [Validators.required, Validators.min(100)])
  })

  ngOnChanges(changes : SimpleChanges): void {

    if (changes && this.employee) {

      this.formData = new FormGroup({
        id: new FormControl(this.employee?.id),
        firstName: new FormControl(this.employee?.firstName, [Validators.minLength(25), Validators.required]),
        lastName: new FormControl(this.employee?.lastName, [Validators.minLength(25), Validators.required]),
        age: new FormControl(this.employee?.age, [Validators.required, Validators.min(18)]),
        salary: new FormControl(this.employee?.salary, [Validators.required, Validators.min(100)])
      })

    }
  }

  submit() : void {
    this.submitData.emit(this.formData.value as Employee)
  }

}
