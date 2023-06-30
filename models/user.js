const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
email:{ type: String, 
    unique:true, 
    required: true},
name:{type: String, required:true},
age:{type: Number, min: 18 },
phoneNumber:{ type: String, unique:true },
isActive:{ type: Boolean, default: true},
})


const User = mongoose.model('user',userSchema)

module.exports = User

