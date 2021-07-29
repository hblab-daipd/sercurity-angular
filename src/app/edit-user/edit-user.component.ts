import { RoleService } from './../services/role.service';
import { UserService } from './../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from './../models/user';
import { Component, OnInit } from '@angular/core';
import { Roles } from '../models/roles';
import { Observable } from "rxjs";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
user: User;
users:User[];
id:string;
role:Roles[];
error: String;
  constructor(private route: ActivatedRoute,private userService: UserService, private router:Router,private roleSrrvice: RoleService) {
    this.user=new User;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.userService.getUserById(this.id).subscribe((data) => {
      console.log(data);
      this.user = data;
      this.roleSrrvice.getAllRole().subscribe((data) => {
        console.log(data);
        this.role = data;
        this.checkRoleInUser(this.user);
      });
    });

  }
onSubmit(){
  console.log(this.validate());
  if(this.validate()){
  this.user.roles = this.role.filter(r=>r.isCheck);
  this.userService.updateUser(this.user).subscribe(
    (data)=>{
      console.log('user da duoc update: ',data);
      this.router.navigate(['/UserManagement']);
    }
  );}
};
validate(): boolean{
 this.userService.getAllUser().subscribe((data) => {
  this.users = data;
  console.log(data)
  this.users.forEach(function (value) {

});
});
return true;
}
checkRoleInUser(userr:User):void{
  this.role.forEach(function(role1){
    userr.roles.forEach(function(role2) {
      if(role2.id===role1.id){
       role1.isCheck=true;
       console.log(role1.isCheck);
      }
    });
  })


}
}
