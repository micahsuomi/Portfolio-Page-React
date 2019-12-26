import React from 'react';
import './BackToTopButton.css';

const BackToTopButton = () => {
    window.onscroll = function() {
        scrollFunction()
    };
    
    const scrollFunction = () => {
        if(document.body.scrollTop > 40 ||
        document.documentElement.scrollTop > 40) {
            document.getElementById("myBtn").style.display ="block";
        } else {
            document.getElementById("myBtn").style.display ="none";
        }
    }
    
    //when the user clicks on the button, the the function topFunction() is called and the page goes back to top 
    const topFunction = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        console.log('working')
    }
    return (
        <div>
             <button onClick={topFunction} class="btn-info" id="myBtn" title="Go to Top"><i class="fas fa-chevron-up"></i></button>
        </div>
    )
}

export default BackToTopButton;
