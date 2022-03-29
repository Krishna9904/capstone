const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema({

    name : {type : String , required : true} ,
    from : {type : String , required : true} , 
    to : {type : String , required : true},
   time : {type : String , required : true} , 
   price:{type:String,required:true}
   

}, {timestamps : true}

)
const flightModel = mongoose.model('flights' , flightSchema)
module.exports = flightModel