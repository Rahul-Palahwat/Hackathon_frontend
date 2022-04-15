import React, { useState } from 'react'
import { BrowserRouter as Router,Link,Route,Routes } from 'react-router-dom'
import About from './About'
import Nav from './Nav'
import Home from './Home'
import Login from './Login'
import Signup from './SignUp'

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (
        <Router>
            <Nav isLoggedIn={isLoggedIn}/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/about" element={<About/>}/>
                <Route exact path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
                <Route exact path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
                {/* <Route> {login?<Profile/>:<Redirect to="/"/>}</Route> */}
                {/* <Route exact path="*"><Error /></Route> */}
            </Routes>
        </Router>
    )
}

export default App

