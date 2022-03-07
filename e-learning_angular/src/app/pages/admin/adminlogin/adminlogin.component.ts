import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/providers/services/auth.service';
import { DataService } from 'src/app/providers/services/data.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css'],
})
export class AdminloginComponent implements OnInit {
  constructor(
    private _data: DataService,
    private _auth: AuthService,
    private router: Router
  ) {
    this._data.flag = false;
  }
  msg: string = '';
  ngOnInit(): void {}
  x: Boolean = false;
  user = {
    email: 'admin@admin.com',
    password: '123456',
  };
  handleLogin(login: NgForm) {
    if (login.valid) {
      this._auth.login(this.user).subscribe(
        (res) => {
          localStorage.setItem('preToken', res.data.admin.token);
          this._data.adminData = res.data;
        },
        (e) => {
          this.msg = e.error.data;
        },
        () => {
          this.msg = '';
          this._data.flag = true;
          this.router.navigateByUrl('/');
        }
      );
    }
  }
  onBlur() {
    this.x = true;
  }
}
