import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


// ~~~~~~~~~
export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const login = async (username, password) => {
    const apiEndpoint = 'https://librarygfu.pythonanywhere.com/en-us/token/';

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);

        // Store the token in localStorage
        localStorage.setItem('access_token', data.access);
        localStorage.setItem('refresh_token', data.refresh);

        setIsLoggedIn(true);
        navigate('/admin');
window.location.reload();
      } else {
        setErrorMessage('Invalid username or password');
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again.');
      console.error('Error during login:', error);
    }
  };

  const logout = () => {
    // Clear localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    setIsLoggedIn(false);
    navigate('/login');
    window.location.reload()
  };

  return { isLoggedIn, errorMessage, login, logout };
};

// ~~~~~~~~~

const Login = () => {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
  const { login, errorMessage } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    login(username, password);
  };
   


  return (
<section className="bg-gray-50 ">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <a href="#" className='text-3xl font-semibold my-4'>
      Login    
    </a>
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
          Sign in to your account
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Username</label>
            <input 
            value={username}
            onChange={(e)=>setUsername(e.target.value)}

            type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:border-blue-600 block w-full p-2.5" placeholder="username" required />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}

            type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-start">
              
               
            </div>
            <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
          </div>
          <button type="submit" className="w-full text-white bg-violet-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  </div>
</section>

  )
}

export default Login