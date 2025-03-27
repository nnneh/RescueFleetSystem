const User = require("../models/user")


// const loginUser =async (req, res) => {
//   const user = await User.findOne({email: req.body.email})
//   if(!user) return res.status(404).json({msg: "Email not registered"})
//   console.log(req.body.password, user.password )
//   if(user.password == req.body.password) return res.json({
//     user,
//     msg: "Logged in successfully"
//   })
  
// }

const loginUser = async (req, res) => {
  const user = await User.findOne({email: req.body.email})
  if(!user)  return res.status(404).json({msg: "Email not found"})
  const isMatched = await bcrypt.compare(req.body.password, user.password)
  if(!isMatched) return res.status(400).json({msg: "Invalid password"})
  const token = await jwt.sign({
    data: req.body.email
  }, process.env.SECRET_KEY , { expiresIn: '1h' });
  res.json({
    data: user,
    token,
    isLoggedIn: true,
    msg: "Logged in successful"
  })
}

const registerNewUser =async (req, res) => {
  //check email if exists
  const user = await User.findOne({email: req.body.email})
  //if user exists return error
  if(user) return res.status(409).json({msg: "Email already exists"})
      //hash req.body.password before saving to db
      req.body.password = await bcrypt.hash(req.body.password, 10);
      User.create(req.body)
      res.json({msg: 'user created!'})
}



const getUser = async (req, res) => {
    const data = await User.find()
    res.send(data)
  }

// const registerNewUser = async (req, res) => {
//     User.create(req.body)
//     res.send('user created')
//   }

  module.exports = {getUser, registerNewUser,loginUser}