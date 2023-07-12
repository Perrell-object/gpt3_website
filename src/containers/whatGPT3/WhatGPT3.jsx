import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="Leverage GPT-3 comprehensive AI development expertise to maximize your businesses potential. GPT-3 is a part of the Napkin Array Developments. Founded in 2018 CEO Perrell and his team have been helping clients automate and solve problems." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="Language synthesis knowledge response Chatbot development Model tuning." />
      <Feature title="Knowledgebase" text="Document categorisation Data mining Text summarisation Entity identifcation" />
      <Feature title="AI Consulting" text="Feasibility assesments Use case identification Performance evaulation Strategy development" />
    </div>
  </div>
);

export default WhatGPT3;