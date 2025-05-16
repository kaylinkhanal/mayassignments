import React from 'react'


function Page() {

  return (
    <div className=' w-[50vh] h-[50vh] justify-center align-center items-center grid bg-white p-4 rounded-lg  ml-auto mr-auto mt-[7rem]'>
        <img src='/logo.png'  height={40}  width={40}  alt='logo image'/>

       <h1 className='text-black font-bold text-center text-blue-500' style={{ fontSize:30}}> Login</h1>
        <input className='text-black border border-black-3 p-1' style={{borderRadius:5}} placeholder='enter your email '/>
        <input className='text-black  text-black border border-black-3 p-2' style={{borderRadius:5}} placeholder='enter your password '/>

        <button className='text-black bg-blue-500 rounded-lg text-white'>Login</button>
        <p className='text-gray-900'>Dont have an account?<a className='text-blue-500' style={{fontStyle:'italic', textDecoration:'underline', paddingLeft:3}}>Register</a> </p>
    </div>
    
  )
}

export default Page
