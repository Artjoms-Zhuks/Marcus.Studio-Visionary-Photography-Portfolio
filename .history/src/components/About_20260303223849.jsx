import React from 'react';
import './About.css';
import { content } from '../contents/content.js';

const About = () => (
    <section id="about" className="about-section">
        <div className="about-container" style={{ display: 'flex', alignItems: 'center', gap: '50px', padding: '100px 8%' }}>
            <img src={content.about.photo} style={{ width: '400px', borderRadius: '20px' }} alt="Marcus" />
            <div>
                <h2 style={{ fontSize: '48px', marginBottom: '20px' }}>About Me</h2>
                <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#444' }}>{content.about.text}</p>
            </div>
        </div>
    </section>
);

export default About;