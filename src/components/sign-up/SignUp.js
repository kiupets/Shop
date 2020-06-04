import React, { useState } from 'react'
import FormInput from '../form-input/FormInput'
import { auth, createUserProfileDoc } from '../../firebase/firebase.utils'
import CustomButton from '../custom-button/CustomButton'
import './sign-up.styles.scss'

const SignUp = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    displayName: '',
  })
  const handleSubmit = async (e) => {
    console.log('haofasodfa;sd')
    e.preventDefault()
    const { email, password, confirmPassword, displayName } = state
    if (password == !confirmPassword) {
      return
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password,
      )
      await createUserProfileDoc(user, { displayName })
      setState({
        email: '',
        password: '',
        confirmPassword: '',
        displayName: '',
      })
    } catch (e) {
      console.error(e)
    }
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
          setState({
            ...state,
            email: e.target.value,
          })
        }}
        name="Email"
        type="Email"
        value={state.email}
        label="Email"
        required
      />
      <FormInput
        handleChange={(e) =>
          setState({
            ...state,
            password: e.target.value,
          })
        }
        name="Password"
        type="Password"
        value={state.password}
        label="Password"
        required
      />
      <FormInput
        handleChange={(e) =>
          setState({
            ...state,
            confirmPassword: e.target.value,
          })
        }
        name="confirmPassword"
        type="confirmPassword"
        value={state.confirmPassword}
        label="confirmPassword"
        required
      />
      <FormInput
        handleChange={(e) =>
          setState({
            ...state,
            Name: e.target.value,
          })
        }
        name="Name"
        type="Name"
        value={state.displayName}
        label="Name"
        required
      />
      <CustomButton type="submit" >
        Sign Up
      </CustomButton>
      </form>
      
    </div>
  )
}

export default SignUp
