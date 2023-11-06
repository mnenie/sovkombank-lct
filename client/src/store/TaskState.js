import {makeAutoObservable} from 'mobx'

export default class UserStore {
  constructor(){
    this._tasks = [];
    makeAutoObservable(this);
  }

  setTasks(tasks){
    this._tasks = tasks.push(tasks);
  }


  get tasks(){
    return this._tasks;
  }

} 