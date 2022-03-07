import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  x: string = ''
  constructor () {}
  type () {
    let token = localStorage.getItem('preToken')
    if (token?.startsWith('S')) this.x = 'student'
    if (token?.startsWith('T')) this.x = 'teacher'
    if (token?.startsWith('A')) this.x = 'admin'
  }
  ngOnInit (): void {}
}
