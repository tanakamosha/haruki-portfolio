import React from 'react';
import Section from '../components/ui/Section';
import './About.css';

const About = () => {
    return (
        <div className="about-page page-transition">
            <Section className="about-header">
                <h1>ABOUT ME</h1>
                <p>Creator / Developer</p>
            </Section>

            <Section className="about-content">
                <div className="about-profile">
                    <div className="profile-image">
                        {/* Placeholder for profile image */}
                        <div className="profile-img-placeholder" style={{ overflow: 'hidden' }}>
                            <img
                                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2600&auto=format&fit=crop"
                                alt="Workspace"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                    <div className="profile-text">
                        <h2>Hi, I'm [Your Name].</h2>
                        <p>
                            「技術とデザインの融合」をテーマに活動するマルチクリエイター。
                            Webエンジニアとしての確かな技術力と、グラフィック・映像制作で培った表現力を掛け合わせ、
                            クライアントの想いを形にすることに情熱を注いでいます。
                        </p>
                        <p>
                            「ただ作るだけ」ではなく、クライアントのビジネス課題を解決するための「戦略的なクリエイティブ」を提案します。
                            最新のツールやトレンドも積極的に取り入れ、常に最適なソリューションを追求しています。
                        </p>

                        <div className="skills-section">
                            <h3>Skills & Tools</h3>
                            <div className="skills-list">
                                <div className="skill-item">
                                    <span className="skill-name">React / Next.js</span>
                                    <div className="skill-bar"><div className="skill-progress" style={{ width: '90%' }}></div></div>
                                </div>
                                <div className="skill-item">
                                    <span className="skill-name">Adobe Illustrator</span>
                                    <div className="skill-bar"><div className="skill-progress" style={{ width: '85%' }}></div></div>
                                </div>
                                <div className="skill-item">
                                    <span className="skill-name">Premiere Pro</span>
                                    <div className="skill-bar"><div className="skill-progress" style={{ width: '80%' }}></div></div>
                                </div>
                                <div className="skill-item">
                                    <span className="skill-name">Generative Tools</span>
                                    <div className="skill-bar"><div className="skill-progress" style={{ width: '85%' }}></div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            <Section>
                <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>YouTube Channel</h2>
                <div className="youtube-placeholder">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=placeholder"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
                <p style={{ textAlign: 'center', marginTop: '20px', color: 'var(--color-text-light)' }}>
                    制作過程やクリエイティブな情報を発信中。
                </p>
            </Section>
        </div>
    );
};

export default About;
