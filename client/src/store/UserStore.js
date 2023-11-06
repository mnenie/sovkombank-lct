import {makeAutoObservable} from 'mobx'
import UserService from '../services/UserService';

export default class UserStore {
  constructor(){
    this._isAuth = true;
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
    }catch(e){
      console.log(e)
    }
  }
} 