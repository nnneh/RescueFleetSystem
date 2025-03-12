const mongoose = require('mongoose');

const dbConnect = async ()=>{
    try{
        const res = await mongoose.connect('mongodb://127.0.0.1:27017/rescueFleetDB');
        // console.log(res)
        if (res) console.log('db connection successfull')
    } catch(err){
        console.log(err)
    }
   
}

module.exports = dbConnect;