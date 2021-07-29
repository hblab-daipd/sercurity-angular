import { Roles } from './../models/roles';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http:HttpClient) {

   }

   baseUrl:string = "http://localhost:8080/";



   getAllRole():Observable<any>{
     return this.http.get(this.baseUrl+"role/getAll");
   }

   getListURole():Observable<any>{
     return this.http.get(this.baseUrl+"user");
   }
   getRoleById(id:String):Observable<Roles>{
     return this.http.get<Roles>(this.baseUrl+"role/getOne/"+id);
   }
   saveRole(role:Roles):Observable<Roles>{
     return this.http.post<Roles>(this.baseUrl+"role/addRole",role);
   }
   updateRole(role:Roles):Observable<Roles>{
    return this.http.put<Roles>(this.baseUrl+"role/update",role);
  }
   deleteRole(id:String):Observable<any>{
     return this.http.delete(this.baseUrl+"role/deleteRole/"+id);
   }
   getMenu():Observable<any>{
     return this.http.get(this.baseUrl+"user/getMenu")
   }
}
