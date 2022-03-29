const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({


      flight : {type : mongoose.Schema.Types.ObjectID , ref:'flights'},
      user : {type : String , ref:'users'},
      
      from : {type : String},
      to : {type : String},
      transactionId : {type : String},
      totalAmount : {type : Number},
      date:{type:String}


},
  {timestamps : true}
)

const bookingModel = mongoose.model('bookings' , bookingSchema)

module.exports = bookingModel