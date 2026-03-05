import React from 'react';
import './Footer.css';
import { content } from '../contents/content.js';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="footer-container">
                <span className="footer-subtitle">Contact</span>
                <h2 className="footer-title">{content.footer.title}</h2>

                <a href={`mailto:${content.footer.email}`} className="email-link">
                    {content.footer.email}
                </a>

                <div className="social-links">
                    {content.footer.socials.map((soc, index) => (
                        <a key={index} href={soc.link} target="_blank" rel="noreferrer">
                            {soc.name}
                        </a>
                    ))}
                </div>

                <div className="footer-bottom">
                    <p className="copyright">{content.footer.copy}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;