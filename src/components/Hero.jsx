import React from 'react';
import './Hero.css';
import { content } from '../contents/content.js';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <video autoPlay loop muted className="hero-video">
                <source src={content.hero.videoUrl} type="video/mp4" />
            </video>
            <div className="hero-overlay">
                <h1>{content.hero.title}</h1>
                <h2>{content.hero.name}</h2>
                <a href="#portfolio" className="btn-primary">{content.hero.primaryBtn}</a>
            </div>
        </section>
    );
};

export default Hero;