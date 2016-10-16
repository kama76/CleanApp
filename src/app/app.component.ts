import { Component } from '@angular/core';
import { CleaningDataService } from './shared/cleaning-data.service';
import { LoginService } from './shared/login.service';
import { User } from './shared/user';

//import '.shared/rxjs-operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ CleaningDataService, LoginService ]
})
export class AppComponent {
  title = 'Putzliste';
  putzliste : string;
  user: User;
  constructor (private loginService: LoginService,private cleaningDataService : CleaningDataService){}
   ngOnInit() { }
  GetCleaningList(){
    this.putzliste = "Alles schmutzig!!";
    this.cleaningDataService.getCleanList()
    .subscribe()
  }
  loginUser(){
    this.loginService.userlogin()
    .subscribe(user => this.user.Username = user.Username)
  }
}
