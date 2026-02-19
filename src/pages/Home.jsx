import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Layers, TrendingUp, Smartphone, PenTool, MonitorPlay, Send, Mail } from 'lucide-react';
import './Home.css';

const Home = () => {
    // 共通のインナーコンテナスタイル
    const baseContainerStyle = {
        margin: '0 auto',
        padding: '0 20px',
        position: 'relative',
        zIndex: 1
    };

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const animatedElements = document.querySelectorAll('.fade-up-element');
        animatedElements.forEach(el => observer.observe(el));

        return () => {
            if (animatedElements.length > 0) {
                animatedElements.forEach(el => observer.unobserve(el));
            }
        };
    }, []);

    return (
        <div className="home-page">

            {/* 1. Hero Section (White) */}
            <section id="section-home" className="hero-section relative min-h-screen overflow-hidden bg-white">
                <div className="flyer-slider-container">
                    <div className="flyer-track">
                        {[...Array(20)].map((_, i) => (
                            <img
                                key={i}
                                src={`https://picsum.photos/seed/${(i % 10) + 10}/250/350`}
                                alt="Flyer Example"
                                className="flyer-item"
                            />
                        ))}
                    </div>
                </div>
                <div className="container mx-auto px-4 relative z-10" style={{
                    ...baseContainerStyle,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    minHeight: '100vh',
                    /* minHeight: '600px', Mobile fallback - removed duplicate */
                    paddingTop: '120px',
                    paddingBottom: '40px',
                    width: '100%',
                    maxWidth: '100%',
                    position: 'relative'
                }}>
                    {/* Mobile Text Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/40 to-transparent md:hidden pointer-events-none" style={{ zIndex: -1 }}></div>

                    <span className="animate-reveal" style={{
                        display: 'block',
                        fontSize: '1rem',
                        letterSpacing: '0.2em',
                        marginBottom: '1.2rem',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        color: '#0f172a', /* Deep Navy */
                        marginTop: '2rem' /* Moved down to avoid edge overlap */
                    }}>
                        Haruki Wakiyama
                    </span>

                    <h1 className="animate-reveal text-2xl md:text-5xl lg:text-6xl font-bold text-slate-900 px-4 md:px-0" style={{
                        marginBottom: '1.5rem',
                        lineHeight: '1.4',
                        letterSpacing: '0.05em',
                        textShadow: '0 0 20px rgba(255,255,255,1)'
                    }}>
                        Webから印刷物まで、<br className="hidden md:block" />
                        あなたのビジネスを加速させる<br className="hidden md:block" />
                        一貫デザイン。
                    </h1>

                    <p style={{
                        fontSize: '1.1rem',
                        marginBottom: '1.5rem',
                        color: '#0f172a',
                        textShadow: '0 0 20px rgba(255,255,255,1)',
                        fontWeight: '600',
                        lineHeight: '1.8' /* relaxed */
                    }}>
                        複数の窓口に頼む手間をゼロに。<br className="pc-only" />
                        最新の制作フローにより、高品質なアウトプットを圧倒的なスピードで形にします。
                    </p>

                    <div style={{ marginTop: '10px' }}>
                        <Link to="/contact"
                            className="hero-cta-button"
                            style={{
                                textDecoration: 'none',
                                letterSpacing: '0.05em'
                            }}>
                            無料相談・お見積もりはこちら <ArrowRight size={20} style={{ marginLeft: '10px' }} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* 2. SELECTED WORKS (Light Gray Background) */}
            <section id="section-works" className="scroll-mt-20 relative overflow-hidden" style={{ padding: '70px 0', backgroundColor: '#f8f9fa' }}>
                {/* Background Animation - Explicit Styles for Reliability */}
                <div className="works-bg-shapes" style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                    zIndex: 0,
                    pointerEvents: 'none'
                }}>
                    <div className="floating-shape shape-1"></div>
                    <div className="floating-shape shape-2"></div>
                </div>

                <div style={{ ...baseContainerStyle, position: 'relative', zIndex: 1 }} className="max-w-6xl mx-auto px-4">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '10px', color: '#111827', letterSpacing: '0.1em' }} className="tracking-widest">SELECTED WORKS</h2>
                        <span className="text-slate-600">制作実績</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4 md:px-0">
                        {[
                            { title: 'Namaste Shavasana', cat: 'Webデザイン / コーディング', tag: 'Web', img: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800&auto=format&fit=crop' },
                            { title: 'Tech Innovations Inc.', cat: '会社案内パンフレット', tag: 'Print', img: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop' },
                            { title: 'Future Coffee', cat: 'プロモーション動画編集', tag: 'Movie', img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop' }
                        ].map((item, index) => (
                            <div key={index} className="w-full h-full">
                                <Link to="/works" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                                    <div className="bg-white shadow-sm h-full flex flex-col group hover:scale-[1.02] duration-300" style={{
                                        borderRadius: '16px', /* rounded-2xl */
                                        overflow: 'hidden',
                                        transition: 'transform 0.3s ease',
                                        boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)'
                                    }}>
                                        <div className="h-64 overflow-hidden relative">
                                            <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                                        </div>
                                        <div style={{ padding: '32px', flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                            <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', color: '#111827' }}>{item.title}</h3>
                                            <p className="text-slate-600" style={{ fontSize: '0.9rem', marginBottom: '16px' }}>{item.cat}</p>
                                            <span style={{
                                                background: '#eff6ff',
                                                color: '#2563eb',
                                                padding: '4px 12px',
                                                borderRadius: '99px',
                                                fontSize: '0.8rem',
                                                fontWeight: '500',
                                                marginTop: 'auto'
                                            }}>
                                                {item.tag}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="section-cta-wrapper" style={{ textAlign: 'center', marginTop: '60px' }}>
                        <Link to="/works" className="transition-all duration-300 hover:bg-blue-700 hover:text-white hover:-translate-y-1 hover:scale-105 hover:shadow-lg" style={{
                            display: 'inline-block',
                            border: '1px solid #2563eb',
                            color: '#2563eb',
                            padding: '12px 32px',
                            borderRadius: '6px',
                            fontWeight: '600',
                            textDecoration: 'none'
                        }}>
                            View All Works
                        </Link>
                    </div>
                </div>
            </section>

            {/* 3. SERVICES (White Background) */}
            <section id="section-service" className="scroll-mt-20" style={{ padding: '70px 0', position: 'relative', zIndex: 30, backgroundColor: '#ffffff' }}>
                <div style={baseContainerStyle} className="max-w-6xl mx-auto px-4">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '10px', color: '#111827', letterSpacing: '0.1em' }} className="tracking-widest">SERVICES</h2>
                        <span className="text-slate-600">事業内容</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0">
                        {[
                            {
                                title: 'Web Production',
                                desc: 'Webサイト制作',
                                text: 'コーポレートサイトからLPまで。企画・構成・デザイン・コーディングを一貫して担当します。',
                                img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop'
                            },
                            {
                                title: 'Graphic Design',
                                desc: 'チラシ・パンフレット・ロゴ',
                                text: '名刺、チラシ、パンフレット、ロゴデザインなど、印刷物のデータ制作から入稿代行まで対応。',
                                img: '/tirasi2.jpg',
                                alt: 'チラシ・フライヤーデザイン制作'
                            },
                            {
                                title: 'Movie Editing',
                                desc: 'YouTube動画編集',
                                text: 'カット編集、テロップ入れ、BGM・SE挿入など、YouTube向けの動画編集を高品質・短納期で提供。',
                                img: '/douga.jpg',
                                alt: '動画編集・映像制作'
                            }
                        ].map((item, index) => (
                            <div key={index} className="w-full h-full">
                                <div className="bg-white shadow-sm h-full flex flex-col group hover:scale-[1.02] duration-300" style={{
                                    borderRadius: '16px', /* rounded-2xl */
                                    overflow: 'hidden',
                                    transition: 'transform 0.3s ease',
                                    border: '1px solid #e2e8f0'
                                }}>
                                    <div className="h-48 overflow-hidden relative">
                                        <img
                                            src={item.img}
                                            alt={item.alt || item.title}
                                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                        />
                                    </div>
                                    <div style={{ padding: '32px', flexGrow: 1, display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                                        <h3 style={{
                                            fontSize: '1.25rem',
                                            marginBottom: '8px',
                                            color: '#111827', /* Text Gray 900 */
                                            fontWeight: 'bold'
                                        }}>
                                            {item.title}
                                        </h3>
                                        <span style={{
                                            display: 'block',
                                            fontSize: '0.9rem',
                                            color: '#64748b',
                                            marginBottom: '16px',
                                            fontWeight: '500'
                                        }}>
                                            {item.desc}
                                        </span>
                                        <p style={{
                                            color: '#4b5563', /* Slightly darker than usual for readability */
                                            fontSize: '0.95rem',
                                            textAlign: 'left',
                                            lineHeight: '1.8' /* relaxed */
                                        }}>
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="section-cta-wrapper" style={{ textAlign: 'center', marginTop: '60px' }}>
                        <Link to="/service" className="transition-all duration-300 hover:bg-blue-700 hover:text-white hover:-translate-y-1 hover:scale-105 hover:shadow-lg" style={{
                            display: 'inline-block',
                            border: '1px solid #2563eb',
                            color: '#2563eb',
                            padding: '12px 32px',
                            borderRadius: '6px',
                            fontWeight: '600',
                            textDecoration: 'none'
                        }}>
                            View All Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* 3.5. STRENGTHS (Light Gray Background) */}
            <section className="scroll-mt-20" style={{ padding: '70px 0', position: 'relative', zIndex: 10, backgroundColor: '#f8f9fa' }}>
                {/* Diagonal Line Removed for clean separation */}

                <div className="strengths-content-fix max-w-5xl mx-auto px-4 relative z-20" style={{ ...baseContainerStyle }}>
                    <div className="fade-up-element strengths-header-overlap" style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{
                            fontSize: '2.5rem',
                            marginBottom: '4px',
                            color: '#111827',
                            fontWeight: '600',
                            letterSpacing: '0.1em'
                        }} className="tracking-widest">STRENGTHS</h2>
                        <span style={{ color: '#64748b' }}>強み</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="fade-up-element delay-100 bg-white border-gray-100 hover:scale-[1.02] duration-300" style={{ padding: '40px', borderRadius: '16px', border: '1px solid #e5e7eb', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05)' }}>
                            <div style={{ color: '#2563eb', marginBottom: '20px' }}><Zap size={40} /></div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '10px', fontWeight: 'bold', color: '#111827' }}>AI × Speed</h3>
                            <p style={{ lineHeight: '1.8', color: '#4b5563' }}>
                                生成AI（ChatGPT, Midjourney等）を制作フローにフル活用。
                                従来の制作プロセスを劇的に短縮し、圧倒的なスピードでドラフト提案〜納品までを実現します。
                            </p>
                        </div>
                        <div className="fade-up-element delay-200 bg-white border-gray-100 hover:scale-[1.02] duration-300" style={{ padding: '40px', borderRadius: '16px', border: '1px solid #e5e7eb', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05)' }}>
                            <div style={{ color: '#2563eb', marginBottom: '20px' }}><Layers size={40} /></div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '10px', fontWeight: 'bold', color: '#111827' }}>Illustrator Quality</h3>
                            <p style={{ lineHeight: '1.8', color: '#4b5563' }}>
                                AIで生成した素材も、最終的にはAdobe Illustrator/Photoshopでプロの手による微調整と仕上げを行います。
                                細部まで妥協のない、商用利用可能なハイクオリティを提供します。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. WORK FLOW (White Background) */}
            <section className="scroll-mt-20" style={{ padding: '70px 0', backgroundColor: '#ffffff' }}>
                <div style={baseContainerStyle} className="max-w-4xl mx-auto px-4">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '10px', color: '#111827', letterSpacing: '0.1em' }} className="tracking-widest">WORK FLOW</h2>
                        <span className="text-slate-600">制作の流れ</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { num: '01', icon: Smartphone, en: 'Hearing', jp: '課題ヒアリング' },
                            { num: '02', icon: Zap, en: 'Planning', jp: '企画・ラフ提案' },
                            { num: '03', icon: PenTool, en: 'Production', jp: '制作・修正' },
                            { num: '04', icon: MonitorPlay, en: 'Delivery', jp: '納品・公開' }
                        ].map((step, index) => (
                            <div key={index} className="bg-white shadow-sm relative hover:scale-[1.02] duration-300" style={{
                                padding: '40px 24px',
                                borderRadius: '16px',
                                textAlign: 'center',
                                border: '1px solid #e2e8f0'
                                // Removed isolation: 'isolate' to use standard stacking
                            }}>
                                {/* Background Number - Absolute Positioned (Z-Index 0) */}
                                <div style={{
                                    position: 'absolute',
                                    top: '0',
                                    right: '0',
                                    zIndex: '0', // Changed from -1 to 0 (Above BG, Below Content)
                                    pointerEvents: 'none',
                                    fontFamily: 'Oswald, sans-serif',
                                    lineHeight: '1',
                                    userSelect: 'none',
                                    overflow: 'hidden', // Clip to rounded corners
                                    height: '100%',
                                    width: '100%',
                                    borderRadius: '16px'
                                }}>
                                    <span style={{
                                        position: 'absolute',
                                        top: '-15%',
                                        right: '-5%',
                                    }} className="text-6xl md:text-[8rem] font-black text-slate-300 opacity-50">
                                        {step.num}
                                    </span>
                                </div>

                                {/* Foreground Content - Relative & Z-Index 10 (Strictly above number) */}
                                <div className="relative z-10">
                                    <div style={{ color: '#2563eb', marginBottom: '20px' }}>
                                        <step.icon size={36} style={{ display: 'inline-block' }} />
                                    </div>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '8px', color: '#111827' }}>{step.en}</h4>
                                    <p className="text-slate-600" style={{ fontSize: '0.9rem' }}>{step.jp}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. CONTACT (Light Gray Background) */}
            <section id="contact" className="scroll-mt-20" style={{ padding: '70px 0 100px 0', backgroundColor: '#f8f9fa' }}>
                <div style={{ ...baseContainerStyle, textAlign: 'center' }}>
                    <div style={{ marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '10px', color: '#111827', letterSpacing: '0.1em' }} className="tracking-widest">CONTACT</h2>
                        <span className="text-slate-600">お問い合わせ</span>
                    </div>

                    {/* Contact Content Wrapper - STRICT REFACTOR */}
                    <div className="contact-card">
                        <p className="section-subtitle">
                            制作のご依頼・ご相談は <span className="highlight-text">完全無料</span> です。
                        </p>

                        <a href="mailto:h.wakiyama@gmail.com" className="email-link-wrapper">
                            <Mail size={24} />
                            h.wakiyama@gmail.com
                        </a>

                        <div className="contact-or-separator">
                            <span className="line"></span> OR <span className="line"></span>
                        </div>

                        <Link to="/contact" className="btn-contact-custom">
                            お問い合わせフォームへ
                            <Send size={18} className="btn-icon" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
