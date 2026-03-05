import React from 'react';
import { content } from '../contents/content.js';

const Services = () => {
    return (
        <section id="services" style={{ padding: '80px 8%', background: '#f9f9f9' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '32px', color: '#1a1a1a' }}>
                Our Services
            </h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '20px'
            }}>
                {content.services.map((service, index) => (
                    <div key={index} style={{
                        background: 'white',
                        padding: '30px',
                        borderRadius: '15px',
                        textAlign: 'center',
                        boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
                    }}>
                        <h3 style={{ marginBottom: '10px', color: '#1a1a1a' }}>{service.title}</h3>
                        <p style={{ color: '#666' }}>{service.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;