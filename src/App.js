import React from 'react'

import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import {Navbar, Home, LogIn, Register} from "./components/exports"

import {Post} from './components/exports'


function App() {
   return (
      <div className="App">
         <Router>
            <div>
               <Navbar />
               <Switch>
                  <Route exact path="/login" component={LogIn} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/" component={Home} />
                  <Route exact path="/post/:id" component={Post}/>                                  
               </Switch>
            </div>
         </Router>
      </div>
   )
}

export default App
