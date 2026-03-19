import React from 'react';
import './Portfolio.css';
import { content } from '../contents/content.js';

const Portfolio = () => {
    return (
        <section id="portfolio" className="portfolio">
            <div className="container">
                <h2 className="section-title">{content.portfolio.title}</h2>
                <div className="projects-grid">
                    {content.portfolio.projects.map((project) => (
                        <div className="project-card" key={project.id}>
                            <div className="project-image">
                                <img src={`${import.meta.env.BASE_URL}${project.image}`} alt={project.title} />
                            </div>
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p>{project.category}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;