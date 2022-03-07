import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { DataService } from 'src/app/providers/services/data.service'
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-teacheredittprofile',
  templateUrl: './teacheredittprofile.component.html',
  styleUrls: ['./teacheredittprofile.component.css']
})

export class TeacheredittprofileComponent implements OnInit {
  editTeacherProfile: FormGroup = new FormGroup({
    name: new FormControl("", ),
    email: new FormControl("", [Validators.email])
  })
  get name () {
    return this.editTeacherProfile.get('name')
  }
  get email () {
    return this.editTeacherProfile.get('email')
  }

  isSubmitted=false
data:any={}
teacher:any={}
  constructor(private _service:DataService,private _route:ActivatedRoute,private _router:Router) { }

  ngOnInit(): void {
    this._service.getTeacher(this._route.snapshot.paramMap.get("id")).subscribe(
      res=>{this.teacher=res.data}
      )
  }
editProfile(editTeacherProfile:FormGroup){
this.isSubmitted=true
if(this.editTeacherProfile.valid){
  const dirtyValues:any= {};
  Object.keys(this.editTeacherProfile.value).forEach(v => {
    const currentControl = this.editTeacherProfile.value[v];
    if (currentControl!='') {
      dirtyValues[v] = currentControl;
      this.teacher[v]=currentControl
    }
  })
  this._service.postEditTeacherProfile(dirtyValues,this._route.snapshot.paramMap.get("id")).subscribe(
    res=>{console.log(res)},
    e=>{},
    ()=>{this._router.navigate(['/teacher/showTeacherProfile',this.teacher._id])}
    );
    this.isSubmitted = false
}
}
}
