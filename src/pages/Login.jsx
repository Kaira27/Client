import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkmed, cross, loginBg, passwordIcon } from '../constants';

const Login = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleClear = (setter) => {
    setter('');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (!response.ok) {
        throw new Error('Unauthorized');
      }

      const data = await response.text();

      if (data === 'checkmed') {
        navigate('/admin');
      } else if (data === 'icici') {
        navigate('/icici');
      } else {
      }
    } catch (error) {
      console.error('Login failed:', error.message);
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-cover bg-center overflow-x-hidden overflow-y-hidden" style={{ backgroundImage: `url(${loginBg})` }}>
      <div className="flex h-full items-center justify-center pt-5 lg:justify-end p-10">
        <div className="w-full max-w-md lg:w-[50%] bg-white p-8 rounded-[25px] shadow-md">
          <div className='opacity-[100%]'>
            <div className="flex items-center mb-6 ">
              <img src={checkmed} alt="CheckMed Logo" className="mr-3 w-[50px] h-[50px]" />
              <h1 className="text-xl font-bold">CheckMed Welcomes you!</h1>
            </div>
            <div className='py-5'>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Username/Company Name</label>
                <div className="relative">
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-[10px] shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter name"
                  />
                  {username && (
                    <button onClick={() => handleClear(setUsername)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700">
                      <img src={cross} alt="Clear username" width="20" height="20" />
                    </button>
                  )}
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Email ID</label>
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-[10px] shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Your email"
                  />
                  {email && (
                    <button onClick={() => handleClear(setEmail)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700">
                      <img src={cross} alt="Clear email" width="20" height="20" />
                    </button>
                  )}
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-[10px] shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Your password"
                  />
                  <button onClick={togglePasswordVisibility} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700">
                    <img src={passwordIcon} alt={showPassword ? "Hide password" : "Show password"} width="20" height="20" />
                  </button>
                </div>
              </div>
            </div>
            <div className='flex justify-center' onClick={handleLogin}>
              <button className="w-[10vw] min-w-[70px] h-[40px] mt-4 bg-[#01278C] text-white font-inter font-semibold rounded-lg shadow-md hover:bg-[#011e68] focus:outline-none flex items-center justify-center">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
