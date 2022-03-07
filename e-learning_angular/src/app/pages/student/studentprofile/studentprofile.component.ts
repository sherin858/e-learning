import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Route, Router } from '@angular/router'
import { DataService } from 'src/app/providers/services/data.service'
@Component({
  selector: 'app-studentprofile',
  templateUrl: './studentprofile.component.html',
  styleUrls: ['./studentprofile.component.css']
})
export class StudentprofileComponent implements OnInit {
  constructor (
    private _auth: DataService,
    private _data: ActivatedRoute,
    private router: Router
  ) {}
  msg = ''
  user: any = {}
  ngOnInit (): void {
    this.getUserData()
  }
  // id = this._data.snapshot.params['id']
  getUserData () {
    this._auth.postStudentProfile(this._data.snapshot.params['id']).subscribe(
      res => {
        console.log(res)
        // this.user = res.data
        this.user.email = res.data.email
        this.user.id = res.data._id
        this.user.subjects = res.data.subjects
        this.user.name = res.data.name
      },
      e => {
        this.router.navigateByUrl('/login')
      }
    )
  }

  handleEdit () {
    this.router.navigateByUrl('student/edit/8')
  }
  handleCourses () {
    this.router.navigateByUrl('student/mycourses/8')
  }
}
