const express = require('express')
const bodyParser = require('body-parser')
const { randomBytes } = require('crypto')
const axios = require('axios')
const cors = require('cors')
const app = express();

app.use(bodyParser.json());
app.use(cors());
const commentByPostId = {}
app.get('/posts/:id/comments', (req, res) => {
    res.send(commentByPostId[req.params.id]|| []);
});
app.post('/posts/:id/comments', async (req, res) => {
    const id = randomBytes(4).toString('hex');
    const { content } = req.body;
    const comments = commentByPostId[req.params.id] || [];
    comments.push({id,content});
    commentByPostId[req.params.id] = comments
    await axios.post('http://localhost:4005/events', {
        type: "CommentCreated",
        data: {
            id,
            content,
            postId:req.params.id
        }
    })
    res.send(comments);
});
app.post('/events',(req,res)=>{
    console.log("Event Received",req.body.type);
    res.send({})
});
app.listen(4001, () => {
    console.log("listening to 4001")
})