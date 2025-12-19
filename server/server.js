require("dotenv").config();
const express = require("express");
const mogoose = require("mongoose");
const cookieParser = require("cookie -parser");
const cors = require("cors");

const authRouter = require("./routes/authRouter");
const auth = require("./middleware/auth");
const { default: mongoose } = require("mongoose");

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin:process.env.CLINT_URL,
  credentials:true
}));

app.use("/auth",authRouter);

app.get('/profile',auth, async (req,res)=>{
  res.json({message:"Protected Content",user:req.user});
})

const PORT = process.env.PORT||5000;
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
  app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
  })
})
.catch(err=>console.log(err));