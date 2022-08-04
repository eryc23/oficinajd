import {Server} from "socket.io";

let io: any;

export default {
    init: (http: any) => {
        io = new Server(http, {
            maxHttpBufferSize: 1e9,
            cors: {
                origin: '*',
                methods: ['GET', 'POST'],
                credentials: true
            }
        });

        return io;
    },
    get: () => {
        if(!io){
            throw new Error("Socket não inicializado");
        }

        return io;
    }
}