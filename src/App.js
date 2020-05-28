import React,{useState, useEffect} from 'react';
import './App.css';
import Shop from './pages/shopPage/Shop';
import Home from './pages/homePage/Home';
import Header from './components/header/Header'
import SignInSignUp from './components/signInSignUp/SignInSignUp'
import {Switch, Route,BrowserRouter} from 'react-router-dom';
import { auth } from './firebase/firebase.utils'

function App () {

  const [currentUser, setCurrentUser] = useState(null)
  useEffect(()=>{
   const unsubscribe =  auth.onAuthStateChanged(setCurrentUser)
   return () =>  unsubscribe()
  },[currentUser])

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
  );
}

export default App;
