const express = require('express')
const axios = require('axios')
const newsr=express.Router()


newsr.get('/',async(req,res)=>{
    console.log("hello world")
    try {
        var url = 'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=f2fcd45c23114a859a08279b9ff2219a';

        const news_get =await axios.get(url)
        const data = news_get.data.articles
        res.render('news',{data})
        // res.render('news',{data: news_get.data.articles})
        // console.log(news_get);
        // res.json(news_get.data);

    } catch (error) {
        if(error.response){
            console.log(error)
        }

    }
})

module.exports=newsr