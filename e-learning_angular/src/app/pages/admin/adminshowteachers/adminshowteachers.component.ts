import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/providers/services/data.service';

@Component({
  selector: 'app-adminshowteachers',
  templateUrl: './adminshowteachers.component.html',
  styleUrls: ['./adminshowteachers.component.css'],
})
export class AdminshowteachersComponent implements OnInit {
  constructor(private _data: DataService, private router: Router) {}

  allTeachers: any[] = [];

  ngOnInit(): void {
    this._data.getAllTeachers().subscribe(
      (res) => {
        this.allTeachers = res.data;
      },
      (e) => {
        this.router.navigateByUrl('/admin/login');
      },
      () => {}
    );
  }
  link = 'ahmad';
}
