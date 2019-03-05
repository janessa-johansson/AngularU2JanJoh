import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import { EditUsersComponent } from './edit-users/edit-users.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SingleuserComponent } from './singleuser/singleuser.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersListComponent,
    UserListItemComponent,
    EditUsersComponent,
    LoginComponent,
    PageNotFoundComponent,
    SingleuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
