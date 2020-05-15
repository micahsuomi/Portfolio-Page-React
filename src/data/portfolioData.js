import { v4 as uuidv4 } from 'uuid';
import imageCrypto from '../assets/imgs/app-1-big.jpg';
import imageReact from '../assets/imgs/app-2-big.jpg';
import imageBlog from '../assets/imgs/app-3-big.jpg';
import imageWeather from '../assets/imgs/app-4-big.jpg';
import imageJavaScript from '../assets/imgs/app-5.jpg';
import imageWorld from '../assets/imgs/app-6.jpg';
import imageBudget from '../assets/imgs/app-7.jpg';
import imageSolidify from '../assets/imgs/app-8.jpg';
import imageNoirflix from '../assets/imgs/app-9.jpg';
import imageEvenFlow from '../assets/imgs/app-10.jpg';
import imageSketch from '../assets/imgs/app-11.jpg';
import imageEat from '../assets/imgs/app-12.jpg';

import html from '../assets/imgs/html-logo.png';
import css from '../assets/imgs/css-logo.png';
import sass from '../assets/imgs/sass-logo.png';
import bootstrap from '../assets/imgs/bootstrap-logo.png';
import javaScript from '../assets/imgs/js-logo.png'
import react from '../assets/imgs/react-logo.png';



export const portfolioData = [

    {
        id: uuidv4(),
        img: imageCrypto,
        name: "Crypto Lite",
        type: "React App",
        description: "This project displays real data from cryptocurrencies API : it features market data, a cryptocurrency converter, a watchlist, crypto wallets and exchangs, and live news.This is a personal project I have been working on outside of Integrify: I am a huge supporter of blockchain technology and cryptocurrency. This website is my way to contribute and to support the crypto and blockchain community.",
        techs: [html, css, javaScript, react],
        url: "https://crypto-lite-tracker.netlify.com/",
        githubUrl: "https://github.com/micahsuomi/Crypto-Tracker-React-App"

        
    },

    {
        id: uuidv4(),
        img: imageReact,
        name: "React Mini Apps",
        type: "React App",
        description: "These are mini React apps built with create-react-app. These projects are either my own projects or projects built during my study time at Integrify Coding Academy in Helsinki. They are simple in design and functionality (that's why they are mini-apps) but they use plenty of anything a developer can implement with React components.",
        techs: [html, css, javaScript, react],
        url: "https://react-mini-apps.netlify.com/",
        githubUrl: "https://github.com/micahsuomi/React-Mini-Apps"

        
    },

    {
        id: uuidv4(),
        img: imageBlog,
        name: "React Blog App",
        type: "React App",
        description: "This is a CRUD app that displays posts from the most recent one. User can add new posts, view, edit or delete single posts. The app has been built with React router which lets the user navigate through the different app's functionality. ",
        techs: [html, css, javaScript, react],
        url: "https://blog-app-react-router.netlify.com/",
        githubUrl: "https://github.com/micahsuomi/Router-App-blog"

    },


    {
        id: uuidv4(),
        img: imageWeather,
        name: "Countries and Weather Data",
        type: "React App",
        description: "This is a React project built during my studies at Integrify. It uses countries data and weather APIs with search and sorting functions. The user can sort and view different results for countries' data and search weather data by city, adding results into a watchlist.",
        techs: [html, css, javaScript, react],
        url: "https://weather-countries-data-react-app.netlify.com/?_ga=2.21003827.986614943.1584280711-1552463421.1569967762",
        githubUrl: "https://github.com/micahsuomi/Weather-and-countries-data-react-app"

    },

    {
        id: uuidv4(),
        img: imageJavaScript,
        name: "JavaScript Mini Apps",
        type: "JavaScript",
        description: "These JavaScript mini apps are all different projects built during my studying at Integrify Coding Academy in Helsinki. They are either part of the Integrify curricula or projects coded within the 30 Days JavaScript Challenge created by my teacher Asabeneh Yetayeh. Thanks to these projects, coded entirely from scratch, with no help from videos or coding along with tutorials, I have strengthened considerably my problem-solving skills, and I have improved my ability to be an active learner and to think and structure the code from scratch.",
        techs: [html, css, javaScript],
        url: "https://micahsuomi.github.io/JavaScript-Mini-Apps/",
        githubUrl: "https://github.com/micahsuomi/JavaScript-Mini-Apps"

        
    },

    {
        id: uuidv4(),
        img: imageWorld,
        name: "World Countries Data",
        type: "JavaScript App",
        description: "This app made during my study time at Integrify shows countries' data with different sorting functions, by name, capital, and population through a search option. There are also statistics for population and languages built with pure JavaScript without the use of any library or plugins.",
        techs: [html, css, javaScript],
        url: "https://micahsuomi.github.io/World-Countries-Data/",
        githubUrl: "https://github.com/micahsuomi/World-Countries-Data"
    },

    {
        id: uuidv4(),
        img: imageBudget,
        name: "Budget App",
        type: "JavaScript",
        description: "This simple app was built during my study time at Integrify with JavaScript. Users can add or delete expenses and income and the app will calculate the account balance and percentage of expenses related to income. ",
        techs: [html, css, javaScript],
        url: "https://micahsuomi.github.io/Budget-Web-App/",
        githubUrl: "https://github.com/micahsuomi/Budget-Web-App"
    },
    {
        id: uuidv4(),
        img: imageSolidify,
        name: "Solidify",
        type: "Website",
        description: "My very first website built when studying web development. The website is about a fictitious blockchain company in various pages and uses mostly dummy data to display information. Some JavaScript was added later on to fetch cryptocurrency price data from the CryptoCompare APIs.",
        techs: [html, css, javaScript],
        url: 'https://solidifyblockchain.netlify.com/',
        githubUrl: "https://github.com/micahsuomi/Solidify"

    },

    {
        id: uuidv4(),
        img: imageNoirflix,
        name: "Noirflix",
        type: "Website with Bootstrap",
        description: "Netflix is probably my favorite app and website, therefore I created this fictitious landing pages when studying web development as self-thought. The site uses HTML and CSS with the Bootstrap library and displays information on movies.",
        techs: [html, css, bootstrap],
        url: 'https://noirflix.netlify.com/',
        githubUrl: "https://github.com/micahsuomi/Noirflix"

        
    },

    {
        id: uuidv4(),
        img: imageEvenFlow,
        name: "Evenflow",
        type: "Website",
        url: 'https://evenflow.netlify.com/',
        description: "Music is one of my big passions, therefore this fictitious website is an homage to the music industry. These pages use mostly HTML and CSS, and I used this website to practice mostly layouts, CSS grid and flexbox.",
        techs: [html, css],
        githubUrl: "https://github.com/micahsuomi/Evenflow"

    },

    {
        id: uuidv4(),
        img: imageSketch,
        name: "Sketch Like a Pro",
        type: "Landing Page",
        description: "Traditional and digital art is another passion of mine. When I'm not coding, I'm usually painting and I have been practicing digital design, especially character illustrations. This landing page displays my own character creations using some CSS and JavaScript animations, including JS liquid image transition.",
        techs: [html, css, javaScript],
        url: "https://sketchlikeapro.netlify.com/",
        githubUrl: "https://github.com/micahsuomi/Sketch-like-a-Pro"

    },

    {
        id: uuidv4(),
        img: imageEat,
        name: "EAT.TASTE.TRY.",
        type: "Landing Page with Sass",
        description: "I am very passionate about cooking. This landing page was built with Sass and uses all CSS features, including the grid and flexbox. The landing page displays dummy data on food and cuisine and shows my passion for creating clean layouts and designs. The hero section is very much inspired on Jonas Schmedtmann design.",
        techs: [html, css, sass],
        url: "https://eat-taste-try.netlify.com/",
        githubUrl: "https://github.com/micahsuomi/EAT.TASTE.TRY"


    }
   
]

export default portfolioData;