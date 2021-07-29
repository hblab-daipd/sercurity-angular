import { MenuService } from './../services/menu.service';
import { Router } from '@angular/router';
import { RoleService } from './../services/role.service';
import { Roles } from './../models/roles';
import { User } from './../models/user';
import { Component, OnInit } from '@angular/core';
import { Menus } from '../models/menus';

@Component({
  selector: 'app-role-add',
  templateUrl: './role-add.component.html',
  styleUrls: ['./role-add.component.css']
})
export class RoleAddComponent implements OnInit {

constructor(
  private roleService: RoleService,
  private router: Router,
  private menuService: MenuService

) {this.role=new Roles;}
user: User;
role: Roles;
menu:Menus[];
ngOnInit(): void {
  this.user = new User();
  this.menuService.getAllMenu().subscribe(
    (data)=>{
      this.menu = data;
    }
  );
}

onSubmit(){
  this.role.menus = this.menu.filter(r=>r.isCheck);
  this.role.menus.forEach(function (value) {
    console.log(value.id);
  });
  this.roleService.saveRole(this.role).subscribe(
    (data)=>{
      console.log('role da duoc them: ');
      this.router.navigate(['/RoleManagement']);
    }
  );

}
}
