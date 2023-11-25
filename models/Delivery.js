const db = require("../config/db")

class DeliveryOverView{
 static async  getDelivery(){

    return new Promise(resolve=>{
         
        db.query('select * from deliverymen',[],(err,result)=>{
            if(!err)
            resolve(result)
        })
    })

    }

}
module.exports=DeliveryOverView;
