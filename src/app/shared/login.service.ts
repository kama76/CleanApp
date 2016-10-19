import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../shared/user';
import '../shared/rxjs-operators';


@Injectable()
export class LoginService {
  constructor(private http : Http) { 
  }
  private loginURL = 'http://localhost:8080/login';
  userlogin(UserNameLogin, PassWordLogin):Observable<User>{ 
    return this.http.post(this.loginURL, {username : UserNameLogin, password : PassWordLogin})
    .map(this.loginData)  
    .catch(this.handleError)
  }

  private loginData(res: Response){
    console.log("die Response(loginData): "+res);
    console.log(res.status);
    //To do: Login richtig auslesen vom Response!!!!!
    if(res.status == 200){
      console.log("Der user ist eingeloggt!!")
      localStorage.setItem('currentUser', 'loggedIn');
    }
    let body = res.json();
    console.log("Der Body:" +body[0])
    let user = new User(body[0].username, "")
    console.log("Der user: "+ user.Username);
    //let test = body.json();
    //return body[0] || {};
    return user;
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
