import "./styles/style.css";
import "./styles/media.css";
import {data} from "./components/Data/data"
import { useState } from "react";

import logo from "./images/logo.png";

import vk from "./images/vk.png";
import youtube from "./images/youtube.png";
import facebook from "./images/facebook.png";
import instagram from "./images/instagram.png";

import intro from "./images/intro_img.png";



import CurrentSpecials from "./components/CurrentSpecials/CurrentSpecials";


function App() {

  const [cards] = useState(data);
 

  return (
    <div className="App">

      <header>
        
        <div className="wrapper header-wrapper">
            <img className="logo" src={logo} alt=""/>
          <div className="header-icons">
            <img className="header-icon" src={vk} alt=""/>
            <img className="header-icon" src={youtube} alt=""/>
            <img className="header-icon" src={facebook} alt=""/>
            <img className="header-icon" src={instagram} alt=""/>
          </div>
        </div>

      </header>

      
      <section className="intro">

        <div className="wrapper intro-wrapper">

          <nav className="intro-nav">
            <a href="#" className="nav-link">Светильники</a>
            <a href="#" className="nav-link">Лампочки</a>
            <a href="#" className="nav-link">Декоративные</a>
            <a href="#" className="nav-link">Профессиональные</a>
            <a href="#" className="nav-link">Контакты</a>
            <a href="tel:+966555101010" className="nav-link">Связаться</a>
          </nav>

          <div className="intro-info">

            <div className="intro-text">
              <h1 className="intro-title">Светильники</h1>
              <p className="intro-descr">
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Quia ad accusantium modi at officia vel
                hic ipsum architecto unde, ea vero enim! Dolorum, fuga 
                excepturi delectus error labore a illum.
              </p>
                      <button className="intro-bth">Подробнее</button>
            </div>

            <div className="intro-img">
              <img  src={intro} alt=""/>
            </div>

          </div>
        </div>

      </section>

      <CurrentSpecials cards={cards}/>

      <footer className="wrapper footer-wrapper"> 
                  <div className="footer-icons">
                      <img className="footer-icon" src={vk} alt=""/>
                      <img className="footer-icon" src={youtube} alt=""/>
                      <img className="footer-icon" src={facebook} alt=""/>
                      <img className="footer-icon" src={instagram} alt=""/>
                  </div>
      </footer>
    
    </div>
  );
}

export default App;
