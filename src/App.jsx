import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Experience from './Components/Experience/Experience'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App