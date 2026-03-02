import React from 'react';
import Section from '../components/ui/Section';
import CallToAction from '../components/ui/CallToAction';
import './About.css';

// Tech Logo Icons (Monochromatic inline SVGs for premium feel)
const TechIcon = ({ name }) => {
    switch (name) {
        case 'React':
            return <svg viewBox="-11.5 -10.23174 23 20.46348" width="32" height="32"><circle cx="0" cy="0" r="2.05" fill="currentColor" /><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2" /><ellipse rx="11" ry="4.2" transform="rotate(60)" /><ellipse rx="11" ry="4.2" transform="rotate(120)" /></g></svg>;
        case 'Vite':
            return <svg viewBox="0 0 410 404" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"><path d="M399.641 54.6186L214.391 386.618C210.59 393.435 200.706 393.43 196.911 386.608L10.5401 51.5273C6.39343 44.0754 13.0645 35.5398 21.1396 38.003L194.505 90.8931C201.597 93.0567 209.117 93.0189 216.183 90.7937L389.043 36.3361C397.108 33.7967 403.859 42.4172 399.641 54.6186Z" /></svg>;
        case 'Figma':
            return <svg viewBox="0 0 38 57" width="32" height="32" fill="currentColor"><path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fillOpacity="0.8" /><path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fillOpacity="0.8" /><path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fillOpacity="0.8" /><path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fillOpacity="0.8" /><path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fillOpacity="0.8" /></svg>;
        case 'HTML/CSS':
            return <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>;
        case 'Illustrator':
            return <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><path d="M9 16V8"></path><path d="M15 16h-4"></path><path d="M15 12h-4"></path><path d="M11 8h4"></path></svg>;
        case 'Photoshop':
            return <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><path d="M8 8v8h8V8z"></path><circle cx="12" cy="12" r="2"></circle></svg>;
        case 'Premiere':
            return <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>;
        case 'After Effects':
            return <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>;
        case 'Apple':
            return <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path d="M12 20.6c-1.4 0-3.3-1.1-4.7-1.1-1.3 0-3 .9-4.2.9C1.9 20.4.8 19.3.5 18c-.7-2.7-1-6.1 1.2-8.6C3 7.8 4.6 7 6.4 7c1.4 0 2.5.8 3.5.8 1.1 0 2.7-.9 4.3-.9 1.6 0 3.2.7 4.2 1.9-3.4 1.8-2.9 6.2.7 7.7-1 2.3-2.6 4.7-4.6 4.8-.8.1-1.7-.5-2.5-.5zM12 6.8c.8-1 1.3-2.3 1.1-3.6-1.1 0-2.6.7-3.4 1.7-.7.8-1.3 2.1-1 3.4 1.2.1 2.5-.5 3.3-1.5z" /></svg>;
        default:
            return <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>;
    }
};

const TechCard = ({ iconName, title, desc, delayIndex }) => (
    <div className={`tech-card fade-in-section delay-${delayIndex}00`}>
        <div className="tech-icon-wrapper">
            <TechIcon name={iconName} />
        </div>
        <div className="tech-info">
            <h4 className="tech-title">{title}</h4>
            <p className="tech-desc">{desc}</p>
        </div>
    </div>
);

const About = () => {
    // Scroll Fade-in Logic
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
        <div className="about-page page-transition">
            {/* Header Section */}
            <Section className="about-header fade-in-section">
                {/* Background Watermark */}
                <div className="page-bg-text">
                    ABOUT
                </div>

                <h1 style={{ position: 'relative', zIndex: 10 }}>ABOUT</h1>
                <p style={{ position: 'relative', zIndex: 10 }}>ビジネスの課題を、デザインの力で解決する。</p>
            </Section>

            {/* Profile Section */}
            <Section className="profile-section fade-in-section">
                <div className="profile-container">
                    <div className="profile-image-wrapper">
                        <img src="/neko.jpg" alt="Profile" className="profile-image" />
                    </div>
                    <div className="profile-content">
                        <h2>Haruki Wakiyama</h2>
                        <p className="profile-title">Web & Graphic Designer / Video Creator</p>
                        <p className="profile-text">
                            Webサイト制作から、紙媒体のグラフィックデザイン、プロモーション動画の編集まで、媒体の垣根を越えたクリエイティブを提供しています。<br /><br />
                            『誰に、何を、どう伝えるか』という根本的な目的を大切にし、ただ綺麗なだけでなく、クライアントのビジネスを加速させるためのデザインを設計します。<br /><br />
                            Illustrator等を用いた高品質なグラフィック制作と、最新のWeb技術を掛け合わせ、一貫した世界観でのブランディングをサポートいたします。
                        </p>
                    </div>
                </div>
            </Section>

            {/* Skills Section */}
            <Section className="skills-section fade-in-section">
                <div className="section-title-wrapper">
                    <h3>SKILLS</h3>
                    <p className="section-subtitle">提供可能なスキル</p>
                </div>

                <div className="tech-stack-container">

                    {/* Development */}
                    <div className="tech-category fade-in-section">
                        <h4 className="tech-category-title">Development</h4>
                        <div className="tech-grid">
                            <TechCard iconName="React" title="React / Next.js" desc="高度でインタラクティブなUI構築" delayIndex={1} />
                            <TechCard iconName="Vite" title="Vite / Webpack" desc="高速な開発環境とビルド最適化" delayIndex={2} />
                            <TechCard iconName="HTML/CSS" title="HTML / CSS / JS" desc="セマンティックで堅牢なコーディング" delayIndex={3} />
                        </div>
                    </div>

                    {/* Design */}
                    <div className="tech-category fade-in-section delay-200">
                        <h4 className="tech-category-title">Design</h4>
                        <div className="tech-grid">
                            <TechCard iconName="Figma" title="Figma / Adobe XD" desc="プロトタイピングとUI/UX設計" delayIndex={1} />
                            <TechCard iconName="Illustrator" title="Adobe Illustrator" desc="ベクター作成・ロゴデザイン" delayIndex={2} />
                            <TechCard iconName="Photoshop" title="Adobe Photoshop" desc="高度な画像編集とレタッチ" delayIndex={3} />
                        </div>
                    </div>

                    {/* Video & Motion */}
                    <div className="tech-category fade-in-section delay-400">
                        <h4 className="tech-category-title">Video & Motion</h4>
                        <div className="tech-grid">
                            <TechCard iconName="Premiere" title="Premiere Pro" desc="テンポの良い動画編集・構成" delayIndex={1} />
                            <TechCard iconName="After Effects" title="After Effects" desc="モーショングラフィックス・VFX" delayIndex={2} />
                            <TechCard iconName="Apple" title="Mac OS Environment" desc="効率的でクリエイティブな制作環境" delayIndex={3} />
                        </div>
                    </div>

                </div>
            </Section>

            <CallToAction />
        </div>
    );
};

export default About;
