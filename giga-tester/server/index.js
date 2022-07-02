import express from 'express'
import mongoose from 'mongoose';

import Post from './Post.js'

const PORT = 5000;
const DB_URl = `mongodb+srv://FrontEnjoyer:FrontEnjoyer@cluster0.dxuyg.mongodb.net/?retryWrites=true&w=majority`
const app = express()

app.use(express.json())

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

app.post('/', async (req, res) => {
    const post = await Post.create(req.body)
    console.log(post);
    res.status(200).json(post)
})

app.get('/', async (req, res) => {
    const all = await Post.find();
    console.log(all);
    return res.json(all)  
})

async function startApp(){
    try {
        await mongoose.connect(DB_URl, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, ()=> console.log(PORT) )        
    } catch (error) {
        console.log(error);
    }
}

startApp()