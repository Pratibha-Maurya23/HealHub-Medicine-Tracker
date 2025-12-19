const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require('../models/user');
const {refreshTokens} = require("../utils/tokenStore");

const createAccessToken = (payload)=>{
  jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:'1h'});
}
const createRefreshToken = (payload) =>{
  jwt.sign(payload,process.env.REFRESH_SECRET,{expiresIn:'7d'});
}


exports.register =async (req, res) => {
  try{
  const { name, email, password } = req.body;
  if (!name || !email || !password) return res.status(400).json({ message: 'Missing fields' });

  const exixting = await User.findOne({email});
  if(exixting) return res.status(400).json({message:"Email Id already registered"});

  const hashed = await bcrypt.hash(password,10);
  const user = User.create({ name, email, password });
  res.status(201).json({ message:"User Created", user: { id: user._id, email: user.email, name: user.name } });
  }catch(err){
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
}

exports.login = async (req, res) => {
  try {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ message: 'Invalid Email' });
  
  const match = await bcrypt.compare(password,user.password);
  if (!match) return res.status(401).json({ message: 'Invalid password' });

  const payload = {id :user,_id,email:user.email};
  const accessToken = createAccessToken(payload);
  const refreshToken = createAccessToken(payload);

  refreshTokens.add(refreshToken);
  user.refreshTokens = refreshToken;

  await user.save();

  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days in ms
  })
  res.status(201).json({ message:"User Login", user: { id: user._id, email: user.email, name: user.name } });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
}

exports.logout =  async (req, res) => {
  try {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ message: 'Invalid email' });
  }
  user.token = null;
  await user.save();  
  res.status(200).json({ message: 'Logout successful' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
}
