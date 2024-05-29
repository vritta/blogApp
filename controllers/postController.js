//import model
const Post = require("../models/postModel");
// const Comment = require("../models/commentModel");
// const Like = require("../models/likeModel");

//Bussiness Logic
exports.createPost = async (req,res)=>{
    try{
        const {title, body} = req.body;
        const post = new Post({
            title,body,
        });
        // console.log("\n Hi hihihihihiihih\n");
        const savedPost = await post.save();

        // const updatedComment = await Comment.findByIdAndUpdate(comments, {$push:{savedPost._id}}, {new:true})
        //                         .populate("comments")//populate the comments array with comment documents
        //                         .exec();;
        // const updatedLikes = "";

        res.status(200).json(
            {
                post: savedPost,
                // comment: updatedComment,
                // likes: updatedLikes
            }
        )
    }
    catch(error){
        // console.log("error in post -", error.message);
        return res.status(500).json({
            error:"Error while creating new post in post request.",
        });
    };
}

exports.getAllPosts = async(req, res)=>{
    try{
        const posts = await Post.find().populate("likes").populate("comments").exec();
        res.status(200).json({
            posts,
        })
    }
    catch(error){
        return res.status(500).json({
            error:"Error while creating new post in get request.",
        })
    }
}