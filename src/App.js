import React from 'react';
import './App.css';
import Shop from './pages/shopPage/Shop';
import Home from './pages/homePage/Home';
import {Switch, Route,BrowserRouter} from 'react-router-dom';

function App () {
  return (
    <div>
      <BrowserRouter>
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
