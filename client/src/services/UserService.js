import $API from "../http/index";

export default class UserService{
    static async login(login, password){
        return await $API.post("/auth", {
            login, password
        })
    }

    static async getAll(){
        return await $API.get("/users");
    }
}