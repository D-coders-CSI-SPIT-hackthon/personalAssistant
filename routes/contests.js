const express = require('express')
const axios = require('axios')
const newsr=express.Router()


newsr.get('/',async(req,res)=>{
    try {
        var url = 'https://clist.by/api/v2/contest/?username=JA&api_key=d84ea6ac9d33b0a7456db3e3502d481b8ef1689e';

        const contests_get =await axios.get(url)
        const data = contests_get.data.objects
        res.render('contests',{data})
        // res.json(data);

    } catch (error) {
        if(error.response){
            console.log(error)
        }

    }
})

module.exports=newsr