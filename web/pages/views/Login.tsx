import { FormEvent } from 'react';
import Loading from '../components/Loading';

interface propsLogin{
    setUsername: (
        username: string
    ) => void,
    handleSubmit: (e: FormEvent) => void,
    isLoadingForm: Boolean
}

const Login = ({setUsername, handleSubmit, isLoadingForm}: propsLogin) => {
    return (
        <>
            <form className="bg-white p-5 min-w-[330px] max-w-md w-full mx-4 rounded-md shadow-md z-10" onSubmit={handleSubmit}>
                <p className='text-center text-2xl text-gray-600 font-sans'>Realizar Acesso</p>
                <div className='mt-6'>
                    <span className='text-xs font-semibold mt-4'>Nome do usuário</span>
                    <br/>
                    <input 
                    placeholder='Informe seu nome...' 
                    className='w-full border-[.4px] border-gray-200 rounded-sm shadow-sm hover:ring-orange-900 focus:border-orange-900 focus:ring-0 focus:outline-none p-1' 
                    onChange={event => setUsername(event.target.value) }
                    required
                    />
                </div>
                <button className='bg-red-400 shadow-md rounded-sm text-white text-center justify-center flex w-full my-4 p-1'>
                    {isLoadingForm ? <Loading /> : 'Acessar' }
                </button>
            </form>
        </>
    )
}

export default Login;