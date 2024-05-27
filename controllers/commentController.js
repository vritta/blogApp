 //import model
 const Comment = require("../models/commentModel");
 const Post = require("../models/postModel");

 //bussiness logic
 exports.createComment = async (req, res) =>{
    try{
        //fetch data from request body
        const {post, user, body} = req.body;
        //create a comment object
        const comment = new Comment({
            post, user, body
        });

        // save the new comment into the database
        const savedComment = await comment.save();
    }
    catch(err){
        console.log("error ");
    };
 }