import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/providers/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-teachercourses',
  templateUrl: './teachercourses.component.html',
  styleUrls: ['./teachercourses.component.css']
})
export class TeachercoursesComponent implements OnInit {

  constructor(private _service:DataService,private _route:ActivatedRoute,private _sanitizer:DomSanitizer ) {}


iframLink(url:string):any{
  return this._sanitizer.bypassSecurityTrustResourceUrl(url)
}


  courses:any[]=[]
  teacher:any={}
  middledata:any[]=[]
  isLoaded=false
  ngOnInit(): void {

    this._service.getTeacher(this._route.snapshot.paramMap.get("teacherId")).subscribe(
      res=>{this.teacher=res.data},
      e=>{},
      ()=>{this._service.getAllTeacherCourses(this.teacher._id).subscribe(
        res=> {this.courses= res;},
        e=>{},
        ()=>{this.isLoaded=true}
      )}
      );
  }

}
