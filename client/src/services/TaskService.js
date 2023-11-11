import {$API} from "../http";

export default class TaskService{
    static async getUserTasks(id){
        try{
            const response = await $API.get('/all-tasks-schedule');
            const userTasks = response.data.filter(task => task['user-courier-info'].id === id);
            return userTasks;
        }catch(e){
            console.log(e);
        }
    }

    static async getAllTasks(){
        try{
            const response = await $API.get('/all-tasks-schedule');
            return response.data;
        }catch(e){
            console.log(e);
        }
    }
}