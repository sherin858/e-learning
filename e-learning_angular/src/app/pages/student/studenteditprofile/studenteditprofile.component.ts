import { NgForm } from '@angular/forms'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { DataService } from 'src/app/providers/services/data.service'

@Component({
  selector: 'app-studenteditprofile',
  templateUrl: './studenteditprofile.component.html',
  styleUrls: ['./studenteditprofile.component.css']
})
export class StudenteditprofileComponent implements OnInit {
  constructor (
    private _auth: DataService,
    private _data: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit (): void {}
  user: any = {
    email: '',
    name: '',
    subjects: '',
    id: ''
  }

  getUserData () {
    this._auth
      .postStudentProfile(this._data.snapshot.params['id'])
      .subscribe(res => {
        this.user.email = res.data.email
        this.user.id = res.data._id
        this.user.subjects = res.data.subjects
        this.user.name = res.data.name
      })
  }
  handleSubmit (EditForm: NgForm) {
    this._auth
      .postEditStudent(this._data.snapshot.params['id'], EditForm.value)
      .subscribe(
        res => (this.user = res.data),
        e => console.log(e),
        () => {
          this.router
            .navigateByUrl(
              `student/profile/${this._data.snapshot.params['id']}`
            )
            .then(() => {
              window.location.reload()
            })
        }
      )
  }
}
