import express from "express";
import {createServer} from 'http';
import {Server} from "socket.io";

import PrismaPostRepository from './adapters/prisma-post-repository';

const app = express();
const server = createServer(app);
const io = new Server(server, {
    maxHttpBufferSize: 1e9,
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
        credentials: true
    }
});

io.on("connection", (socket) => {
    console.log('new client connect', socket.id);
});

app.use(express.json());

app.get('/', async (req, res) => {
    res.json({
        message: 'hello world',
        status: 200
    })
})

app.post('/message', async (req, res) => {
    const {username, message} = req.body;

    if(!username && !message) return res.json({message: "dont send message", status: 400});

    PrismaPostRepository.create({username, message});
    io.emit('message', {
        username,
        avatar: encodeURI(`https://avatars.dicebear.com/api/bottts/${username}.png`),
        message,
        createdAt: new Date().toISOString()
    });

    res.json({message: "success on send message", status: 200});
})

app.post('/login', async (req, res) => {
    const {username} = req.body;
    
    if(!username) return res.json({message: "fail on login", status: 401});

    let history = await PrismaPostRepository.get();

    interface propsHistory{
        id: String,
        username: String,
        message: String,
        createdAt: Date,
        updatedAt: Date,
        avatar?: String
    }

    history.map((e: propsHistory) => {
        e.avatar = encodeURI(`https://avatars.dicebear.com/api/bottts/${e.username}.png`)
    })

    history.sort((a,b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());

    res.json({
        username,
        avatar: encodeURI(`https://avatars.dicebear.com/api/bottts/${username}.png`),
        history,
        message: "success on login",
        status: 200,
    })
})

server.listen(3000, () => 'Running server on port 3000')