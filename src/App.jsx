import React from 'react';
import Info from'./component/aboutus/Info.jsx';
import Upload from'./component/upload/Upload.jsx';
import Testimonial from'./component/testimonial/Testimonial.jsx';
import Footer from './component/footer/Footer.jsx';
import Homescreen from './component/homescreen/Homescreen.jsx';
import Nav from './component/nav/Nav.jsx';

function App() {
  return (
    <>
    
    <Homescreen/>
    <Nav/>
    <Info/>
    <Upload/>
    <Testimonial/>
    <Footer/>
    </>
  )
}

export default App
