import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import About from './components/about/About';
import PortfolioList from './components/portfolio/PortfolioList';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import BackToTopButton from './components/commons/BackToTopButton';
import Footer from './components/footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init({
  offset: 400,
  duration: 800
});
AOS.init({
disable: function() {
  let maxWidth = 768;
  return window.innerWidth < maxWidth;
}

})

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <PortfolioList />
      <Skills />
      <BackToTopButton />
      <Contact />
      <Footer />
      

      
    </div>
  );
}

export default App;
