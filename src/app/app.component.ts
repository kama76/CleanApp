import { Component } from '@angular/core';
//import { CleaningDataService } from './shared/cleaning-data.service';
import { LoginService } from './shared/login.service';
//import './shared/rxjs-operators';

//import '.shared/rxjs-operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoginService]
})
export class AppComponent {
  errorMessage: string;
  title = 'Reinigungsliste';
  putzliste : string;
  constructor (private loginService : LoginService){}
   ngOnInit() { }
  // GetCleaningList(){
  //   this.putzliste = "Alles schmutzig!!";
  //   this.cleaningDataService.getCleanList()
  //   .subscribe()
  // }

  private logout(): void{
    this.loginService.logout();
  }
}
