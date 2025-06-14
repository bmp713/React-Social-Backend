const Users = require("../models/users");
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

router.post("/login", async (req, res) => {
    try{
        let email = req.body.email;
        const user = await Users.findOne({email});
    }catch(err){console.log(err)}
})

router.post("/create", async (req, res) => {
    console.log("/create", req.body);
    const password = await bcrypt.hash(req.body.password, 10);
    try{
        let user = {
            id: req.body.id,
            email: req.body.email,
            password: password,
            first: req.body.first,
            last: req.body.last,
            userImg: req.body.userImg
        }
        const post = await Users.create(user);
        res.send(post); 
    }catch(err){ 
        console.log(err);
    }
}); 

router.delete("/delete/:id", async (req, res) => {
    console.log(`/delete/${req.params.id}`);
    try{ 
        const post = await Users.deleteOne({id:req.params.id});
        res.send(post);
    }catch(err){
        console.log(err);
    }
}); 

 
// router.get("/login", async (req, res) => {
//     try{
//         login()
//             .then( (result) => {
//                 console.log("LOGIN user, password");
//                 res.send(result);   
//             });
//     }catch(err){console.log(err)}
// })
// const login = async () => {
//     try{
//         // const posts = await Users.find({});
//         // return posts;
//         return {
//             user: "user",
//             password: "password"
//         }
//     }catch(err){console.log(err)}
// }

// router.post("/create", async (req, res) => {
//     console.log("Created", req.body);
//     try{
//         let post = {
//             id: req.body.id,
//             userName: req.body.userName,
//             first: req.body.first,
//             last: req.body.last,
//             email: req.body.email,
//             userImg: req.body.userImg
//         }
//         create(post); 
//         res.send( post ); 
//     }catch(err){ 
//         console.log(err);
//     } 
// }); 
// const create = async (data) => {
//     try{
//         const post = await Users.create(data);
//         return post;
//     }catch(err){
//         console.log(err);
//     }
// }

// router.delete("/delete/:id", async (req, res) => {
//     console.log(`/delete/${req.params.id}`);
//     try{ 
//         const post = await Users.deleteOne({id:req.params.id});
//         res.send(post);
//     }catch(err){
//         console.log(err);
//     }
// }); 


// // router.get("/read/:id", async (req, res) => {
// //     console.log("/read:", req.body.id);
// //     try{
// //         readId(req.params.id)
// //             .then( (result) => {
// //                 res.send(result);    
// //             }); 
// //     }catch(err){
// //         console.log(err)
// //     };
// // })
// // const readId = async (id) => {
// //     try{
// //         const post = await Messages.findOne({id:id});
// //         return post;
// //     }catch(err){
// //         console.log(err)
// //     }
// // }


// // router.post("/update/:id", async (req, res) => {
// //     try{
// //         const update = await Messages.findOne({id:req.params.id});

// //         update.id = req.body.id;
// //         update.date = req.body.date;
// //         update.edited = req.body.edited;
// //         update.email = req.body.email;
// //         update.first = req.body.first;
// //         update.last = req.body.last;
// //         update.likes = req.body.likes;
// //         update.liked = req.body.liked;
// //         update.message = req.body.message;
// //         update.time = req.body.time;
// //         update.userID = req.body.userID;
// //         update.userImg = req.body.userImg;
// //         update.imageURL = req.body.imageURL;

// //         await update.save();
// //         res.send(update);

// //     }catch(err){ 
// //         console.log(err);
// //     }

// // }); 




module.exports = router;



