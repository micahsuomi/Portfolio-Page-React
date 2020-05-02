import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import '../../assets/style/Navbar.css';

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            isClicked: false,
            addClass: true,
            addRotate: true,
            makeTransparent: false
        }
        this.toggle = this.toggle.bind(this);

    }

    toggle() {
        this.setState({
            isClicked: false,
            addClass : !this.state.addClass, 
            addRotate : !this.state.addRotate, 
            makeTransparent: !this.state.makeTransparent
        })
    }

    closeNavigation = () => {
        this.setState({
            isClicked: true,
            addClass : !this.state.addClass,  
            addRotate: !this.state.addRotate,
            makeTransparent : !this.state.makeTransparent, 


        })
        this.toggle()
    }

    render() {
      
        let navLinksClass =["navbar-links open close"];
        if(this.state.addClass === false && this.state.isClicked === false) {
            navLinksClass.push("open");
            console.log(navLinksClass)
        }
           
        let lineRotate1 = ["line rotate-1"];
        if(this.state.addRotate === true) {
            console.log('here rotating')
            lineRotate1.push("rotate-1");
        }

        let lineRotate2 =["line rotate-3"];
        if(this.state.addRotate) {
            lineRotate2.push("rotate-3");

        } 

        let outsideLineUp =["upper-line"];
        if(this.state.makeTransparent === true) {
            outsideLineUp.push("make-transparent");
        }

        let outsideLineDown =["lower-line"];
        if(this.state.makeTransparent === true) {
             outsideLineDown.push("make-transparent");
         } 


        return (
                <nav data-aos="fade-down">
                <div className="hamburger" onClick={this.toggle}>
                <div className={outsideLineUp.join('')}></div>
                    <div className={lineRotate1.join('')}></div>
                        <div className={lineRotate2.join('')} id="line2"></div>
                            <div className={outsideLineDown.join('')} id="lower-line"></div>
                                </div>
                                <ul className={navLinksClass.join('')}>

                            <li className="nav-link grow">
                            <NavLink to ="/"
                            onClick={this.closeNavigation}
                            activeStyle={activeStyleNav}
                            exact>
                            Home
                            </NavLink>
                            </li>

                            <li className="nav-link grow">
                            <NavLink to="/about"
                            onClick={this.closeNavigation}
                            activeStyle={activeStyleNav}>
                                About
                                </NavLink>
                                </li>
                                
                                <li className="nav-link grow">
                                    <NavLink to="/portfolio"
                                    onClick={this.closeNavigation}
                                    activeStyle={activeStyleNav}>
                                    Portfolio
                                    </NavLink>
                                    </li>

                    <li className="nav-link grow">
                    <NavLink to="/eduskills"
                    onClick={this.closeNavigation}
                    activeStyle={activeStyleNav}>
                        Education and Skills
                    </NavLink>
                    </li>

                <li className="nav-link grow">
                <NavLink to ="/contact"
                onClick={this.closeNavigation}
                activeStyle={activeStyleNav}>
                Contact
                </NavLink>

                </li>
            </ul>
        </nav>
        )
    }
}

let activeStyleNav = {borderBottom: '1px solid var(--shadow)'}
export default Navbar
