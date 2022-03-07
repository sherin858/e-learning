import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/providers/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(public _data: DataService) {}
  data: any = this._data.adminData;

  ngOnInit(): void {}
}
