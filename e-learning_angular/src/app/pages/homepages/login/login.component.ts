import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, NgForm } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { DataService } from 'src/app/providers/services/data.service'
import { AuthService } from 'src/app/providers/services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = { email: '', password: '' }
  constructor (private _auth: DataService, private router: Router) {
    _auth.flag = false
  }
  msg = ''
  id: string = ''

  handleLogin (LoginForm: NgForm) {
    if (LoginForm.valid) {
      this._auth.postLogin(LoginForm.value).subscribe(
        res => {
          localStorage.setItem('preToken', res.data.token)
          this.id = res.data._id
          console.log(res.data)
        },
        e => {
          this.msg = 'Invalid Data'
        },
        () => {
          console.log(this.id)
          this.msg = ''
          LoginForm.resetForm()
          this.router.navigateByUrl(`/student/profile/${this.id}`)
          this._auth.flag = true
        }
      )
    }
  }

  ngOnInit (): void {}
}
