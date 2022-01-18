const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required:true,
        minLength:3
    },

    email:{
        type: String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email Id")
            }
        }
    },
    phone:{
        type: Number,
        required:true,
    },
    message:{
        type: String,
        required:true,
        minLength:3
    }
})

// create collection

const UserMessage = mongoose.model("User", userSchema);

module.exports = UserMessage;