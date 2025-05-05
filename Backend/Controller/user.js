
const Users = require('../Model/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const register = async(req ,res)=>{
    try{
        const {username ,email , password} = req.body;
        if(password.length <6){
            res.status(400).json({message : "password must be 6 character"})
        }
        const hashPass = await bcrypt.hash(password, 10)

        const newUser = new Users({
            username , email, password:hashPass
        })
        
      await newUser.save()
      res.status(201).json({message : "registation succfully"})
    }catch(error){
        res.status(400).json({message : "registation failed"})
    }
    
}


const login = async(req ,res)=>{
    try{
        const {username ,email , password} = req.body;
        const checkUser = Users.findOne({email})
    
        const checkPass = bcrypt.compare(password , checkUser.password)
        if(!checkPass){
            res.status(400).json({message : "inCorrect password "})
        }
        jwt.sign(
            {email : checkUser.email , password : checkUser.password},process.env.JWT_SECRET ,{expiresIn : '30d'}
        )

        res.status(201).json({message : "Login succesfully"})
    }catch(err){
        res.status(400).json({message : "Login failed"})
    }
}

module.exports = {register , login}