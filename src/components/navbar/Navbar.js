import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            addClass: true,
            addRotate: true,
            makeTransparent: false
        }
        this.toggle = this.toggle.bind(this);

    }

    toggle() {
        this.setState({addClass : !this.state.addClass, addRotate : !this.state.addRotate, makeTransparent: !this.state.makeTransparent})
    }

    render() {
        
        let navLinksClass =["navbar-links open"];
        if(this.state.addClass) {
            navLinksClass.push("open");
        }

        let lineRotate1 =["line rotate-1"];
        if(this.state.addRotate) {
            lineRotate1.push("rotate-1");
        }

        let lineRotate2 =["line rotate-3"];
        if(this.state.addRotate) {
            lineRotate2.push("rotate-3");
        }

        let outsideLineUp =["upper-line"];
        if(this.state.makeTransparent) {
            outsideLineUp.push("make-transparent");
        }

        let outsideLineDown =["lower-line"];
        if(this.state.makeTransparent) {
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

                                <li className="nav-link grow"><a href="#home" data-aos="flip-down">Home</a></li>
                        <li className="nav-link grow"><a href="#about" className="grow">About</a></li>
                    <li className="nav-link grow"><a href="#portfolio" className="grow">Portfolio</a></li>
                <li className="nav-link grow"><a href="#skills" className="grow">Skills</a></li>
                <li className="nav-link grow"><a href="#contact" className="grow">Contact</a></li>
            </ul>
        </nav>
        )
    }
}

export default Navbar
