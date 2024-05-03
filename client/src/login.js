import React from 'react';

const Login = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 h-full bgMain bg-no-repeat bg-cover">
        <div className='bg-black/65 h-full'>
        <h1 className="text-2xl font-bold text-white px-[3rem] py-[2rem]">StaffSync</h1>
        </div>
      </div>

      <div className="w-1/2 bg-black flex items-center justify-center text-white">
        <div className="text-center">
        <div className="mb-4">
            <h2 className="text-2xl font-semibold text-start">Get more things done with</h2>
            <h2 className="text-2xl font-semibold text-start">Loggin platform</h2>
          </div>
          <div className='mb-8'>
          <h4 className="font-light text-start text-1.5xl">Access to the most powerful tool in the</h4>
          <h4 className='font-light text-start text-1.5xl'>entire design and web industry</h4>
          </div>
          <div className="mb-8 flex">
            <a href="/login" className={`mr-4 text-white ${window.location.pathname === '/login' ? 'border-b-2 border-white font-bold' : 'underline'}`}>Login</a>
            <a href="/signup" className={`text-white ${window.location.pathname === '/signup' ? 'border-b-2 border-white font-bold' : 'underline'}`}>Register</a>
          </div>
          <form className='flex flex-col items-start'>
            <input id="email" type="text" placeholder="E-mail Address" className="block mb-4 w-80 px-4 py-2 rounded-md placeholder-gray-400" />
            <input id="password" type="password" placeholder="Password" className="block mb-4 w-80 px-4 py-2 rounded-md placeholder-gray-400" />
            <button type="submit" className="bg-blue-500 w-55 h-10 text-white font-semibold px-6 py-2 rounded-md ">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
