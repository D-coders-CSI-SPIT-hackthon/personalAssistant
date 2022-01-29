const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');
const app = express();


app.use('/news',require('./routes/news'))

app.use('/contests',require('./routes/contests'))

app.use('/', require('./routes/pages'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set('view engine', 'hbs');
app.use(cors());

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));


app.listen(process.env.PORT || 8002, () => {
    console.log("Server started on port 8002");
})