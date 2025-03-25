const User = require("../models/user")


const loginUser =async (req, res) => {
  const user = await User.findOne({email: req.body.email})
  if(!user) return res.status(404).json({msg: "Email not registered"})
  console.log(req.body.password, user.password )
  if(user.password == req.body.password) return res.json({
    user,
    msg: "Logged in successfully"
  })
  
}


const getUser = async (req, res) => {
    const data = await User.find()
    res.send(data)
  }

const registerNewUser = async (req, res) => {
    User.create(req.body)
    res.send('user created')
  }

  module.exports = {getUser, registerNewUser,loginUser}