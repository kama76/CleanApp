import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { AuthGuard } from '../shared/auth-guard.service';
import { AppComponent } from  '../app.component';
import { CleanListComponent } from '../clean-list/clean-list.component';

const appRoutes: Routes = [
    { path: '', component:CleanListComponent ,canActivate :[AuthGuard]},
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo:''}
];

export const routing = RouterModule.forRoot(appRoutes);