import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/header/Home';
import About from './components/about/About';
import PortfolioList from './components/portfolio/PortfolioList';
import ViewItem from './components/portfolio/ViewItem';
import EducationSkills from './components/skills/Education&Skills';
import Contact from './components/contact/Contact';
import BackToTopButton from './components/commons/BackToTopButton';
import Footer from './components/footer/Footer';
import {portfolioData} from './data/portfolioData';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


AOS.init({
  offset: 200,
  duration: 800,

});

AOS.init({
disable: function() {
  let maxWidth = 800;
  return window.innerWidth < maxWidth;
}

})


class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
              portfolio: portfolioData
      }
  }
  render() {
    for(const item of this.state.portfolio) {
      let {name} = item
      console.log(name)
    }
    return (
      <Router>

      <div className="App">
        <Navbar />
        <Switch>
        <Route path={'/about'} component={About} />

        <Route path={'/portfolio'} 
        component={(props) =><PortfolioList
        portfolio={this.state.portfolio}
        id={props.match.params.id}
        {...props} />} />

        <Route path={'/viewitem/:id'} 
        component={(props) => <ViewItem
        portfolio={this.state.portfolio}
        id={props.match.params.id}
        {...props} />} />

        <Route path={'/eduskills'} component={EducationSkills} />

        <Route path={'/contact'} component={Contact} />

        <Route path={'/'} component={Home} />

        <BackToTopButton />
        </Switch>
        <Footer />
        
      </div>
      </Router>
    )
  }
}

export default App

