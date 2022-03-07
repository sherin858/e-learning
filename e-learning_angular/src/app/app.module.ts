import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NavbarComponent } from './shared/navbar/navbar.component'
import { FooterComponent } from './shared/footer/footer.component'

import { RegisterComponent } from './pages/homepages/register/register.component'

import { Error404Component } from './pages/error404/error404.component'

import { ReactiveFormsModule } from '@angular/forms'
import { InterceptorInterceptor } from './providers/interceptor.interceptor'

import { LoginComponent } from './pages/homepages/login/login.component'

import { RegisterAdminComponent } from './pages/admin/register-admin/register-admin.component'
import { AdminloginComponent } from './pages/admin/adminlogin/adminlogin.component'
import { ActivationComponent } from './pages/homepages/activation/activation.component'
import { ResetpasswordComponent } from './pages/homepages/resetpassword/resetpassword.component'
import { ResetpasswordemailComponent } from './pages/homepages/resetpasswordemail/resetpasswordemail.component'
import { AddvideoComponent } from './pages/teacher/addvideo/addvideo.component'

import { TeacheredittprofileComponent } from './pages/teacher/teacheredittprofile/teacheredittprofile.component'
import { TeacheraddexamComponent } from './pages/teacher/teacheraddexam/teacheraddexam.component'
import { TeacherprofileComponent } from './pages/teacher/teacherprofile/teacherprofile.component'
import { TeachercoursesComponent } from './pages/teacher/teachercourses/teachercourses.component'

import { TeachersinglecourseComponent } from './pages/teacher/teachersinglecourse/teachersinglecourse.component'
import { HomeComponent } from './pages/homepages/home/home.component'
import { AdminshowstudentsComponent } from './pages/admin/adminshowstudents/adminshowstudents.component'
import { AdminshowteachersComponent } from './pages/admin/adminshowteachers/adminshowteachers.component'
import { StudenteditprofileComponent } from './pages/student/studenteditprofile/studenteditprofile.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AdminshowteachersComponent,
    RegisterComponent,
    LoginComponent,
    Error404Component,
    StudenteditprofileComponent,
    RegisterAdminComponent,
    AdminloginComponent,
    ActivationComponent,
    ResetpasswordComponent,
    ResetpasswordemailComponent,
    AddvideoComponent,

    TeacheredittprofileComponent,
    TeacheraddexamComponent,
    TeacherprofileComponent,
    TeachercoursesComponent,
    AdminshowteachersComponent,
    TeachersinglecourseComponent,
    HomeComponent,
    AdminshowstudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
