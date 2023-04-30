import React from "react";
import logo from "../../public/pos_logo.png";
const Login: React.FC<{}> = () => {
  return (
    <>
      <section className='grid w-screen h-screen'>
        <section className='justify-self-center self-center border rounded p-3'>
          <div className="grid">
            <img src={logo.src} alt="pos logo image" className="justify-self-center w-[100px]" />
            
          </div>
          <div>
            <form action='' method='POST'>
              <div className='flex flex-col mb-3'>
                <label htmlFor='username'>Username</label>
                <input
                  placeholder='Username'
                  id='username'
                  type='text'
                  required
                  className=' border border-gray-200 rounded focus:outline-none focus:ring focus:border-blue-500 focus:rounded-sm '
                />
              </div>
              <div className='flex flex-col mb-3'>
                <label>Password</label>
                <input
                  className='border border-gray-200 rounded focus:outline-none focus:ring focus:border-blue-500 '
                  placeholder='Password'
                  type='password'
                  required
                />
              </div>
              <div>
                <button
                  type='submit'
                  className='bg-blue-600 rounded text-white py-1 w-full'
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </section>
      </section>
    </>
  );
};
export default Login;
