const mongoose = require('mongoose')
require('dotenv').config()
const conn = async()=>{
    try{
        mongoose.connect(process.env.MONGOOSE_URL)
        console.log('mongodb connected');
        
    }catch(err){
        console.log(err)
    }
}
conn()
module.exports = conn