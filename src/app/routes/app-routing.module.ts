import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from '../users/users.component';
import { ListUsersComponent } from '../users/list-users/list-users.component';
import { AuthComponent } from '../auth/auth/auth.component';
import { ProfileComponent } from '../profile/profile/profile.component';
import { HomeComponent } from '../home/home/home.component';

const routes: Routes = [
  //Home
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  //USers
  { path: 'register', component: UsersComponent },
  { path: 'list', component: ListUsersComponent },

  //Login
  { path: 'auth', component: AuthComponent },

  //Profile
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
