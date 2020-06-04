import React from 'react'
import './sign.styles.scss'
import SignIn from '../sign-in/SignIn'
import SignUp from '../sign-up/SignUp'

const SignInSignUp = () => {
  return (
    <div className="sign-in-sign-up">
      <SignIn />
      <SignUp />
    </div>
  )
}

export default SignInSignUp
