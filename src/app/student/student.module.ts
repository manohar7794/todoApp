import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student.component';
import { Route, RouterModule } from '@angular/router';
import { AllStudentsComponent } from './all-students/all-students.component';
const routes: Route[] = [
  {
    path: '',
    component: StudentComponent
  },
  {
    path: 'all-students',
    component: AllStudentsComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StudentComponent]
})
export class StudentModule { }
