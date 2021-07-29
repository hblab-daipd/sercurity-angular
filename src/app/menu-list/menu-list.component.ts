import { MenuService } from './../services/menu.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Menus } from './../models/menus';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  menu: Menus[];
  constructor(private route: ActivatedRoute,private menuService:MenuService, private router:Router) { }

  ngOnInit(): void {
    this.menuService.getAllMenu().subscribe((data) => {

      this.menu = data;
    });
  }
editMenu(id:String):void{
  this.router.navigate(['editMenu',id]);
}
deleteMenu(id:String):void{
  this.menuService.deleteMenu(id).subscribe(
    data =>{console.log(data);
      this.menuService.getAllMenu().subscribe(
        data =>{
          this.menu=data;
        }
        );
    }
    )
}
addMenu():void{
  this.router.navigate(["/addMenu"]);
}
}

