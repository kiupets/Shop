import React, { useState, useEffect } from 'react'
import './App.css'
import Shop from './pages/shopPage/Shop'
import Home from './pages/homePage/Home'
import Header from './components/header/Header'
import SignInSignUp from './components/signInSignUp/SignInSignUp'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { auth, createUserProfileDoc } from './firebase/firebase.utils'

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth)
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          })
        })
      } else {
        setCurrentUser(null)
      }
    })

    return () => unsubscribe()
  }, [])
  console.log(currentUser)
  return (
    <div>
      <BrowserRouter>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/signIn" component={SignInSignUp} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
