import { Roles } from './../models/roles';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Menus } from '../models/menus';



@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http:HttpClient) {

   }

   baseUrl:string = "http://localhost:8080/";



   getAllMenu():Observable<any>{
     return this.http.get(this.baseUrl+"menu/getAll");
   }

   getListURole():Observable<any>{
     return this.http.get(this.baseUrl+"user");
   }
   getmenuById(id:String):Observable<Menus>{
     return this.http.get<Menus>(this.baseUrl+"menu/getOne/"+id);
   }
   saveMenu(menu:Menus):Observable<Menus>{
     return this.http.post<Menus>(this.baseUrl+"menu/addMenu",menu);
   }

   deleteMenu(id:String):Observable<any>{
     return this.http.delete(this.baseUrl+"menu/deleteMenu/"+id);
   }
   getMenu():Observable<any>{
     return this.http.get(this.baseUrl+"menu/getMenu")
   }
}
