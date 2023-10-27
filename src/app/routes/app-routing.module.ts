import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from '../users/users.component';
import { ListUsersComponent } from '../users/list-users/list-users.component';
import { AuthComponent } from '../auth/auth/auth.component';

const routes: Routes = [
  //USers
  { path: 'register', component: UsersComponent },
  { path: 'list', component: ListUsersComponent },

  //Login
  { path: 'auth', component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
