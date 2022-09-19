import React from 'react'
import { Link } from 'react-router-dom'

const SignInPage = () => {
  return (
    <div className='signIn__wrapper'>
        <div className="container">
            <div className="signIn__container">
                <form>
                    <h3>Log In User</h3>
                    <input type="email" placeholder='Email' className='signIn__form-input' required/>
                    <input type="password" placeholder='Password' className='signIn__form-input' required/>
                    <button type="submit" className='signIn__form-btn'>Log In</button>
                </form>
                <p>Don't have an account, <Link to="/signUp"> Create Account</Link></p>
            </div>
        </div>
    </div>
  )
}

export default SignInPage