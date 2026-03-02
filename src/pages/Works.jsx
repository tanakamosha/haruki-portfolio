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
        focus: 'ヨガの持つ「リラックス」「マインドフルネス」なイメージを伝えるため、余白を広く取った清潔感のあるレイアウトにしました。AIを活用した心安らぐ背景画像を配置することで、訪問者に没入感を与えています。',
        period: '3週間',
        tools: 'React / Vite / CSS',
        price: '¥250,000〜'
    },
    {
        id: 2,
        title: 'ファルコン不動産（テスト版）',
        category: 'Web',
        scope: 'デザイン / コーディング',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop',
        desc: '都心の高級物件を扱う不動産仲介のデモサイト。',
        focus: '富裕層ターゲットを意識し、物件写真の魅力を引き立てるよう過度な装飾は抑えめにしました。上品なタイポグラフィとミニマルなレイアウトで、洗練されたブランドイメージを構築しつつ、コンシェルジュ相談への導線をスムーズに設計しています。',
        period: '2週間',
        tools: 'React / Vite / CSS',
        price: '¥300,000〜',
        url: 'https://hudousan-test.vercel.app/'
    },

    {
        id: 3,
        title: 'Coming Soon',
        category: 'Movie',
        scope: '実績準備中',
        image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop',
        desc: '現在、公開可能な動画ポートフォリオを準備中です。',
        focus: 'YouTube Shorts・TikTok等のショート動画から長尺まで幅広く対応しております。視聴維持率を高めるテンポの良い編集や、企画・構成からのご相談もお受けしています。詳細については「CONTACT」よりお問い合わせください。',
        period: '要相談',
        tools: 'Premiere Pro / After Effects',
        price: '¥5,000〜'
    },

    {
        id: 5,
        title: 'VTuber Official Site',
        category: 'Web',
        scope: 'デザイン / コーディング',
        image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop',
        desc: 'ポップで親しみやすいVTuberの公式サイトデモ。',
        focus: 'キャラクターの個性を活かすため、少し丸みのあるポップなフォントと鮮やかな配色を採用し「楽しさ」が伝わるように設計しました。配信スケジュールやグッズ情報へアクセスしやすいファンフレンドリーな構成にこだわりました。',
        period: '3週間',
        tools: 'React / Vite / CSS',
        price: '¥250,000〜',
        url: 'https://vtuber-demo.vercel.app/'
    },
    {
        id: 7,
        title: 'URBAN JAZZ NIGHT 2026 フライヤー',
        category: 'Print',
        scope: 'フライヤーデザイン',
        image: '/tirasi3.png',
        desc: '架空のジャズフェスティバルの魅力を伝える、スタイリッシュなフライヤーデザインです。',
        focus: '若年層のアートファンにも響くよう、夜の街のネオンを想起させる配色と、躍動感のあるタイポグラフィを用いて「非日常感・ワクワク感」を引き出すレイアウトにこだわりました。',
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
        focus: '「ITは難しい」というハードルを下げるため、親しみやすいイラストを活用。視線の流れ（Zの法則など）を意識して情報を整理し、参加によるベネフィットが瞬時に伝わるように工夫しています。',
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
        focus: '数ある同業サービスの中でも一目で「信頼」と「高品質」を感じてもらうため、実績となる数字を大きく強調。さらに過去のポートフォリオをコラージュ風に配置し、「作れるものの幅の広さ」を直感的にアピールしました。',
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
                <div className="page-bg-text">
                    WORKS
                </div>

                <h1 style={{ position: 'relative', zIndex: 10 }}>WORKS</h1>
                <p style={{ position: 'relative', zIndex: 10 }}>Webから紙媒体、動画まで、これまでの制作実績をご紹介します。</p>

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

                            {selectedWork.focus && (
                                <div className="modal-section">
                                    <h4>こだわったポイント (Focus)</h4>
                                    <p>{selectedWork.focus}</p>
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
