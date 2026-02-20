import React from 'react';
import Section from '../components/ui/Section';
import CallToAction from '../components/ui/CallToAction';
import './About.css';

const SkillBar = ({ name, percentage }) => (
    <div className="skill-bar-container mb-4 last:mb-0">
        <div className="flex justify-between items-end mb-1">
            <span className="text-sm font-bold text-slate-700">{name}</span>
            <span className="text-xs text-slate-400 font-mono">{percentage}%</span>
        </div>
        <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
            <div
                className="bg-blue-600 h-full rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${percentage}%` }}
            ></div>
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
                <div style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "15vw",
                    fontWeight: "900",
                    color: "#f3f4f6",
                    zIndex: 0,
                    pointerEvents: "none",
                    whiteSpace: "nowrap",
                    userSelect: "none",
                    lineHeight: 1
                }}>
                    ABOUT
                </div>

                <h1 style={{ position: 'relative', zIndex: 10 }}>ABOUT</h1>
                <p style={{ position: 'relative', zIndex: 10 }}>ビジネスの課題を、デザインの力で解決する。</p>
            </Section>

            {/* Profile Section */}
            <Section className="profile-section fade-in-section">
                <div className="profile-container">
                    <div className="profile-image-wrapper">
                        {/* Placeholder Image */}
                        <div className="profile-image-placeholder"></div>
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

                <div className="skills-grid">
                    <div className="skill-card">
                        <span className="skill-category">Web</span>
                        <div className="skill-list-visual">
                            <SkillBar name="UI/UX Design" percentage={90} />
                            <SkillBar name="HTML/CSS/JavaScript" percentage={85} />
                            <SkillBar name="Responsive Design" percentage={95} />
                            <SkillBar name="React / Vite" percentage={75} />
                        </div>
                    </div>
                    <div className="skill-card">
                        <span className="skill-category">Graphic</span>
                        <div className="skill-list-visual">
                            <SkillBar name="Flyer / Pamphlet" percentage={95} />
                            <SkillBar name="Business Card" percentage={90} />
                            <SkillBar name="Logo Design" percentage={80} />
                            <SkillBar name="Color Theory" percentage={85} />
                        </div>
                    </div>
                    <div className="skill-card">
                        <span className="skill-category">Video</span>
                        <div className="skill-list-visual">
                            <SkillBar name="YouTube Editing" percentage={90} />
                            <SkillBar name="Shorts / Reels" percentage={85} />
                            <SkillBar name="Color Grading" percentage={70} />
                            <SkillBar name="Motion Graphics" percentage={60} />
                        </div>
                    </div>
                </div>
            </Section>

            <CallToAction />
        </div>
    );
};

export default About;
