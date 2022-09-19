import React from 'react'

const SignUpPage = () => {
  return (
    <div className='signIn__wrapper'>
        <div className="container">
            <div className="signIn__container">
                <form>
                    <h3>Create Account</h3>
                    <input type="email" placeholder='Email' className='signIn__form-input' required/>
                    <input type="password" placeholder='Create Password' className='signIn__form-input' required/>
                    <input type="password" placeholder='Password' className='signIn__form-input' required/>
                    <button type="submit" className='signIn__form-btn'>Create Account</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SignUpPage