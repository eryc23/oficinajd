import type { NextPage } from 'next'
import Head from 'next/head';
import { FormEvent, useState } from 'react';
import { api } from '../lib/api';

import Login from './views/Login';
import Main from './views/Main';

interface propsProfile{
  username: string,
  avatar: string,
  history: Array<{
    username: string,
    message: string,
    createdAt: Date,
    avatar: string,
  }>
}

const Home: NextPage = () => {
  const [username, setUsername] = useState<string>('');
  const [profile, setProfile] = useState<propsProfile | null>(null);
  const [isLoadingForm, setIsLoadingForm] = useState<Boolean>(false);

  const bgColor = profile ? 'bg-gradient-to-b from-[#f1624e] to-[#f48730]' : 'bg-[#f5f5f5]';

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  
    if(username){
      setIsLoadingForm(true);

      api.post('/login', {
        username
      }).then(e => {
        if(e.data.status == 200){
          setProfile({
            username: e.data.username,
            avatar: e.data.avatar,
            history: e.data.history
          })
        }

        setIsLoadingForm(false);
      }).catch(() => {
        alert('Erro ao realizar requisição a API!')
        setIsLoadingForm(false);
      })
    }
  }
  
  return (
    <div className={bgColor+' h-screen relative overflow-hidden transition-all duration-300'}>
      <Head>
        <title>Chat - Oficina JD</title>
      </Head>
      <div className='w-full z-10 h-screen flex justify-center items-center transition-all duration-300'>
        {profile ? 
          <Main 
            profile={profile}
            setProfile={setProfile}
          /> :
          <Login
            handleSubmit={handleSubmit}
            isLoadingForm={isLoadingForm}
            setUsername={setUsername}
          />
        }
      </div>
      <div className='z-0 absolute w-full h-full overflow-hidden top-0 left-0'>
        <img src='nl.svg' className='md:w-auto md:h-5/6 absolute md:-bottom-20 -right-10 bottom-0 transition-all duration-500 ease-linear' />
      </div>
    </div>
  )
}

export default Home
