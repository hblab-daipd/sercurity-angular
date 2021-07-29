import { MenuService } from './../services/menu.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Menus } from '../models/menus';
import { Roles } from '../models/roles';

@Component({
  selector: 'app-menu-add',
  templateUrl: './menu-add.component.html',
  styleUrls: ['./menu-add.component.css']
})
export class MenuAddComponent implements OnInit {


  constructor(private route: ActivatedRoute,private MenuService:MenuService, private router:Router) { }

  menu:Menus;
  ngOnInit(): void {
    this.menu=new Menus;

  }

  onSubmit(){

    this.MenuService.saveMenu(this.menu).subscribe(
      (data)=>{
        console.log('menu da duoc them: ');
        this.router.navigate(['/MenuManagement']);
      }
    );

  }
  }

