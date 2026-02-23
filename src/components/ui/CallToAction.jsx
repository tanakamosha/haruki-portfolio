import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ExternalLink } from 'lucide-react';

const CallToAction = () => {
    return (
        <section className="section-cta fade-in-section" style={{ padding: '80px 20px', textAlign: 'center', backgroundColor: '#f8fafc' }}>
            <div className="cta-container max-w-4xl mx-auto">
                <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#0f172a' }}>CONTACT</h2>
                <p style={{ color: '#64748b', marginBottom: '40px', fontSize: '1.1rem' }}>
                    まずはお気軽にご相談ください。<br />
                    あなたのビジネスをデザインの力で加速させます。
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link to="/contact" className="hero-cta-button" style={{
                        /* Using hero-cta-button class for consistent Primary Button style */
                        minWidth: '280px',
                        justifyContent: 'center' /* Ensure text centering */
                    }}>
                        <Mail size={20} style={{ marginRight: '10px' }} />
                        お問い合わせ
                    </Link>

                    <a
                        href="https://coconala.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '1rem 2rem', /* Match hero-cta-button */
                            fontSize: '1.1rem', /* Match hero-cta-button approx */
                            fontWeight: '700', /* Match hero-cta-button */
                            color: '#fff',
                            backgroundColor: '#00c4cc',
                            borderRadius: '9999px', /* Match hero-cta-button (Pill) */
                            textDecoration: 'none',
                            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)', /* Match hero-cta-button */
                            minWidth: '280px',
                            transition: 'all 0.3s ease',
                            letterSpacing: '0.05em'
                        }}
                    >
                        <ExternalLink size={20} style={{ marginRight: '10px' }} />
                        ココナラで相談
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
