import React, { useState, useContext } from 'react'
import FormInput from '../form-input/FormInput'

import CustomButton from '../custom-button/CustomButton'
import './sign-up.styles.scss'
import { Context } from '../../context/userContext'

const SignUp = () => {
  const [statee, setStatee] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    displayName: '',
  })
  const { signUp } = useContext(Context)
  const handleSubmit = (e) => {
    e.preventDefault()
    const { email, password, confirmPassword, displayName } = statee
    if (password !== confirmPassword) {
      return
    }
    signUp(email, password, confirmPassword, displayName)
    setStatee({
      email: '',
      password: '',
      confirmPassword: '',
      displayName: '',
    })
   
  }

  return (
    <div className="sign-up">
      <div className="title">
        <h1>I dont have an account</h1>
        <span>Sign Up with your email and password</span>
      </div>
      <form onSubmit={handleSubmit}>
        <FormInput
          handleChange={(e) => {
            console.log(e.target.value)
            setStatee({
              ...statee,
              email: e.target.value,
            })
          }}
          name="Email"
          type="Email"
          value={statee.email}
          label="Email"
          required
        />
        <FormInput
          handleChange={(e) =>
            setStatee({
              ...statee,
              password: e.target.value,
            })
          }
          name="Password"
          type="Password"
          value={statee.password}
          label="Password"
          required
        />
        <FormInput
          handleChange={(e) =>
            setStatee({
              ...statee,
              confirmPassword: e.target.value,
            })
          }
          name="confirmPassword"
          type="confirmPassword"
          value={statee.confirmPassword}
          label="confirmPassword"
          required
        />
        <FormInput
          handleChange={(e) =>
            setStatee({
              ...statee,
              displayName: e.target.value,
            })
          }
          name="Name"
          type="Name"
          value={statee.displayName}
          label="Name"
          required
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  )
}

export default SignUp
