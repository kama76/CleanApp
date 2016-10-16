import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {
  constructor(private http : Http) { }
  private loginURL = 'http://localhost:8080/login';
  userlogin():Observable<any>{
    return this.http.get(this.loginURL)
  }
  private loginData(res: Response){
    let body = res.json();
    return body.data || {};
  }
}
