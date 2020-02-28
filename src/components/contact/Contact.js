import React from 'react';
import '../../assets/style/Contact.css';
import card1 from '../../assets/imgs/card3.png';
import card2 from '../../assets/imgs/card5.png';
import card3 from '../../assets/imgs/card4.png';
import reactLogo from '../../assets/imgs/react-logo.png';

const Contact = () => {
    const cards = [card1, card2, card3];
    const formattedCards = cards.map((card) => <a href='https://michelezucca.com/' target="blank"><img src={card} alt="card-img" /></a>)
    
    return (
        <div className="contact-container headline" data-aos="fade-left" id="contact">
        <h1>Contact</h1>
        <div className="contact-grid tagline">
        <div className="cards" data-aos="flip-left">
                <a href="https://michelezucca.com/" target="blank"><img src={card1} className="card-img card-img1 grow" alt="card 1 painting" /></a>
                <a href="https://michelezucca.com/" target="blank"><img src={card2} className="card-img card-img2 grow" alt="card 2 painting" /></a>
                <a href="https://michelezucca.com/" target="blank"><img src={card3} className="card-img card-img3 grow" alt="card 3 painting" /></a>
            </div>
            <div className="contact-text" data-aos="flip-right">
                <p>You can pop me an email at <a href="mailto:michele.zucca81@gmail.com" className="contact-link">michele.zucca81@gmail.com</a> or connect with me on<a href="https://www.linkedin.com/in/michele-zucca/" className="contact-link grow" target="blank"><span className="highlight grow"> Linkedin</span></a>. I'm also on <a href="https://www.behance.net/michelezucca" className="contact-link" target="blank">Behance</a> and <a href="https://www.artstation.com/michele_zucca" className="contact-link" target="blank">Art Station. </a></p>
                <br />
                <br />
                <p>If you have 5 minutes to spare, check out my art <a href="https://michelezucca.com/" className="contact-link" target="blank"><span className="highlight grow">website</span></a>.</p>
                <div className="page-built-container"><h2 className="page-built-header">Portfolio Page built with React</h2><img src={reactLogo} className="react-logo" alt ="react logo" /></div>
            </div>
           
        </div>
        </div>

    
    )
}

export default Contact;
