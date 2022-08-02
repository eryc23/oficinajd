import express from "express";
import {createServer} from 'http';
import {Server} from "socket.io";

import PrismaPostRepository from './adapters/prisma-post-repository';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
        maxHttpBufferSize: 1e9,
        cors: {
            origin: '*',
            methods: ['GET', 'POST'],
            credentials: true
        }
});

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'hello world',
        status: 200
    })
})

app.post('/message', async (req, res) => {
    const {name, message} = req.body;

    if(!name && !message) return res.json({message: "dont send message", status: 400});

    PrismaPostRepository.create({name, message});
  
    res.json({message: "success on send message", status: 200});
})

app.post('/login', (req, res) => {
    const {name} = req.body;
    
    if(!name) return res.json({message: "fail on login", status: 401});

    res.json({
        name,
        avatar: `https://avatars.dicebear.com/api/bottts/${name}.svg`,
        message: "success on login",
        status: 200,
    })
})

io.on("connection", (socket) => {
    console.log('new client connect '+socket.id);
})

app.listen(3000, () => 'Running server on port 3000')