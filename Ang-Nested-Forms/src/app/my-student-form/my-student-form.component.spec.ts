import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyStudentFormComponent } from './my-student-form.component';

describe('MyStudentFormComponent', () => {
  let component: MyStudentFormComponent;
  let fixture: ComponentFixture<MyStudentFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyStudentFormComponent]
    });
    fixture = TestBed.createComponent(MyStudentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
