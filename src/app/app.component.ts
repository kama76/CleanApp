import { Component } from '@angular/core';
import { CleaningDataService } from './shared/cleaning-data.service';
import { LoginService } from './shared/login.service';
import { User } from './shared/user';
import './shared/rxjs-operators';

//import '.shared/rxjs-operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ CleaningDataService, LoginService ]
})
export class AppComponent {
  errorMessage: string;
  title = 'Reinigunsliste';
  putzliste : string;
  user: User;
  constructor (private loginService: LoginService,private cleaningDataService : CleaningDataService){}
   ngOnInit() { this.user = new User(null, null);}
  GetCleaningList(){
    this.putzliste = "Alles schmutzig!!";
    this.cleaningDataService.getCleanList()
    .subscribe()
  }
   loginUser(username :string, password:string){
    console.log("Der Name des Users::"+username, "Das Passwort des Users::"+password);
    this.loginService.userlogin()
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
                //error => this.errorMessage = <any>error) ;
                //error => console.log("Fehker:" + error)) ;
  }
}
