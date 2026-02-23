import React from 'react';
import Section from '../components/ui/Section';
import './Contact.css';

const Contact = () => {
    // Scroll Fade-in Logic (Mirrored from Service.jsx)
    React.useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const elements = document.querySelectorAll('.fade-in-section');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="contact-page page-transition">
            <Section className="contact-header fade-in-section">
                {/* Background Watermark (Physical DOM) */}
                <div style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "15vw",
                    fontWeight: "900",
                    color: "#f3f4f6", /* Very light gray */
                    zIndex: 0,
                    pointerEvents: "none",
                    whiteSpace: "nowrap",
                    userSelect: "none",
                    lineHeight: 1
                }}>
                    CONTACT
                </div>

                {/* Content Layer */}
                <h1 style={{ position: 'relative', zIndex: 10 }}>CONTACT</h1>
                <p style={{ position: 'relative', zIndex: 10 }}>お仕事のご相談・お見積もりなど、お気軽にお問い合わせください。</p>
            </Section>

            {/* Contact Form Section */}
            <Section>
                <div className="contact-form-container fade-in-section" style={{ transitionDelay: '200ms' }}>
                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>

                        {/* Name */}
                        <div className="form-group">
                            <label className="form-label-required">お名前</label>
                            <input type="text" className="form-input" placeholder="例：田中 太郎" required />
                        </div>

                        {/* Company */}
                        <div className="form-group">
                            <label className="form-label-optional">会社名</label>
                            <input type="text" className="form-input" placeholder="例：株式会社〇〇" />
                        </div>

                        {/* Email */}
                        <div className="form-group">
                            <label className="form-label-required">メールアドレス</label>
                            <input type="email" className="form-input" placeholder="例：info@example.com" required />
                        </div>

                        {/* Category */}
                        <div className="form-group">
                            <label className="form-label-required">ご相談内容</label>
                            <select className="form-select">
                                <option value="web">Webサイト制作・開発</option>
                                <option value="graphic">グラフィックデザイン</option>
                                <option value="video">動画編集・映像制作</option>
                                <option value="other">その他</option>
                            </select>
                        </div>

                        {/* Message */}
                        <div className="form-group">
                            <label className="form-label-required">メッセージ本文</label>
                            <textarea className="form-textarea" placeholder="お問い合わせ内容をご記入ください" required></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="btn-submit-wrapper">
                            <button type="submit" className="btn-submit">
                                この内容で送信する
                            </button>
                        </div>

                    </form>
                </div>
            </Section>

            {/* Coconala Referral Section */}
            <Section>
                <div className="coconala-container fade-in-section" style={{ transitionDelay: '400ms' }}>
                    <div className="coconala-card">
                        <h3>ココナラ経由でのご依頼も承っております</h3>
                        <p>
                            匿名でのやり取りや、安心の決済システムをご希望のお客様は、<br className="hidden md:block" />
                            クラウドソーシングサイト『ココナラ』の専用ページからもご相談・お見積りが可能です。
                        </p>
                        <a
                            href="https://coconala.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hero-cta-button"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '1rem 2rem',
                                fontSize: '1.1rem',
                                fontWeight: '700',
                                color: '#fff',
                                backgroundColor: '#00c4cc',
                                borderRadius: '9999px',
                                textDecoration: 'none',
                                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                                minWidth: '280px',
                                transition: 'all 0.3s ease',
                                letterSpacing: '0.05em'
                            }}
                        >
                            ココナラで相談する
                        </a>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Contact;
