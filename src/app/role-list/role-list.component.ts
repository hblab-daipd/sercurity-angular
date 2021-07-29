import { RoleService } from './../services/role.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from './../models/user';
import { Component, OnInit } from '@angular/core';
import { Roles } from '../models/roles';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {
  role: Roles[];
  constructor(private route: ActivatedRoute,private roleService: RoleService, private router:Router) { }

  ngOnInit(): void {
    this.roleService.getAllRole().subscribe((data) => {

      this.role = data;
    });
  }
editRole(id:String):void{
  this.router.navigate(['editRole',id]);
}
deleteRole(id:String):void{
  this.roleService.deleteRole(id).subscribe(
    data =>{console.log(data);
      this.roleService.getAllRole().subscribe(
        data =>{
          this.role=data;
        }
        );
    }
    )
}
addRole():void{
  this.router.navigate(["/addRole"]);
}
}
