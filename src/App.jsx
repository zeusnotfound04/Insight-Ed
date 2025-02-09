
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar'
import  Hero  from './Components/Hero'
import OurParterns from './Components/ui/Partners'
import ScrollAnimation from "./Components/UIShowcase"
import { HashRouter } from 'react-router-dom'
import Footer from './Components/Footer'
import FAQ from './Components/FAQ'
import Pricing from './Components/Pricing'
function App() {


  return (
    <>
      <Router>
        <Navbar/>     
        <Hero/>
        <OurParterns/>
        <ScrollAnimation/>
        <Pricing/>
        <FAQ/>
        <Footer/>
      </Router>
    </>
  )
}

export default App
