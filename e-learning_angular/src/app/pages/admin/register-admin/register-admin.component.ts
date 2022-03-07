import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { DataService } from 'src/app/providers/services/data.service'

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.css']
})
export class RegisterAdminComponent implements OnInit {
  registerAdmin: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]),
    email: new FormControl('', [Validators.required, Validators.email])
  })
  get name () {
    return this.registerAdmin.get('name')
  }
  get email () {
    return this.registerAdmin.get('email')
  }
  get password () {
    return this.registerAdmin.get('password')
  }

  constructor (private _admin: DataService) {_admin.flag=false}

  ngOnInit (): void {}

  isSubmitted = false

  handleRegister () {
    this.isSubmitted = true
    if (this.registerAdmin.valid) {
      this._admin
        .postAdmin(this.registerAdmin.value)
        .subscribe(result => console.log(result))
      this.registerAdmin.reset()
      this.isSubmitted = false
    }
  }
}
