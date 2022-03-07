import { AdminshowstudentsComponent } from './pages/admin/adminshowstudents/adminshowstudents.component'
import { RegisterAdminComponent } from './pages/admin/register-admin/register-admin.component'

import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { Error404Component } from './pages/error404/error404.component'

import { RegisterComponent } from './pages/homepages/register/register.component'
import { LoginComponent } from './pages/homepages/login/login.component'

import { AdminloginComponent } from './pages/admin/adminlogin/adminlogin.component'
import { StudenteditprofileComponent } from './pages/student/studenteditprofile/studenteditprofile.component'
import { StudentprofileComponent } from './pages/student/studentprofile/studentprofile.component'
import { StudentcoursesComponent } from './pages/student/studentcourses/studentcourses.component'
import { AddvideoComponent } from './pages/teacher/addvideo/addvideo.component'
import { TeacherprofileComponent } from './pages/teacher/teacherprofile/teacherprofile.component'
import { TeachercoursesComponent } from './pages/teacher/teachercourses/teachercourses.component'
import { TeachersinglecourseComponent } from './pages/teacher/teachersinglecourse/teachersinglecourse.component'
import { TeacheredittprofileComponent } from './pages/teacher/teacheredittprofile/teacheredittprofile.component'
import { TeacheraddexamComponent } from './pages/teacher/teacheraddexam/teacheraddexam.component'
import { AdminaddsubjectComponent } from './pages/admin/adminaddsubject/adminaddsubject.component'
import { AdmineditprofileComponent } from './pages/admin/admineditprofile/admineditprofile.component'
import { AdminprofileComponent } from './pages/admin/adminprofile/adminprofile.component'
import { AdminshowsingleteacherComponent } from './pages/admin/adminshowsingleteacher/adminshowsingleteacher.component'
import { AdminshowteachersComponent } from './pages/admin/adminshowteachers/adminshowteachers.component'
import { HomeComponent } from './pages/homepages/home/home.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'student',
    children: [
      { path: 'edit/:id', component: StudenteditprofileComponent },
      { path: 'profile/:id', component: StudentprofileComponent },
      { path: 'mycourses/:id', component: StudentcoursesComponent }
    ]
  },
  {
    path: 'teacher',
    children: [
      { path: 'postVideo/:id', component: AddvideoComponent },
      { path: 'showTeacherProfile/:id', component: TeacherprofileComponent },
      { path: 'subjects/:teacherId', component: TeachercoursesComponent },
      { path: 'single/:subjectId', component: TeachersinglecourseComponent },
      {
        path: 'editTeacherProfile/:id',
        component: TeacheredittprofileComponent
      },
      { path: 'addExam/:subId', component: TeacheraddexamComponent }
    ]
  },
  {
    path: 'admin',
    children: [
      { path: 'addsubject', component: AdminaddsubjectComponent },
      { path: 'editprofile', component: AdmineditprofileComponent },
      { path: 'login', component: AdminloginComponent },
      { path: 'profile', component: AdminprofileComponent },
      {
        path: 'register',
        component: RegisterAdminComponent
      },
      { path: 'showsingleteacher', component: AdminshowsingleteacherComponent },
      { path: 'showstudents', component: AdminshowstudentsComponent },
      { path: 'showteachers', component: AdminshowteachersComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
