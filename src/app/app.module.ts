import { RoleService } from './services/role.service';
import { UserService } from './services/user.service';
import { TokenInterceptor } from './a.interceptor';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';
import { MenuAddComponent } from './menu-add/menu-add.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { RoleAddComponent } from './role-add/role-add.component';
import { RoleListComponent } from './role-list/role-list.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditRoleComponent } from './edit-role/edit-role.component';
import { EditMenuComponent } from './edit-menu/edit-menu.component';
import { SearchMenuComponent } from './search-menu/search-menu.component';
import { SearchRoleComponent } from './search-role/search-role.component';
import { SearchUserComponent } from './search-user/search-user.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    RoleListComponent,
    RoleAddComponent,
    MenuListComponent,MenuAddComponent,
    UserAddComponent,
    UserListComponent,
    EditUserComponent,
    EditRoleComponent,
    EditMenuComponent,
    SearchMenuComponent,
    SearchRoleComponent,
    SearchUserComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     FormsModule,
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },UserService, RoleService],
  bootstrap: [AppComponent]
})

export class AppModule {




}
