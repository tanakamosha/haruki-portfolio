import React from 'react';
import Section from '../components/ui/Section';
import { Mail, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page page-transition">
            <Section className="contact-section">
                <div className="contact-content-centered max-w-4xl mx-auto px-4 pb-40">
                    <div style={{ marginBottom: '60px', textAlign: 'center' }}>
                        <h1 className="section-title text-4xl font-bold tracking-widest mb-2">CONTACT</h1>
                        <span className="text-slate-600">お問い合わせ</span>
                    </div>

                    <div className="contact-action-area bg-white shadow-2xl rounded-2xl p-10 md:p-16 border border-gray-100 flex flex-col items-center">
                        <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
                            制作のご依頼・ご相談は <span className="text-slate-900 bg-yellow-300 px-2 py-1 rounded font-black text-2xl inline-block transform -rotate-1 mx-1">完全無料</span> です。
                        </p>

                        <a href="mailto:h.wakiyama@gmail.com" className="flex items-center gap-3 text-3xl font-bold text-slate-800 hover:text-blue-600 transition-all duration-300 hover:-translate-y-1" style={{ textDecoration: 'none' }}>
                            <Mail size={36} />
                            h.wakiyama@gmail.com
                        </a>

                        <div className="flex items-center gap-4 my-8 text-slate-400 font-medium select-none">
                            <span className="h-px w-12 bg-slate-300"></span> OR <span className="h-px w-12 bg-slate-300"></span>
                        </div>

                        <a href="mailto:h.wakiyama@gmail.com"
                            className="btn-contact-custom mb-12 text-lg"
                            style={{
                                width: '280px',
                                minWidth: '280px',
                                maxWidth: '280px',
                                display: 'inline-flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '0 auto'
                            }}
                        >
                            お問い合わせフォームへ
                            <Send size={18} className="btn-icon ml-2 inline-block" />
                        </a>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Contact;
