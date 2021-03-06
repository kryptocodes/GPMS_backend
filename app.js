require('dotenv').config()

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//myRoutes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const passRoutes = require("./routes/pass");
const attenRoutes = require("./routes/attendance");

//dB connection
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(()=>{
    console.log("DB CONNECTED")
}).catch(()=>
    console.log("Oops ERROR!!")
)

//middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//routes
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", passRoutes);
app.use("/api", attenRoutes);



//PORT
const port = process.env.PORT || 8000;

//Starting a server
app.listen(port,()=>{
    console.log(`server is running on ${port}`)
});