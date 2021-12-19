import './App.css';
import { Layout } from './layout';
import {Home, Currency, Login} from './pages';
import { Nav, Footer } from './layout';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

function App() {
  const adminUser = {
    login: "admin",
    password: "1234"
  }

  const [user, setUser] = useState({login: "", password: ""});

  if(!user) {
    return <Login setUser={setUser} />
  }
  
  return (
    <div className='flex flex-col min-h-screen text'>
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/currency'>
          <Currency />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
