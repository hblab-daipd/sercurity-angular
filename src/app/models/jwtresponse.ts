
import { Menus } from './menus';
export class Jwtresponse {
  token: String;
  username: String;

  menus: Menus[];
  constructor(token:string,username: String,menus: Menus[]) {
    this.token=token;
    this.username=username;
    this.menus=menus;
 }
}
