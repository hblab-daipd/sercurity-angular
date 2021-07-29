import { User } from './../models/user';

import { UserService } from './../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
user: User[];
userr:User;
userLogin:User;
  constructor(private route: ActivatedRoute,private userService: UserService, private router:Router) { this.userr=new User();}

  ngOnInit(): void {
    this.userService.getAllUser().subscribe((data) => {

      this.user = data;
    });
  }
editUser(id:String):void{
  this.router.navigate(['editUser',id]);
}
deleteUser(id:String):void{
  this.userService.deleteUser(id).subscribe(
    data =>{console.log(data);
      this.userService.getAllUser().subscribe(
        data =>{
          this.user=data;
        }
        );
    }
    )
}
addUser():void{
  this.router.navigate(["/addUser"]);
}
search(username:String){
  this.router.navigate(['searchUser',username]);
}
}
