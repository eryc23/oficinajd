import express from "express";
import cors from 'cors';
import {createServer} from 'https';

import { routes } from './routes';
import socket from './socket';

const app = express();
const server = createServer(app);

socket.init(server);

app.use(express.json());
app.use(cors());

app.use(routes);

server.listen(process.env.PORT || 3333, () => 'Running server...')