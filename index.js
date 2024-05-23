const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 4000;
//middleware
app.use(express.json());

const blog = require("./routes/blog");
//mount
app.use("/api/v1", blog);

const connectWithDB = require("./config/database");
connectWithDB();

//start the server
app.listen(PORT, (req, res)=>{
    console.log(`Server is started with success at PORT - ${PORT}`);
})

app.get("/",(req,res)=>{
    res.send("<h1>This is HOMEPAGE my friends!!</h1>");
    // console.log("This is HOMEPAGE friends.");
})