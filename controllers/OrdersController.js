const OrdersOverView=require('../models/Orders');

class OrdersController{


    static async getallOrders(req,res){

    var results= await OrdersOverView.getOrders();

    if(results)
    res.send(results)

    }
}
module.exports=OrdersController;