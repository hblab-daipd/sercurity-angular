import { MenuService } from './../services/menu.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Menus } from './../models/menus';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.css']
})
export class EditMenuComponent implements OnInit {

  id:string;
  menu:Menus;
    constructor(private route: ActivatedRoute, private router:Router,private menuService: MenuService) {
      this.menu=new Menus;
    }

    ngOnInit(): void {

      this.id = this.route.snapshot.params['id'];
      console.log(this.id);
      this.menuService.getmenuById(this.id).subscribe((data) => {
        console.log(data);
        this.menu = data;
      });
    }
  onSubmit(){
    this.menuService.saveMenu(this.menu).subscribe(
      (data)=>{
        console.log('user da duoc update: ',data);
        this.router.navigate(['/MenuManagement']);
      }
    );
  }

  }
