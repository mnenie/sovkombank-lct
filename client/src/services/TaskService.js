import $API from "../http";

export default class TaskService{
    static async getUserTasks(id){
        try{
            const response = await $API.get('/all-tasks-schedule');
            const userTasks = response.data.filter(task => task['user-courier-info']);
            return userTasks;
        }catch(e){
            console.log(e);
        }
        
    }
}