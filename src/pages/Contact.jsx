import React from 'react';
import Section from '../components/ui/Section';
import { Mail, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page page-transition">
            <Section className="contact-section">
                <div className="contact-content-centered">
                    <h1 className="section-title">CONTACT</h1>

                    <div className="contact-action-area flex flex-col items-center">
                        <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
                            制作のご依頼・ご相談は <span className="text-blue-600 font-black text-2xl">完全無料</span> です。
                        </p>

                        <a href="mailto:h.wakiyama@gmail.com" className="flex items-center gap-3 text-3xl font-bold text-slate-800 hover:text-blue-600 transition-all duration-300 hover:-translate-y-1" style={{ textDecoration: 'none' }}>
                            <Mail size={36} />
                            h.wakiyama@gmail.com
                        </a>

                        <div className="flex items-center gap-4 my-8 text-slate-400 font-medium select-none">
                            <span className="h-px w-12 bg-slate-300"></span> OR <span className="h-px w-12 bg-slate-300"></span>
                        </div>

                        <a href="mailto:h.wakiyama@gmail.com" className="btn-contact-custom px-16 w-auto min-w-[300px] transition-all duration-300 hover:bg-blue-700 hover:-translate-y-1 hover:shadow-lg">
                            お問い合わせフォームへ
                            <Send size={18} className="btn-icon" />
                        </a>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Contact;
