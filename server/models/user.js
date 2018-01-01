const mongoose=require('mongoose');

const User=mongoose.model('Users',{
    name:{
        type:String,
        require:true, //validator
        minlength:2, // minimum length
        trim:true //trim string
    },
    email:{
        type:String,
        require:true, //validator
        minlength:2, // minimum length
        trim:true //trim string
    },
});

module.exports={User};