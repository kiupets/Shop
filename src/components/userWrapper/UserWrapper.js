import React, { useReducer, useEffect, useState,useContext } from 'react'
import * as R from 'ramda'
import {Context} from '../../context/userContext'
import { createUserProfileDoc, auth } from '../../firebase/firebase.utils'
import Routes from '../routes/Routes'


const UserWrapper = () => {
    const {state,setUserState} = useContext(Context)
    console.log(state)
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
        if (userAuth) {
          const userRef = await createUserProfileDoc(userAuth)
          userRef.onSnapshot((snapshot) => {
            // setCurrentUser({
            //   id: snapshot.id,
            //   ...snapshot.data(),
            // })
            setUserState({ id: snapshot.id, ...snapshot.data()})
          })
        } else {
          // setCurrentUser(null)
          setUserState(null)
        }
      })

      return () => unsubscribe()
    }, [])
    
    return (
  <Routes/>
    )
}

export default UserWrapper

