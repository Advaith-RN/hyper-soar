import React from 'react'
import { logo } from '../assets';
import { Navbar } from '../components';
import { useNavigate } from 'react-router-dom';
import transition from '../transition.jsx'

const Login = ({loginSet}) => {
  const [wrongPassword, setWrongPassword] = React.useState(false);

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
      alert('Please fill in all fields');
    }else{
      setWrongPassword(true);
    }
  }

  return (
    <div className="w-screen h-screen flex align-middle items-center justify-center">
      <div className="bg-[url('./assets/bg_2.jpg')] bg-cover bg-center w-full h-full x-[20%] absolute z-0 brightness-100"></div>
        <div className='group w-[90%] md:w-[40%] h-[70%] bg-dark-gray flex align-middle items-center flex-col gap-6 z-10 rounded-3xl shadow-lg shadow-zinc-800'>
          <img src={logo} alt="logo" className='invert mt-[10%] w-[25%] hover:bg-pink hover:invert-0 transition-all rounded-3xl' onClick={()=>{
            navigate('/');
          }}/>
          <input type='text' className='px-6 py-5 w-[60%] bg-white h-8 mt-[4%] font-inter outline-none focus:border-b-4 border-pink transition-all'/>
          <input type='password' className='px-6 py-5 w-[60%] bg-white h-8 font-inter mt-[2%] outline-none focus:border-b-4 border-pink transition-all'/>
          <button type="submit" className='w-25 bg-green px-8 py-2 text-lg font-inter font-bold hover:bg-pink hover:text-white transition-all hover:rounded-xl hover:skew-y-3' onClick={runAuth}>LOG IN</button>
          {wrongPassword && <p className='text-md text-pink font-inter'>Your Username or Password is incorrect</p>}
        </div>
    </div>
  )
}

export default transition(Login)