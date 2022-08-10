import type { NextPage } from 'next'
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className='bg-[#f5f5f5] h-screen flex justify-center items-center relative'>
      <div className="bg-white p-5 min-w-[330px] rounded-md shadow-md z-10">
        <span className='text-center text-2xl text-gray-600 font-sans'>Realizar Acesso</span>
        <br/>
        <span className='text-xs font-semibold'>Nome do usuário</span>
        <br/>
        <input placeholder='Informe seu nome...' />
        <br/>
        <button className='bg-orange-500 shadow-md rounded-sm text-white text-center w-full my-4 p-1'>
          Acessar
        </button>
      </div>
      <div className='bg-orange-700'>
        <Image src={'/nl.svg'}  layout='fill' />
      </div>
    </div>
  )
}

export default Home
