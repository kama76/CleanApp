import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../shared/user';
import '../shared/rxjs-operators';
import { Router } from '@angular/router';


@Injectable()
export class LoginService {
  
  private loginURL: string = 'http://localhost:8080/login';
  user: User;
  constructor(private http : Http, private router: Router) { 
  }


  userlogin(UserNameLogin, PassWordLogin):Observable<User>{ 
    return this.http.post(this.loginURL, {username : UserNameLogin, password : PassWordLogin})
    .map(this.loginData)  
    .catch(this.handleError)
  }

  private loginData(res: Response){
    let body = res.json();
    //To do: Login richtig auslesen vom Response!!!!!
    if(res.status == 200){
      let token = body["faketoken"];
      localStorage.setItem('currentUser', token);
    }
    //let test = JSON.stringify(body);
    //debugger;
    //this.user = new User(body["username"], "")
    this.user = new User(body["username"], "");
    //console.log("Der user: "+ user.Username);
    //return body[0] || {};
    console.log("Der User:"+this.user.Username);
    return this.user;
  }

  logout(): void {
    localStorage.removeItem("currentUser");
    //console.log("logout");
    this.router.navigate(['/login']);
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
