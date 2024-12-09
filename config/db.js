const mongoose=require('mongoose');

function connectToDB(){
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log('connected');
        
    })
}
module.exports=connectToDB;