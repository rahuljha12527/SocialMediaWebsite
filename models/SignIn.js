const mongoose=require('mongoose');

const signInSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    }
},{
    timestamps:true
});

const signIn=mongoose.model('SignIn',signInSchema);

module.exports=signIn;