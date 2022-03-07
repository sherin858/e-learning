import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/providers/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
@Component({
  selector: 'app-teacherprofile',
  templateUrl: './teacherprofile.component.html',
  styleUrls: ['./teacherprofile.component.css']
})
export class TeacherprofileComponent implements OnInit {

  constructor(private service:DataService,private _route:ActivatedRoute,private _user: AppComponent) { }
  isLoaded=false
  teacher:any={}
  subjects:any[]=[]
  ngOnInit(): void {
    console.log(this._user.user)
    this.service.getTeacher(this._route.snapshot.paramMap.get("id")).subscribe(
      res=>{this.teacher=res.data;}
      )
    this.service.getSubjects(this._route.snapshot.paramMap.get("id")).subscribe(
      res=>{this.subjects=res;},
      e=>{},
      ()=>{this.isLoaded=true}
    )
  }


}
