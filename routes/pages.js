const express = require("express");
const router = express.Router();

//homepage
router.get("/",(req,res)=>{
    res.render("homePage");
})

router.get("/opentools",(req,res)=>{
    res.render("alltools");
})

router.get("/openwhiteboard",(req,res)=>{
    res.render("whiteboard");
})

router.get("/opentodo",(req,res)=>{
    res.render("todo");
})


module.exports = router;