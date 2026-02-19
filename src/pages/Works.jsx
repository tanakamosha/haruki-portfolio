import React, { useState } from 'react';
import Section from '../components/ui/Section';
import { X } from 'lucide-react';
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
        id: 2,
        title: 'Tech Innovations Inc.',
        category: 'Print',
        scope: 'パンフレットデザイン',
        image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop',
        desc: 'Corporate brochure for a tech firm.',
        issue: '複雑な技術情報を投資家にわかりやすく伝える必要があった。',
        solution: 'クリーンなインフォグラフィックと構造化されたレイアウトを作成。AIを活用して技術仕様を読みやすい文章に要約しました。',
        result: '3つの主要カンファレンスで配布され、好評を得ました。',
        period: '2週間',
        tools: 'Illustrator / Photoshop',
        price: '¥100,000〜'
    },
    {
        id: 3,
        title: 'Future Coffee',
        category: 'Movie',
        scope: '動画編集 / VFX',
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop',
        desc: 'Futuristic coffee brand commercial.',
        issue: '撮影場所の確保に予算の制約があった。',
        solution: '生成AIを使用して近未来的な背景を作成し、スタジオ撮影した商品ショットと合成しました。',
        result: 'SNSで公開後1週間で10万回再生を達成。',
        period: '1ヶ月',
        tools: 'Premiere Pro / After Effects / DaVinci Resolve',
        price: '¥300,000〜'
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
        id: 5,
        title: 'Music Festival 2026',
        category: 'Print',
        scope: 'ポスター / フライヤー',
        image: '/tirasi2.jpg',
        desc: 'Key visual for a summer festival.',
        issue: 'イベントの熱狂を伝えるビジュアルが必要だった。',
        solution: 'AIであふれるエネルギーを表現した抽象画を生成し、タイポグラフィと組み合わせて洗練させました。',
        result: 'チケットが発売3日で完売しました。',
        period: '10日間',
        tools: 'Photoshop / Illustrator / Midjourney',
        price: '¥80,000〜'
    },
    {
        id: 6,
        title: 'Indie Band MV',
        category: 'Movie',
        scope: 'モーショングラフィックス',
        image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2670&auto=format&fit=crop',
        desc: 'Psychedelic music video.',
        issue: 'バンドが夢のような幻想的なビジュアルを求めていた。',
        solution: 'AI動画生成ツールを使用し、ビートに合わせてシーンが変形（モーフィング）するサイケデリックな映像を制作しました。',
        result: 'ファンからのエンゲージメント率が過去最高を記録。',
        period: '3週間',
        tools: 'After Effects / Blender',
        price: '¥200,000〜'
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
                <h1>WORKS</h1>
                <p>Webから紙媒体、動画まで、これまでの制作実績をご紹介します。</p>

                <div
                    className="filter-container"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: "40px",
                        marginTop: "20px",
                        gap: "15px",
                        flexWrap: "wrap"
                    }}
                >
                    {['All', 'Web', 'Print', 'Movie'].map(category => {
                        const isActive = filter === category;
                        const buttonStyle = {
                            padding: "12px 30px",
                            borderRadius: "50px",
                            fontSize: "14px",
                            fontWeight: "bold",
                            margin: "0 10px",
                            border: "none",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            backgroundColor: isActive ? "#2563eb" : "#64748b", // Active: Blue, Inactive: Slate Blue
                            color: "#ffffff", // ALWAYS White
                            boxShadow: isActive ? "0 4px 6px -1px rgba(37, 99, 235, 0.3)" : "none",
                            transform: "translateY(0)"
                        };

                        return (
                            <button
                                key={category}
                                className={`custom-filter-btn ${isActive ? 'active' : ''}`}
                                onClick={() => setFilter(category)}
                                style={buttonStyle}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "translateY(-2px)";
                                    if (!isActive) {
                                        e.currentTarget.style.backgroundColor = "#2563eb"; // Hover: Brand Blue
                                        e.currentTarget.style.boxShadow = "0 4px 12px rgba(37, 99, 235, 0.2)";
                                    } else {
                                        e.currentTarget.style.backgroundColor = "#1d4ed8"; // Active Hover: Darker Blue
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.boxShadow = isActive ? "0 4px 6px -1px rgba(37, 99, 235, 0.3)" : "none";
                                    if (!isActive) {
                                        e.currentTarget.style.backgroundColor = "#64748b"; // Revert to Inactive
                                    } else {
                                        e.currentTarget.style.backgroundColor = "#2563eb"; // Revert to Active
                                    }
                                }}
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
                        <div className="modal-body">
                            <h2>{selectedWork.title}</h2>

                            {/* New Details Grid */}
                            <div className="modal-details-grid">
                                <div className="detail-item">
                                    <span className="detail-label">カテゴリ</span>
                                    <span className="detail-value">{selectedWork.category}</span>
                                </div>
                                <div className="detail-item">
                                    <span className="detail-label">制作期間</span>
                                    <span className="detail-value">{selectedWork.period}</span>
                                </div>
                                <div className="detail-item">
                                    <span className="detail-label">使用ツール</span>
                                    <span className="detail-value">{selectedWork.tools}</span>
                                </div>
                                <div className="detail-item">
                                    <span className="detail-label">担当範囲</span>
                                    <span className="detail-value">{selectedWork.scope}</span>
                                </div>
                                <div className="detail-item">
                                    <span className="detail-label">参考価格</span>
                                    <span className="detail-value">{selectedWork.price}</span>
                                </div>
                                {selectedWork.url && (
                                    <div className="detail-item">
                                        <span className="detail-label">リンク</span>
                                        <a href={selectedWork.url} target="_blank" rel="noopener noreferrer" className="site-link-btn">
                                            サイトを見る
                                        </a>
                                    </div>
                                )}
                            </div>

                            <div className="modal-section">
                                <h4>課題・背景</h4>
                                <p>{selectedWork.issue}</p>
                            </div>
                            <div className="modal-section">
                                <h4>解決策・デザインのポイント</h4>
                                <p>{selectedWork.solution}</p>
                            </div>
                            <div className="modal-section">
                                <h4>結果・成果</h4>
                                <p>{selectedWork.result}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Works;
