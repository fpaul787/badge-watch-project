import React from 'react'

import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home'
import Post from './components/Post'

function App() {
   return (
      <div className="App">
         <Router>
            <div>
               <Navbar />
               <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/post/:id" component={Post}/>
                  
               </Switch>

            </div>
         </Router>
      </div>
   )
}

export default App
