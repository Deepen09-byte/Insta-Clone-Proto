import React from 'react'
import '../style/form.scss'
import { Link } from 'react-router'
import { useState } from 'react'
import axios from 'axios'
import { useAuth } from '../hooks/useAuth'

const Login = () => {

    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")

    const {handleLogin} = useAuth()

    async function handleSubmit(e) {
    e.preventDefault()

    handleLogin(username, password)
    .then(res =>{
         console.log(res)
    })
  }

  return (
    <main>
        <div className="form-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input 
                onInput={(e)=>{setusername(e. target.value)}}
                type='text'
                name='username' placeholder='Enter Username' />
                <input 
                onInput={(e)=>{setpassword(e.target.value)}}
                type='text'
                name='password' placeholder='Enter Password' />
                <button type='submit'>Login</button>
            </form>
            <p>Don't have an account? <Link className='toggleAuthForm' to="/register">Register</Link></p>
        </div>
    </main>
  )
}

export default Login
