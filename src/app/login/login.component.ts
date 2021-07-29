import { Jwtresponse } from './../models/jwtresponse';
import { User } from './../models/user';
import { UserService } from './../services/user.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  errorMessage: string;
  jwt: String;
  username:String;
errMesage:String;
  @Output() loginSubmit = new EventEmitter();
  constructor(private route: ActivatedRoute,private userService:UserService, private router: Router) { this.user=new User()}

  ngOnInit(): void {
    if(this.user.username===undefined && this.user.password===undefined){
    this.errMesage = this.route.snapshot.params['errMesage'];
console.log(this.errMesage)
  }}

  onSubmit(){
    if(this.checkForm()){

    this.userService.login(this.user).subscribe(
                  (data)=>{
                    this.storeToken(data);
                    this.jwt=data
                    this.username=this.user.username;
                    this.router.navigate(["/home"]);
                  },
                  (err)=>{
                    console.log(err);
                    this.errorMessage = "login fail";
                  }
                  );}
  }

  checkForm():Boolean{
    if(this.user.username == ""|| this.user.username == undefined || this.user.password == undefined || this.user.password == ""){
      this.errorMessage = "username, password is required";
      return false;
    }
    if(this.user.username !== ""|| this.user.username !== undefined || this.user.password !== undefined || this.user.password !== ""){
      this.errMesage="";

    }
    return true;
  }

  storeToken(token:string):void{
    localStorage.setItem('token',token);
  }

}

