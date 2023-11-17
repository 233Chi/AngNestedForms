import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, FormArray, FormControl } from '@angular/forms';
import { MyLessonsFormComponent } from "../my-lessons-form/my-lessons-form.component";

@Component({
    selector: 'app-my-student-form',
    templateUrl: './my-student-form.component.html',
    styleUrls: ['./my-student-form.component.scss'],
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, NgFor, MyLessonsFormComponent]
})
export class MyStudentFormComponent implements OnInit {
  @Input('baseForm')
  public baseForm!: FormGroup;
  public childForms!: FormArray;

  constructor(private formBuilder: FormBuilder) {
    // this.baseForm = this.formBuilder.group({
    //   firstName: ['',[Validators.required]],
    //   lastName: ['',[Validators.required]],
    //   children: this.childForms
    // });
  }

  ngOnInit(): void {
    this.childForms = this.formBuilder.array([]);

    this.baseForm.addControl('firstName', new FormControl('',[]));
    this.baseForm.addControl('lastName', new FormControl('',[]));
    this.baseForm.addControl('children', this.childForms);
  }

  addLesson() {
    this.childForms?.push(this.formBuilder.group({}));
  }
}
