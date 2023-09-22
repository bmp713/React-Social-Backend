const Comments = require("../models/comments");
const express = require('express');
const router = express.Router();

router.get("/read", async (req, res) => {
    console.log("comments/read", req.body.id);
    try{
        read()
            .then( (result) => {
                res.send(result);     
            });
    }catch(err){console.log(err)}
})
const read = async () => {
    try{
        const posts = await Comments.find({});
        return posts;
    }catch(err){console.log(err)}
}


router.post("/create", async (req, res) => {
    console.log("/comments/create =>", req);
    try{
        let post = {
            id: req.body.id,
            msgId: req.body.msgId,
            userId: req.body.userId,
            userImg: req.body.userImg,
            userName: req.body.userName,
            comment: req.body.comment,
            time: req.body.time,
            date: req.body.date,
        }
        create(post); 
        res.send( post ); 
    }catch(err){
        console.log(err);
    }
}); 
const create = async (data) => {
    try{
        const posts = await Comments.create(data);
        return posts;
    }catch(err){
        console.log(err);
    }
}


router.delete("/delete/:id", async (req, res) => {
    console.log("comments/delete", req.params.id);
    try{ 
        const posts = await Comments.deleteOne({id:req.params.id});
        res.send(posts);
    }catch(err){
        console.log(err);
    }
}); 


router.get("/read/:id", async (req, res) => {
    console.log("comments/read", req.params.id);
    try{
        readId(req.params.id)
            .then( (result) => {
                res.send(result);    
            }); 
    }catch(err){
        console.log(err)
    };
})
const readId = async (id) => {
    try{
        const posts = await Comments.findOne({id:id});
        return posts;
    }catch(err){
        console.log(err)
    }
}


router.post("/update/:id", async (req, res) => {
    try{
        const update = await Comments.findOne({id:req.params.id});

        update.id = req.body.id;
        update.msgId = req.body.msgId;
        update.userId = req.body.userId;
        update.userImg = req.body.userImg;
        update.userName = req.body.uerName;
        update.comment = req.body.comment;
        update.time = req.body.time;
        update.date = req.body.date;

        await update.save();
        res.send(update);
    }catch(err){
        console.log(err);
    }

}); 


module.exports = router;



