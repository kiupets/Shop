import React, { useContext } from 'react'
import { Context } from '../../context/userContext'
import Shop from '../../pages/shopPage/Shop'
import Home from '../../pages/homePage/Home'
import Header from '../header/Header'
import SignInSignUp from '../signInSignUp/SignInSignUp'
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'

const Routes = () => {
  const { state } = useContext(Context)
  const { currentUser } = state

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route
          exact
          path="/signIn"
          render={() => (currentUser ? <Redirect to="/" /> : <SignInSignUp />)}
        />
      </Switch>
    </BrowserRouter>
  )
}
export default Routes
