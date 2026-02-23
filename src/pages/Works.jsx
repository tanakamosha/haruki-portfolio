import React, { useState } from 'react';
import Section from '../components/ui/Section';
import { X, ArrowRight } from 'lucide-react';
import CallToAction from '../components/ui/CallToAction';
import './Works.css';

// Mock Data
const worksData = [
    {
        id: 1,
        title: 'Namaste Shavasana',
        category: 'Web',
        scope: 'デザイン / コーディング',
        image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800&auto=format&fit=crop',
        desc: 'Relaxing yoga studio website.',
        issue: 'オンライン予約機能がなく、デザインが古くなっていた。',
        solution: '清潔感のあるミニマルなデザインを採用。AIを活用して、心安らぐ背景画像を生成・配置しました。',
        result: '公開初月の予約数が40%増加しました。',
        period: '3週間',
        tools: 'Figma / React / Tailwind',
        price: '¥250,000〜',
        url: 'https://hudousan-test.vercel.app/'
    },

    {
        id: 3,
        title: 'Coming Soon',
        category: 'Movie',
        scope: '実績準備中',
        image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop',
        desc: '現在、公開可能な動画ポートフォリオを準備中です。',
        issue: '動画編集の実績サンプルは、ご相談いただいた際に個別にご案内可能です。',
        solution: 'YouTube Shorts・TikTok等の1分未満のショート動画から、YouTube本編動画まで幅広く対応しております。詳細な料金や納期については「CONTACT」よりお問い合わせください。',
        result: '視聴維持率を高めるテンポの良い編集で、SNSに最適化した動画を提供します。',
        period: '要相談',
        tools: 'Premiere Pro / After Effects',
        price: '¥5,000〜'
    },
    {
        id: 4,
        title: 'Ec-Site Redesign',
        category: 'Web',
        scope: 'UI/UXデザイン',
        image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?q=80&w=2670&auto=format&fit=crop',
        desc: 'Modernizing an online store.',
        issue: 'カート放棄率（カゴ落ち）が高止まりしていた。',
        solution: 'チェックアウトプロセスを簡素化し、AIを活用したレコメンド機能を導入しました。',
        result: 'コンバージョン率が15%向上しました。',
        period: '2ヶ月',
        tools: 'Figma / Next.js / Supabase',
        price: '¥800,000〜',
        url: 'https://example.com'
    },
    {
        id: 7,
        title: 'URBAN JAZZ NIGHT 2026 フライヤー',
        category: 'Print',
        scope: 'フライヤーデザイン',
        image: '/tirasi3.png',
        desc: '架空のジャズフェスティバルの魅力を伝える、スタイリッシュなフライヤーデザインです。',
        issue: '若年層のアートファンを新たに取り込みたいという要望があった。',
        solution: '夜の街のネオンを想起させる配色と、躍動感のあるタイポグラフィで「非日常感」を演出しました。',
        result: 'イベントのプレオーダー数が前年比150%を記録。',
        period: '5日間',
        tools: 'Illustrator / Photoshop',
        price: '¥50,000〜'
    },
    {
        id: 8,
        title: 'IT活用セミナー告知チラシ',
        category: 'Print',
        scope: 'チラシデザイン',
        image: '/tirasi4.png',
        desc: 'ターゲット層に合わせ、情報をわかりやすく整理したセミナー集客用デザインです。',
        issue: '「ITは難しい」というイメージを払拭し、初心者を集客したい。',
        solution: '親しみやすいイラストと、視線の流れを意識したレイアウトで、ベネフィットを直感的に伝えました。',
        result: '定員50名が配布後1週間で満席となりました。',
        period: '3日間',
        tools: 'Illustrator',
        price: '¥30,000〜'
    },
    {
        id: 9,
        title: 'ココナラ出品用PRバナー・チラシ',
        category: 'Print',
        scope: 'バナー / チラシ',
        image: '/tirasi5.jpg',
        desc: 'サービスの魅力を視覚的にわかりやすく伝えるPR用グラフィック制作です。',
        issue: '数あるサービスの中で、一目で「信頼」と「高品質」を伝える必要があった。',
        solution: '実績数字を強調しつつ、ポートフォリオの一部をコラージュして「作れるものの幅広さ」を表現しました。',
        result: '閲覧数（PV）と問い合わせ率が大幅に向上。',
        period: '2日間',
        tools: 'Photoshop / Figma',
        price: '¥15,000〜'
    },
];

const Works = () => {
    const [filter, setFilter] = useState('All');
    const [selectedWork, setSelectedWork] = useState(null);

    // Global Background Animation
    React.useEffect(() => {
        // Apply class to body
        document.body.classList.add('works-body-gradient');

        // Ensure root background is transparent
        const root = document.getElementById('root');
        if (root) root.style.backgroundColor = 'transparent';

        return () => {
            // Cleanup
            document.body.classList.remove('works-body-gradient');
            if (root) root.style.backgroundColor = '';
        };
    }, []);

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
    }, [filter]);

    const filteredWorks = filter === 'All'
        ? worksData
        : worksData.filter(work => work.category === filter);

    return (
        <div className="works-page page-transition">

            <Section className="works-header fade-in-section">
                {/* Background Watermark (Physical DOM to match Service/About) */}
                <div style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "18vw",
                    fontWeight: "900",
                    color: "#f8f8f8",
                    zIndex: 0,
                    pointerEvents: "none",
                    whiteSpace: "nowrap",
                    userSelect: "none",
                    lineHeight: 1,
                    letterSpacing: "0.1em"
                }}>
                    WORKS
                </div>

                <h1>WORKS</h1>
                <p>Webから紙媒体、動画まで、これまでの制作実績をご紹介します。</p>

                <div className="filter-container fade-in-section">
                    {['All', 'Web', 'Print', 'Movie'].map(category => {
                        const isActive = filter === category;
                        return (
                            <button
                                key={category}
                                className={`custom-filter-btn ${isActive ? 'active' : ''}`}
                                onClick={() => setFilter(category)}
                            >
                                {category}
                            </button>
                        );
                    })}
                </div>
            </Section>

            <Section>
                <div className="works-grid-container">
                    {filteredWorks.map((work, index) => (
                        <div
                            key={work.id}
                            className="work-card-item fade-in-section"
                            style={{ transitionDelay: `${index * 100}ms` }}
                            onClick={() => setSelectedWork(work)}
                        >
                            <div className="work-image-wrapper">
                                <img src={work.image} alt={work.title} />
                                <span className="work-category-badge">{work.category}</span>
                            </div>
                            <div className="work-info-content">
                                <h3>{work.title}</h3>
                                <p className="work-scope-text">{work.scope}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Detail Modal */}
            {selectedWork && (
                <div className="modal-overlay" onClick={() => setSelectedWork(null)}>
                    {/* Close Button Fixed to Screen */}
                    <button className="modal-close" onClick={() => setSelectedWork(null)}>
                        <X size={32} />
                    </button>

                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <div className="modal-image">
                            <img src={selectedWork.image} alt={selectedWork.title} />
                        </div>
                        <div className="modal-body" style={{ textAlign: 'left' }}>
                            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                                <span
                                    className="work-category-badge"
                                    style={{
                                        position: 'relative',
                                        top: 'auto',
                                        left: 'auto',
                                        display: 'inline-block',
                                        marginBottom: '10px'
                                    }}
                                >
                                    {selectedWork.category}
                                </span>
                                <h2 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>{selectedWork.title}</h2>
                                <p style={{ color: '#64748b', fontSize: '1rem' }}>{selectedWork.desc}</p>
                            </div>

                            <div className="modal-details-grid">
                                <div className="detail-item">
                                    <span className="detail-label">Scope</span>
                                    <span className="detail-value">{selectedWork.scope}</span>
                                </div>
                                {selectedWork.price && (
                                    <div className="detail-item">
                                        <span className="detail-label">Price</span>
                                        <span className="detail-value">{selectedWork.price}</span>
                                    </div>
                                )}
                                {selectedWork.period && (
                                    <div className="detail-item">
                                        <span className="detail-label">Period</span>
                                        <span className="detail-value">{selectedWork.period}</span>
                                    </div>
                                )}
                                {selectedWork.tools && (
                                    <div className="detail-item">
                                        <span className="detail-label">Tools</span>
                                        <span className="detail-value">{selectedWork.tools}</span>
                                    </div>
                                )}
                            </div>

                            {selectedWork.issue && (
                                <div className="modal-section">
                                    <h4>課題 (Issue)</h4>
                                    <p>{selectedWork.issue}</p>
                                </div>
                            )}
                            {selectedWork.solution && (
                                <div className="modal-section">
                                    <h4>解決策 (Solution)</h4>
                                    <p>{selectedWork.solution}</p>
                                </div>
                            )}
                            {selectedWork.result && (
                                <div className="modal-section">
                                    <h4>結果 (Result)</h4>
                                    <p>{selectedWork.result}</p>
                                </div>
                            )}

                            {selectedWork.url && (
                                <div style={{ textAlign: 'center', marginTop: '40px' }}>
                                    <a href={selectedWork.url} target="_blank" rel="noopener noreferrer" className="site-link-btn" style={{ margin: '0 auto' }}>
                                        View Live Site <ArrowRight size={16} />
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            <CallToAction />
        </div>
    );
};

export default Works;
