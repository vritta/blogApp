const mnongoose = require("mongoose");

require("dotenv").config();

const dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }
).then(()=>console.log("DB Connection Successful"))
.catch((err)=>{
    console.log("Issue in DB Connection");
    console.log(err);
    process.exit(1);
})
}

module.exports = dbConnect;