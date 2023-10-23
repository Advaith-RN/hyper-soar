import React from 'react'
import { logo } from '../assets';
import { Navbar } from '../components';
import { useNavigate } from 'react-router-dom';
import transition from '../transition.jsx'

const Login = ({loginSet}) => {
  const [passError, setPassError] = React.useState(0);

  const username = "admin";
  const password = "admin";
  const navigate = useNavigate();
  function runAuth() {
    const usernameInput = document.querySelector('input[type=text]');
    const passwordInput = document.querySelector('input[type=password]');

    if (usernameInput.value === username && passwordInput.value === password) {
      loginSet;
      navigate('/');
    }else if(usernameInput.value === '' || passwordInput.value === ''){
      setPassError(1);
    }else{
      setPassError(2);
    }
  }

  return (
    <div className="w-screen h-screen flex align-middle items-center justify-center">
      <div className="bg-[url('./assets/bg_2.jpg')] bg-cover bg-center w-full h-full x-[20%] absolute z-0 brightness-100"></div>
        <div className='group w-[90%] md:w-[70%] lg:w-[60%] xl:w-[40%] h-auto pt-[15%] md:pt-[5%] bg-dark-gray flex align-middle items-center flex-col gap-6 z-10 rounded-xl shadow-lg shadow-zinc-800'>
          <img src={logo} alt="logo" className='invert w-[40%] md:w-[25%] hover:bg-pink hover:invert-0 transition-all rounded-3xl' onClick={()=>{
            navigate('/');
          }}/>
          <input type='text' className='px-6 py-5 w-[80%] md:w-[60%] bg-white h-8 font-inter rounded outline-none focus:border-b-4 border-pink transition-all' placeholder='Username'/>
          <input type='password' className='px-6 py-5 w-[80%] md:w-[60%] bg-white h-8 font-inter mt-[2%] rounded outline-none focus:border-b-4 border-pink transition-all' placeholder='Password'/>
          <button type="submit" className='w-25 bg-green px-8 py-2 text-lg font-inter font-bold rounded hover:bg-pink hover:text-white transition-all hover:rounded-xl hover:skew-y-3' onClick={runAuth}>LOG IN</button>
          {passError == 1 && <p className='text-lg text-green px-6 py-2 font-inter mt-12 border-x-4 border-green rounded-sm transition-all'>Please fill in both fields</p>}
          {passError == 2 && <p className='text-lg text-pink px-6 py-2 font-inter mt-e12 border-x-4 border-pink rounded-sm transition-all'>Your Username or Password is incorrect</p>}
          <div className='flex flex-col gap-2 mb-3'>
            <p className='text-slate-400 font-inter text-sm opacity-60'>Default username - admin</p>
            <p className='text-slate-400 font-inter text-sm opacity-60'>Default password - admin</p>
          </div>
        </div>
    </div>
  )
}

export default transition(Login)