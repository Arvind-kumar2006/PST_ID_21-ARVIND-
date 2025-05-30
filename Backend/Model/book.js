const mongoose = require('mongoose')

const Schema = mongoose.Schema

const bookLibrary = new Schema({
    title:{
        type : String,
        required : true
    },
    author : {
        type : String,
        required : true
    },
    genre :{
        type : String ,
        required : true
    },
    year : {
        type : String , 
        required : true
    }
})

module.exports = mongoose.model('BookData' , bookLibrary);