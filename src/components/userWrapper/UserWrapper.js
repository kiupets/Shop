import React, { useEffect, useContext } from 'react'
import { Context } from '../../context/userContext'
import { createUserProfileDoc, auth } from '../../firebase/firebase.utils'
import Routes from '../routes/Routes'

const UserWrapper = () => {
  const { setUserState } = useContext(Context)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth)
        userRef.onSnapshot((snapshot) => {
          setUserState({ id: snapshot.id, ...snapshot.data() })
        })
      } else {
        setUserState(null)
      }
    })

    return () => unsubscribe()
  }, [])

  return <Routes />
}

export default UserWrapper
