const Books = require('../Model/book')

const insertBook = async(req ,res)=>{
    try{
        const {title , author , genre , year } = req.body;

        const newBook = new Books({
            title , author, genre, year
        })
        await newBook.save()
        res.status(201).json({message : "Book data stored succesfull"})
    }catch(error){
        res.status(400).json({message : error.message})
    }
}


const updateById = async(req ,res)=>{
    try{
        
        const{title , author , genre , year}= req.body
        const id = req.params.id;
        await Books.findByIdAndUpdate({id})
    }catch(error){
        res.status(400).json({message : error.message})
    }
}


const deleteById = async(req ,res) =>{
    try{
        const{title , author , genre , year}= req.body
        const id = req.params.id;
      Books.findByIdAndDelete({id})
    }catch(error){
        res.status(400).json({message : error.message})
    }
}
module.exports = {insertBook , updateById , deleteById}