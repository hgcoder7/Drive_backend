const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        unique:true,
        minLength: [3,'username must be atleast 3 character long']
    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        unique:true,
        minLength: [10,'email must be atleast 3 character long']
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minLength: [5,'Password must be atleast 5 character long']
    }
})
const User= mongoose.model('User',userSchema);
module.exports=User;