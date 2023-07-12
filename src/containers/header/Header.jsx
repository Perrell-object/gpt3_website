import React from 'react'
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Let&apos;s Build Something amazing with GPT-3 OpenAI</h1>
        <p>GPT-3 AI is your full-cycle AI development partner, from concept to production and beyond. We're not just machine learning specialists, we're the team that helps startups and enterprises create cutting-edge AI products that optimize efficiency and accelerate growth.</p>

        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="people"/>
          <p>1.600 people requested access a visit in the last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
          <img src={ai} alt="ai" />
      </div>
    </div>
  );

export default Header
