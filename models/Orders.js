const db = require("../config/db")

class OrdersOverView{
 static async  getOrders(){

    return new Promise(resolve=>{

        db.query('select * from orders',[],(err,result)=>{
            if(!err)
            resolve(result)
        })
    })

    }

}
module.exports=OrdersOverView;