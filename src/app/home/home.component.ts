import { Menus } from './../models/menus';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
user: User;
menu: Menus[];
  constructor(private route: ActivatedRoute,private userService: UserService, private router: Router) {this.user=new User; }

  ngOnInit(): void {
    this.userService.getUserLogin().subscribe((data) => {
      this.user = data;

    });
    this.userService.getMenu().subscribe((data) => {
      console.log(data);
      this.menu = data;
    });

  }
  onSubmit(menuName:String):void{
     this.router.navigate([menuName]);
  }

}
