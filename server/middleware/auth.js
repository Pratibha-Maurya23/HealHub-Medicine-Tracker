const jwt = require("jsonwebtoken");

module.exports = function(req,res,next){
  const header = req.headers.authorization;
  if(!header) return res.status(401).json({message:"No token"});

  const token = header.split(' ')[1];
  if(!token) return res.status(401).json({message:"No token"});

  jwt.verify(token,process.env.JWT_SECRET,(err,payload)=>{
    if(err) return res.status(403).json({message:"Invalid Token"});
    req.user = payload;
    next();
  })
}