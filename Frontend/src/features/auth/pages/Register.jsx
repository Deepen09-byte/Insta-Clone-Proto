import React from 'react'

const Register = () => {
  return (
    <main>
        <div className="form-container">
            <h1>Register</h1>
            <form>
            <input type='text' name='username' placeholder='Enter Username'/>
            <input type='password' name='password' placeholder='Enter Password'/>
            <button type='submit'>
                Register
            </button>
            </form>
        </div>
    </main>
  )
}

export default Register
