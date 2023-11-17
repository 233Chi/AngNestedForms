import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyStudentFormComponent } from "../my-student-form/my-student-form.component";
import { NgFor, NgIf } from '@angular/common';

@Component({
    selector: 'app-create-students-form',
    templateUrl: './create-students-form.component.html',
    styleUrls: ['./create-students-form.component.scss'],
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, MyStudentFormComponent, NgFor]
})
export default class CreateStudentsFormComponent {
  public studentsForm: FormGroup;
  public childForms: FormArray;

    constructor(private formBuilder: FormBuilder) {
      this.childForms = this.formBuilder.array([]);

        this.studentsForm = this.formBuilder.group({
        id: ['',[]],
        children: this.childForms
      });
    }

    ngOnInit(): void {

    }

    addStudent() {
      this.childForms?.push(this.formBuilder.group({}));
      console.log(this.studentsForm);
    }

    public get getChildFormAsFormGroup(): FormGroup[] {
      return this.childForms?.controls as FormGroup[];
  }
}
