import { UserService } from './../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {
user:User[];
username:String;
  constructor(private route: ActivatedRoute,private userService: UserService, private router:Router) {

  }

  ngOnInit(): void {
    this.username = this.route.snapshot.params['username'];
    console.log(this.username);
    this.userService.getListByUsername(this.username).subscribe((data) => {

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
}
