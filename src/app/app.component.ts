import { Component  } from '@angular/core';
import { LoginService } from './shared/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoginService]
})
export class AppComponent {
  errorMessage: string;
  title: string = 'Reinigungsliste';
  username: string;
  constructor (private loginService : LoginService){
  }
  
  ngOnInit() {
    
  }


  private logout(): void{
    this.loginService.logout();
  }

  logoutbtnvisible(): boolean{
    return window.location.pathname !== '/login';
  }
}
