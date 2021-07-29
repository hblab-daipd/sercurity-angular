import { SearchMenuComponent } from './search-menu/search-menu.component';
import { MenuAddComponent } from './menu-add/menu-add.component';
import { RoleAddComponent } from './role-add/role-add.component';
import { RoleListComponent } from './role-list/role-list.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserAddComponent } from './user-add/user-add.component';
import { EditRoleComponent } from './edit-role/edit-role.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { EditMenuComponent } from './edit-menu/edit-menu.component';
import { SearchUserComponent } from './search-user/search-user.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'', component:LoginComponent},
  // {path:'account', component:AccountComponent},
  { path:'home', component:HomeComponent},
    {path:'UserManagement', component:UserListComponent},
    {path:'RoleManagement', component:RoleListComponent},
    {path:'MenuManagement', component:MenuListComponent},
    {path:'addUser', component:UserAddComponent},
    {path:'addMenu', component:MenuAddComponent},
    {path: 'editUser/:id', component: EditUserComponent},
    {path: 'addRole', component: RoleAddComponent},
    {path: 'editRole/:id', component: EditRoleComponent},
    {path: 'editMenu/:id', component: EditMenuComponent},
    {path: 'searchUser/:username', component: SearchUserComponent},
    {path: 'login/abc', component: SearchMenuComponent},
    {path: 'login/:errMesage', component: LoginComponent}
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
