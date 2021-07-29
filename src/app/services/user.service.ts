import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {

   }

   baseUrl:string   = "http://localhost:8080/";

   login(User):Observable<any>{
    return this.http.post(this.baseUrl+"auth/signin",User,{responseType: 'text'});
   }

   getAllUser():Observable<any>{
     return this.http.get(this.baseUrl+"user/getAllUser");
   }

   getListUser():Observable<any>{
     return this.http.get(this.baseUrl+"user");
   }
   getUserById(id:String):Observable<User>{
     return this.http.get<User>(this.baseUrl+"user/getUserById/"+id);
   }

   updateUser(user:User):Observable<User>{
     return this.http.put<User>(this.baseUrl+"user/update",user);
   }

   saveUser(user:User){

     return this.http.post<User>(this.baseUrl+"user/add",user);
   }
getUserLogin(){
  return this.http.get<User>(this.baseUrl+"user/getUserLogin");

}
   deleteUser(id:String):Observable<any>{
     return this.http.delete(this.baseUrl+"user/delete/"+id);
   }
   getMenu():Observable<any>{
     return this.http.get(this.baseUrl+"user/getMenu")
   }
   getListByUsername(username:String):Observable<any>{
    return this.http.get(this.baseUrl+"user/getUserByUsername/"+username)
   }
}
