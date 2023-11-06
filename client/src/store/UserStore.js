import {makeAutoObservable} from 'mobx'
import UserService from '../services/UserService';

export default class UserStore {
  constructor(){
    this._isAuth = false;
    this._user= {};
    makeAutoObservable(this);
  }

  setAuth(bool){
    this._isAuth = bool;
  }
  setUser(user){
    this._user = user;
  }


  get isAuth(){
    return this._isAuth;
  }
  get user(){
    return this._user;
  }

  async login(username, password){
    try{
      const resp = await UserService.login(username,password);
      console.log(resp.data);
      this.setUser(resp.data["personal-data-user"]);
      this.setAuth(true);
      localStorage.setItem('user',JSON.stringify(this.user));
      localStorage.setItem('isAuth',this.isAuth);

    }catch(e){
      console.log(e)
    }
  }

  logout(){
    localStorage.removeItem('user');
    localStorage.removeItem('isAuth');
  }
} 