const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 4000;

app.use(express.json());

const blog = require("./routes/blog");

app.use("/api/v1", blog);

app.listen(PORT, (req, res)=>{
    console.log(`Server is started with success at PORT - ${PORT}`);
})

app.get("/",(req,res)=>{
    res.send("<h1>This is HOMEPAGE my friends!!</h1>");
    // console.log("This is HOMEPAGE friends.");
})