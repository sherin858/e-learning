import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public flag: Boolean = true
  public StudentData: any
  public adminData: any;
  constructor (private _http: HttpClient) {}

  login (data: any): Observable<any> {
    return this._http.post(`${environment.URL}/admin/login`, data)

  }
}
