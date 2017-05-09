import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import NavBar from './pages/NavBar/NavBar'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Topics from './pages/Topics/Topics'

const App = () => (
  <Router>
    <div>
      <NavBar />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
)
export default App