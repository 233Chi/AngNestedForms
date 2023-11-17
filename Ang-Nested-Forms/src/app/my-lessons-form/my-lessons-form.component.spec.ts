import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLessonsFormComponent } from './my-lessons-form.component';

describe('MyLessonsFormComponent', () => {
  let component: MyLessonsFormComponent;
  let fixture: ComponentFixture<MyLessonsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyLessonsFormComponent]
    });
    fixture = TestBed.createComponent(MyLessonsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
