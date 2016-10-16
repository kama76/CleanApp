import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../shared/user';
import 'rxjs/add/operator/map';


@Injectable()
export class LoginService {
  constructor(private http : Http) { }
  private loginURL = 'http://localhost:8080/login';

  userlogin():Observable<User>{
    return this.http.get(this.loginURL)
    .map(this.loginData)   
     
  }

  private loginData(res: Response){
    console.log(res);
    let body = res.json();
    console.log(body[0].Username);
    //let test = body.json();
    return body|| {};
  }
}
