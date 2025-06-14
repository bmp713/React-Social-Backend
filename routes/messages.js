const Messages = require("../models/messages");
const express = require('express');
const router = express.Router();

router.get("/read", async (req, res) => {
    console.log("messages/read" + res);
    try {
        read()
            .then((result) => {
                res.send(result);
            });
    } catch (err) { console.log(err) }
})
const read = async () => {
    try {
        const posts = await Messages.find({});
        return posts;
    } catch (err) { console.log(err) }
}


router.post("/create", async (req, res) => {
    console.log("messages/create", req.params.id);

    try {
        let post = {
            id: req.body.id,
            date: req.body.date,
            edited: req.body.edited,
            email: req.body.email,
            first: req.body.first,
            last: req.body.last,
            likes: req.body.likes,
            liked: req.body.liked,
            message: req.body.message,
            time: req.body.time,
            userID: req.body.userID,
            userImg: req.body.userImg,
            imageURL: req.body.imageURL
        }
        create(post);
        res.send(post);
    } catch (err) {
        console.log(err);
    }
});
const create = async (data) => {
    try {
        const post = await Messages.create(data);
        return post;
    } catch (err) {
        console.log(err);
    }
}


router.delete("/delete/:id", async (req, res) => {
    console.log(`/delete/${req.body.id}`);
    try {
        const post = await Messages.deleteOne({ id: req.params.id });
        res.send(post);
    } catch (err) {
        console.log(err);
    }
});


router.get("/read/:id", async (req, res) => {
    console.log("/read:", req.body.id);
    try {
        readId(req.params.id)
            .then((result) => {
                res.send(result);
            });
    } catch (err) {
        console.log(err)
    };
})
const readId = async (id) => {
    try {
        const post = await Messages.findOne({ id: id });
        return post;
    } catch (err) {
        console.log(err)
    }
}


router.post("/update/:id", async (req, res) => {
    console.log("messages/update", req.params.id);

    try {
        const update = await Messages.findOne({ id: req.params.id });

        update.id = req.body.id;
        update.date = req.body.date;
        update.edited = req.body.edited;
        update.email = req.body.email;
        update.first = req.body.first;
        update.last = req.body.last;
        update.likes = req.body.likes;
        update.liked = req.body.liked;
        update.message = req.body.message;
        update.time = req.body.time;
        update.userID = req.body.userID;
        update.userImg = req.body.userImg;
        update.imageURL = req.body.imageURL;

        await update.save();
        res.send(update);

    } catch (err) {
        console.log(err);
    }

});


module.exports = router;



