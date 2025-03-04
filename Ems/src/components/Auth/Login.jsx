import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')

     const submitHandler = (e) =>{
        e.preventDefault()
        console.log("Hello guysss, Form Submitted ")

        setEmail("")
        setpassword("")
     }



  return (
    <div className='flex h-screen w-screen items-center justify-center'>
    <div className='border-2 rounded-xl border-emerald-600 p-20'>
        <form 
        onSubmit={submitHandler}
        className='flex flex-col items-center justify-center'>
             <input
             value={email}
             onChange={(e) =>{
                 setEmail(e.target.value)
             }}
              required className='text-black outline-none bg-transparent border-2 border-emerald-600 py-4 px-5 rounded-full placeholder: text-black' type="email" placeholder='Enter your email'
               />
             <input
             value={password}
             onChange={(e) =>{
                setpassword(e.target.value)
             }}
              required className='text-black outline-none bg-transparent border-2 border-emerald-600 py-4 px-5 mt-2 rounded-full placeholder: text-black' type="password" placeholder='Enter your password'
               />
             <button className= ' mt-5 text-white border-none outline-none   bg-emerald-600 text-xl py-3 px-5 rounded-full'>Log in</button>
        </form> 
    </div>


    </div>
  )
}

export default Login