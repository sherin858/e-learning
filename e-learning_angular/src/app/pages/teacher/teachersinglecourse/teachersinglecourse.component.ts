import { Component, OnInit ,Input} from '@angular/core';
import { DataService } from 'src/app/providers/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { AppComponent } from 'src/app/app.component';
@Component({
  selector: 'app-teachersinglecourse',
  templateUrl: './teachersinglecourse.component.html',
  styleUrls: ['./teachersinglecourse.component.css']
})
export class TeachersinglecourseComponent implements OnInit {

  constructor(private _service:DataService,private _route:ActivatedRoute,private _sanitizer:DomSanitizer, private _user: AppComponent) { }
  user=this._user.user;
  iframLink(url:string):any{
    return this._sanitizer.bypassSecurityTrustResourceUrl(url)
  }
  course:any={}
  isLoaded=false
  ngOnInit(): void {
    console.log(this._user.user)
    this._service.getSubject(this._route.snapshot.paramMap.get("subjectId")).subscribe(
      res=>{this.course=res},
      e=>{},
      ()=>{this.isLoaded=true;})
    }

}
