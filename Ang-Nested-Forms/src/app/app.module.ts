import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyStudentFormComponent } from './my-student-form/my-student-form.component';
import { MyLessonsFormComponent } from './my-lessons-form/my-lessons-form.component';
import CreateStudentsFormComponent from './create-students-form/create-students-form.component';

@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MyStudentFormComponent,
        CreateStudentsFormComponent
    ]
})
export class AppModule { }
