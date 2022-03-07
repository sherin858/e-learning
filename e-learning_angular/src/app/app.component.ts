import { Component } from '@angular/core';
import { DataService } from './providers/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  isLoaded=false
  public user:any={}
  constructor(public _data: DataService) {
    this._data.getUser().subscribe(
      res=>{console.log(res);this.user=res;this.isLoaded=true}
    )
  }

}
