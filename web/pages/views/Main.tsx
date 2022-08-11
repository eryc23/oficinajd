import { io } from 'socket.io-client';
import { FormEvent, useEffect, useRef, useState } from 'react';
import {SignOut, PaperPlaneRight} from 'phosphor-react';

import { api } from '../../lib/api';

const socket = io(`${process.env.NEXT_PUBLIC_API_URL}`);

interface propsHistory{
    username: string,
    message: string,
    createdAt: Date,
    avatar: string,
}
interface propsMain{
    profile: {
        username: string,
        avatar: string,
        history: Array<propsHistory>
    },
    setProfile: (profile: null) => void;
}

const Main = ({profile, setProfile}: propsMain) => {
    const [message, setMessage] = useState<string>('');
    const [history, setHistory] = useState<Array<propsHistory>>(profile?.history);

    const messagesEnd = useRef<HTMLDivElement>(null);

    const sendMessage = (e: FormEvent) => {
        e.preventDefault();

        if(message){
            api.post('/message', {
                username: profile?.username,
                message
            })

            setMessage('');
        }
    }

    useEffect(() => {
        return messagesEnd.current?.scrollIntoView({behavior: 'smooth'});
    }, [history])

    useEffect(() => {
        socket.on('message', (res) => {
            if(res?.message){
                setHistory(prevState => {
                    return [
                        ...prevState, 
                        res
                    ]
                });
            }
        });
    }, []);

    return (
        <div className="w-full z-20 h-screen flex flex-col justify-between overflow-hidden">
            <div className="bg-white w-full flex p-2 py-4 items-center justify-between">
                <div className="flex items-center">
                    <img src={profile?.avatar} className='w-14 mr-4 rounded-full bg-white shadow-md border-gray-100 p-1' />
                    <div>
                        <span className="font-bold capitalize">{profile?.username}</span>
                        <br/>
                        <span className='text-slate-500'>Online</span>
                    </div>
                </div>
                <SignOut weight='fill' color='#fd9283' size={25} className='cursor-pointer' onClick={() => setProfile(null)} />
            </div>

            <div className="h-full w-full overflow-y-auto p-2">
                {history?.map((history, index) => (
                    history?.username != profile?.username ? (
                        <div className='my-2 flex items-center' key={index}>
                            <img src={history.avatar} className='w-14 mr-4 rounded-full bg-white shadow-md border-gray-100 p-1' />
                            <div className='bg-white text-slate-800 p-3 md:max-w-lg max-w-xs rounded-md shadow-md min-w-[200px]'>
                                <p className='font-bold'>{history?.username}</p>
                                {history?.message}
                                <p className='text-end text-[.6rem] pt-1'>
                                    {new Date(history?.createdAt).toLocaleString()}
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className='my-2 flex justify-end items-center' key={index}>
                            <div className='bg-[#fd9283] text-slate-50 p-3 md:max-w-lg max-w-xs rounded-md shadow-md min-w-[200px]'>
                                <p className='font-bold'>{history?.username}</p>
                                {history?.message}
                                <p className='text-end text-[.6rem] pt-1'>
                                    {new Date(history?.createdAt).toLocaleString()}
                                </p>
                            </div>
                            <img src={history?.avatar} className='w-14 ml-4 rounded-full bg-white shadow-md border-gray-100 p-1' />
                        </div>
                    )
                ))}

                <div ref={messagesEnd} />
            </div>

            <form className="bg-white w-full flex p-2 py-2 items-center justify-center" onSubmit={sendMessage}>
                <input 
                    className='w-[90%] resize-none mx-3 p-2 border-solid border-[.1px] border-slate-100 focus:border-red-300 focus:outline-none rounded-md text-slate-700'
                    placeholder='Fale alguma coisa aqui...'
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                />
                <button className='shadow-sm rounded-full bg-white border-gray-50 border-[.5px] p-3'>
                    <PaperPlaneRight size={35} weight='fill' color='#fd9283' />
                </button>
            </form>
        </div>
    )
}

export default Main;