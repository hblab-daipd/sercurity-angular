import { RoleService } from './../services/role.service';
import { UserService } from './../services/user.service';

import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";
import { User } from '../models/user';
import { Roles } from '../models/roles';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  constructor(
    private userService: UserService,
    private roleService: RoleService,
    private router: Router
  ) {}
  user: User;
  roles: Roles[];
  ngOnInit(): void {
    this.user = new User();
    this.roleService.getAllRole().subscribe(
      (data)=>{
        this.roles = data;
      }
    );
  }

  onSubmit(){
    this.user.roles = this.roles.filter(r=>r.isCheck);
    this.user.roles.forEach(function (value) {
      console.log(value.id);
    });
    this.userService.saveUser(this.user).subscribe(
      (data)=>{
        console.log('user da duoc update: ',data);
        this.router.navigate(['/UserManagement']);
      }
    );

  }
}

