const DeliveryOverView=require('../models/Delivery');

class DeliveryController{


    static async getallDelivery(req,res){

    var results= await DeliveryOverView.getDelivery();

    if(results)
    res.send(results)

    }
}
module.exports=DeliveryController;