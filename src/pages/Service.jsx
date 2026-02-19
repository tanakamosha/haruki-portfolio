import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/ui/Section';
import { CheckCircle, Timer, TrendingUp, Award } from 'lucide-react';
import './Service.css';

const services = [
    {
        title: 'Webサイト制作・開発',
        price: '¥150,000〜',
        features: [
            '企画構成・デザイン・コーディング',
            'スマートフォン最適化（レスポンス対応）',
            'お知らせ更新機能（CMS）の導入',
            '公開後1ヶ月間の保守サポート'
        ],
        desc: '最新技術を活用し、機能性と美しさを兼ね備えたWebサイトを構築します。',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800'
    },
    {
        title: 'グラフィック・印刷物',
        price: '¥5,000〜',
        features: [
            'チラシ・フライヤー・パンフレット制作',
            '名刺・ショップカードデザイン',
            '修正回数：3回まで無料',
            '印刷代行・入稿データ納品対応'
        ],
        desc: 'ターゲットの心に響く、戦略的で印象的なグラフィックデザインを提供。',
        image: '/tirasi2.jpg'
    },
    {
        title: '動画編集・映像制作',
        price: '¥10,000〜',
        features: [
            'YouTube動画編集（カット・テロップ）',
            'ショート動画・広告動画の作成',
            'BGM・効果音・色調補正（カラーグレーディング）',
            'ロゴアニメーション・VFX対応'
        ],
        desc: '視聴者の視線を釘付けにする、洗練された映像演出とストーリーテリング。',
        image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800'
    }
];

const flowSteps = [
    { num: '01', title: 'Hearing', jpTitle: 'ヒアリング', desc: '現状の課題や制作の目的、ご希望のイメージを丁寧にヒアリングいたします。' },
    { num: '02', title: 'Planning', jpTitle: '企画・構成', desc: 'ヒアリング内容を元に構成案やデザインラフを作成し、方向性をすり合わせます。' },
    { num: '03', title: 'Production', jpTitle: '制作・実装', desc: 'デザインの作り込みとコーディング（または動画編集）を行い、形にしていきます。' },
    { num: '04', title: 'Delivery', jpTitle: '確認・納品', desc: '最終確認を経て、ご指定の形式で納品、またはWebサイトを公開いたします。' }
];

const Service = () => {
    // Scroll Fade-in Logic (Copied from Works.jsx)
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
        <div className="service-page page-transition">
            <Section className="service-header fade-in-section">
                {/* Background Watermark (Physical DOM) */}
                <div style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "15vw",
                    fontWeight: "900",
                    color: "#f3f4f6", /* UPDATED: Very light gray */
                    zIndex: 0,
                    pointerEvents: "none",
                    whiteSpace: "nowrap",
                    userSelect: "none",
                    lineHeight: 1
                }}>
                    SERVICE
                </div>

                {/* Content Layer */}
                <h1 style={{ position: 'relative', zIndex: 10 }}>SERVICE</h1>
                <p style={{ position: 'relative', zIndex: 10 }}>わかりやすい料金体系で、包括的なクリエイティブ・ソリューションを。</p>
            </Section>

            {/* Pricing Cards */}
            <Section>
                <div className="service-grid">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="service-card fade-in-section"
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="service-img-wrapper" style={{ height: '200px', overflow: 'hidden', borderRadius: '12px 12px 0 0', width: '100%', marginBottom: '20px' }}>
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-price">{service.price}</p>
                                <p className="service-desc">{service.desc}</p>
                                <ul className="service-features">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx}>
                                            <CheckCircle size={16} color="var(--color-accent)" style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle', flexShrink: 0 }} />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <Link to="/contact" className="btn-service-cta" style={{ marginTop: 'auto', width: '100%', display: 'inline-block', textAlign: 'center' }}>
                                このプランについて相談する
                            </Link>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Benefits (Optimized) */}
            <Section className="benefit-section fade-in-section" style={{ background: '#f8fafc', borderRadius: '20px', padding: '60px 40px', marginTop: '80px' }}>
                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <h2>CLIENT BENEFITS</h2>
                    <p className="section-subtitle">選ばれる理由</p>
                </div>

                <div className="benefit-grid">
                    <div className="benefit-card">
                        <div className="benefit-icon">
                            <Timer size={40} color="#2563eb" style={{ strokeWidth: 1.5 }} />
                        </div>
                        <h4>Speedy</h4>
                        <p>迅速なレスポンスと進行で<br /><strong>ビジネスを止めない</strong></p>
                    </div>
                    <div className="benefit-card">
                        <div className="benefit-icon">
                            <TrendingUp size={40} color="#2563eb" style={{ strokeWidth: 1.5 }} />
                        </div>
                        <h4>Cost Effective</h4>
                        <p>無駄を省いた効率的な工程で<br /><strong>適正価格を実現</strong></p>
                    </div>
                    <div className="benefit-card">
                        <div className="benefit-icon">
                            <Award size={40} color="#2563eb" style={{ strokeWidth: 1.5 }} />
                        </div>
                        <h4>Quality</h4>
                        <p>専門スキルと感性を活かした<br /><strong>高水準なアウトプット</strong></p>
                    </div>
                </div>
            </Section>

            {/* Flow */}
            <Section className="flow-section fade-in-section" style={{ padding: '80px 0' }}>
                <div style={{ textAlign: 'center', marginBottom: '50px' }} className="fade-in-section">
                    <h2>WORK FLOW</h2>
                    <p className="section-subtitle">納品までの流れ</p>
                </div>

                <div className="flow-container fade-in-section" style={{ transitionDelay: '200ms' }}>
                    {flowSteps.map((step, index) => (
                        <div key={index} className="flow-step">
                            <div className="step-num">{step.num}</div>
                            <h3>
                                <span style={{ display: 'block', fontSize: '0.9rem', color: '#64748b', fontWeight: '500' }}>{step.title}</span>
                                {step.jpTitle}
                            </h3>
                            <p>{step.desc}</p>
                            {index < flowSteps.length - 1 && <div className="flow-line"></div>}
                        </div>
                    ))}
                </div>
            </Section>


        </div>
    );
};

export default Service;
