import React, { useState,useContext } from 'react'
import './sign-in.styles.scss'
import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'
import { signInWithGoogle } from '../../firebase/firebase.utils'
import {Context} from '../../context/userContext'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
 const { signIn} = useContext(Context)

  const handleSubmit =  (e) => {
    e.preventDefault()
    signIn(email,password)
    // try {
    //   await auth.signInWithEmailAndPassword(email, password)
    //   setEmail('')
    //   setPassword('')
    // } catch (e) {
    //   console.error(e)
    // }

  }

  return (
    <div className="sign-in">
      <div className="title">
        <h1>I already have an account</h1>
        <span>Sign In with your email and password</span>
      </div>

      <form onSubmit={handleSubmit}>
        <FormInput
          handleChange={(e) => setEmail(e.target.value)}
          name="Email"
          type="Email"
          value={email}
          label="Email"
          required
        />

        <FormInput
          handleChange={(e) => setPassword(e.target.value)}
          name="Password"
          type="Password"
          value={password}
          label="Password"
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign In with Google
          </CustomButton>
        </div>
      </form>
    </div>
  )
}

export default SignIn
