import React from 'react';

import './Header.css';
import { content } from '../contents/content.js';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                {content.header.logo}
            </div>
            <nav className="nav">
                <ul>
                    {content.header.menu.map((item, index) => (
                        <li key={index}>
                            <a href={`#${item.toLowerCase()}`}>{item}</a>
                        </li>
                    ))}
                    <li>
                        <a href="#contact" className="contact-btn">
                            {content.header.buttonText}
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;