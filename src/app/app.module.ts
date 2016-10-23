import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { routing } from './shared/app.routing';
import { CleanListComponent } from './clean-list/clean-list.component';
import { LoginComponent } from './login/login.component';
import {  LoginService } from './shared/login.service';
import { AuthGuard } from './shared/auth-guard.service';
import { CleaningDataService } from './shared/cleaning-data.service';

@NgModule({
  declarations: [
    AppComponent,
    CleanListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    AuthGuard,
    LoginService,
    CleaningDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
