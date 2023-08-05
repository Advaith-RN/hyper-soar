import React from 'react'
import {logo} from '../assets';
import { Navbar } from '../components';
import { useNavigate } from 'react-router-dom';
import transition from '../transition.jsx'

const Login = ({setIsLoggedIn}) => {
  const username = "admin";
  const password = "admin";
  const navigate = useNavigate();
  function runAuth() {
    const usernameInput = document.querySelector('input[type=text]');
    const passwordInput = document.querySelector('input[type=password]');
    if (usernameInput.value === username && passwordInput.value === password) {
      setIsLoggedIn(true);
      console.log('Logged in');
      navigate('/');
    }else if(usernameInput.value === '' || passwordInput.value === ''){
      alert('Please fill in all fields');
    }else{
      alert('Wrong username or password');
    }
  }

  return (
    <div className='w-screen h-screen flex align-middle items-center justify-center bg-white'>
      <div className='w-[90%] md:w-[40%] h-[70%] bg-dark-gray flex align-middle items-center flex-col gap-6'>
        <img src={logo} alt="logo" className='invert mt-[10%] w-24' onClick={()=>{
          navigate('/');
        }}/>
        <input type='text' className='px-6 py-5 w-[60%] bg-white h-8 mt-[8%] font-inter'/>
        <input type='password' className='px-6 py-5 w-[60%] bg-white h-8 font-inter'/>
        <button className='w-25 bg-green px-8 py-2 text-lg font-bold hover:bg-pink hover:text-white transition-all hover:rounded-xl' onClick={runAuth}>LOGIN</button>
      </div>
    </div>
  )
}

export default transition(Login)