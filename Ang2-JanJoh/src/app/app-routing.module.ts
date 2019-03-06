import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import { LoginComponent } from './login/login.component';
import { SingleuserComponent } from './singleuser/singleuser.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'user/:id', component: SingleuserComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
