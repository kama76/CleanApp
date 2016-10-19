import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/login.service';
import { User } from '../shared/user';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
//To do: Validierung des Inputs
export class LoginComponent implements OnInit {
  user: User;
  errorMessage: string;
  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.user = new User(null, null);
  }

  loginUser(username :string, password:string){
    console.log("Der Name des Users::"+username, "Das Passwort des Users::"+password);
    this.loginService.userlogin(username, password)
    //.subscribe(response => this.user = response)
    //.subscribe(loginData => console.log("Hello  "+ loginData),
    .subscribe(loginData => {for (const key of Object.keys(loginData)) {
                                    const val = loginData[key];
                                    console.log(val);
                                    if(key==="Username"){
                                      console.log("yeaaaahhh");
                                      return this.user.Username = loginData[key];
                                      //console.log(this.user.Username);
                                    }else{this.user.Username = "test"}
                                    console.log("Der Schlüssel...."+key)
                                    console.log("haaaaalllooo" +val);
    // use val
    }})
                error => this.errorMessage = <any>error;
                error => console.log("Fehker:" + error);
  }

}
