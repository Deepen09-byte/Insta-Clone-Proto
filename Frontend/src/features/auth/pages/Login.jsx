import React from 'react'
import '../style/form.scss'
import {Link} from 'react-router'



const Login = () => {


    const handleSubmit = (e)=>{
        e.preventDefault()
    }


  return (
    <main>
        <div className="form-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name='username' id='username' placeholder='Enter Username'/>
                <input type="password" name='password' id='password' placeholder='Enter Password'/>
                <button className='button primary-button'>Login</button>
                <p>Don't have an account? <Link to={"/register"}>Create one.</Link></p>
            </form>
        </div>
    </main>
  )
}

export default Login
