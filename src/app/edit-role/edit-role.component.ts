import { MenuService } from '../services/menu.service';
import { Router } from '@angular/router';
import { RoleService } from '../services/role.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Menus } from '../models/menus';
import { Roles } from '../models/roles';

@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.css']
})
export class EditRoleComponent implements OnInit {

  id:string;
  role:Roles;
  menu:Menus[];
    constructor(private route: ActivatedRoute, private router:Router,private roleSrrvice: RoleService,private menuService: MenuService) {
      this.role=new Roles;
    }

    ngOnInit(): void {
      this.menuService.getAllMenu().subscribe((data) => {
        console.log(data);
        this.menu = data;
      });

      this.id = this.route.snapshot.params['id'];
      console.log(this.id);
      this.roleSrrvice.getRoleById(this.id).subscribe((data) => {
        console.log(data);
        this.role = data;
      });
    }
  onSubmit(){
    this.role.menus = this.menu.filter(r=>r.isCheck);
    this.roleSrrvice.saveRole(this.role).subscribe(
      (data)=>{
        console.log('user da duoc update: ',data);
        this.router.navigate(['/RoleManagement']);
      }
    );
  }

  }
