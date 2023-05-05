const mongoose = require("mongoose");
const { type } = require("os");

const UserSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      default: mongoose.Types.ObjectId,
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
    
    phone:{
      type: (Number),
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    cpf: {
      type: Number,
      required: true,
    },
    birth: {
      type: Number,
      
    },
  
      street:{
      type :String,
      },
      neighborhood:{
      type:String
      },
      number:{
        type: Number
      },
      city:{
        type: String
      },
      state:{
        type : String
      }
    
    },
    
  
  { timestamp: true }
);


const Model = mongoose.model("User", UserSchema);

module.exports = Model;