import { Component, OnInit, trigger, state, style, animate, transition} from '@angular/core';
import { LoginService } from '../shared/login.service';
import { Router } from '@angular/router';
import { User } from '../shared/user';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('logInOut', [
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(100)
      ]),
      transition('animateLogout => animateLogin', [
        animate(100, style({transform: 'translateX(100%)'}))
      ])
    ])
  ],
  providers: [LoginService]
})
//To do: Validierung des Inputs
export class LoginComponent implements OnInit {
  user: User;
  errorMessage: string;
  stateExpression: string;
  constructor(private loginService: LoginService, private router: Router ) { }

  ngOnInit() {
    this.user = new User(null, null);
    this.loginService.logout();
    this.stateExpression = "animateLogout";
  }

  loginUser(username :string, password:string){
    this.stateExpression ="animateLogin";
    console.log("Der Name des Users::"+username, "Das Passwort des Users::"+password);
    this.loginService.userlogin(username, password)
    //.subscribe(response => this.user = response)
    //.subscribe(loginData => console.log("Hello  "+ loginData),
    .subscribe(
      loginData => {
        //To do: Timeout entfernen ?? 
        setTimeout(() => {
              this.router.navigate(['/']);
        }, 100);

        for (const key of Object.keys(loginData)) {
            const val = loginData[key];
            if(key==="Username"){
              return this.user.Username = loginData[key];
              //console.log(this.user.Username);
            }else{
              this.user.Username = "test";
            }
              //console.log("Der Schlüssel...."+key)
        }
      },
      error => {
        this.errorMessage = <any>error;
        error => console.log("Fehker:" + error);
      });
  }

}
