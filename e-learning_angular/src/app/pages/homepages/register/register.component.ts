import { Component, NgModule, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Observable } from 'rxjs'
import { Register } from 'src/app/interfaces/register'
import { DataService } from 'src/app/providers/services/data.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor (private _register: DataService, private router: Router) {}
  msg = ''
  handleRegister (register: any) {
    if (register.valid) {
      this._register.postRegister(register.value).subscribe(
        res => localStorage.setItem('preToken', res.data),
        e => {
          this.msg = 'Invalid Data'
        },
        () => {
          console.log('y')
          this.msg = ''
          register.resetForm()

          this.router.navigateByUrl(`/`)
          this._register.flag = true
        }
      )
    } else console.log('not valid')
  }

  ngOnInit (): void {}
}
