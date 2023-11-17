import { ComponentFixture, TestBed } from '@angular/core/testing';

import CreateStudentsFormComponent from './create-students-form.component';

describe('CreateStudentsFormComponent', () => {
  let component: CreateStudentsFormComponent;
  let fixture: ComponentFixture<CreateStudentsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateStudentsFormComponent]
    });
    fixture = TestBed.createComponent(CreateStudentsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
