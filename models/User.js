const mongoose=require('mongoose')

const Userschema=mongoose.Schema({
    user:{type:String,require:true},
    email:{type:String,require:true},
    passwoed:{type:String,require:true},
})

module.exports=mongoose.model('User',Userschema)