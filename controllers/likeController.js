const Post = require("../models/postModel");
const Like = require("../models/likeModel")

exports.likePost = async (req, res) => {
    try{
        const {post, user} = req.body;
        const like = new Like({
            post, user,
        });
        const savedLike = await like.save();

        // update the post collection basis on this
        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {likes: savedLike._id} }, {new:true})
        .populate("likes").exec();
        res.status(500).json({
            post: updatedPost,
        })
    }
    catch(error){
        return res.status(500).json({
            error:"Error while creating new like in post request.",
        });
    }
};

exports.unlikePost = async (req, res) => {
    try{
        const {post, like} = req.body;
        
        //find and delete the like collection
        const deletedLike = await Like.findOneAndDelete({post: post, _id:like});
        
        //update the postr collection
        const updatedPost = await Post.findByIdAndUpdate(post, {$pull: {likes: deletedLike._id}}, {new:true});
        // .populate("likes").exec();
        res.status(500).json({
            post: updatedPost,
        })
    }
    catch(error){
        return res.status(500).json({
            error:"Error while creating new unlike in post request.",
        });
    }
};