import { $API } from "../http";

export default class AddressService{
    
    static async getAddresses(){
        try{
            const response = await $API.get("/get-all-address-list", {params: {limit : 50, offset: 0}});
            return {data: response.data};

        }catch(e){
            console.log(e);
        }
    }

    static async getCoordsByID(id){
        let res = '';
        const data = await this.getAddresses();
        for (let dt of data.data){
            if (dt.id == id){
                res = `${dt.longitude},${dt.latitude}`;
            }
        }
        return res; 
    }

}