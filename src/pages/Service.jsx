import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/ui/Section';
import { CheckCircle, Clock, Zap, DollarSign } from 'lucide-react';
import './Service.css';

const services = [
    {
        title: 'Web Design & Dev',
        price: '¥150,000~',
        features: ['Responsive Design', 'CMS Integration', 'Basic SEO', '1 Month Support'],
        desc: '最新のフレームワークを活用した、高機能で美しいサイト構築',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2600&auto=format&fit=crop'
    },
    {
        title: 'Print / Graphic',
        price: '¥50,000~',
        features: ['Logo Design', 'Business Cards', 'Flyers/Posters', 'Brand Guidelines'],
        desc: 'ターゲットの心に届く、戦略的なグラフィックデザイン',
        image: 'https://images.unsplash.com/photo-1626785774573-4b79931256ce?q=80&w=2600&auto=format&fit=crop'
    },
    {
        title: 'Movie / Video',
        price: '¥30,000~',
        features: ['YouTube Editing', 'Short Form Content', 'Color Grading', 'Motion Graphics'],
        desc: '視聴者の目を引く、洗練された映像演出とストーリーテリング',
        image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2600&auto=format&fit=crop'
    }
];

const flowSteps = [
    { num: '01', title: 'Hearing', desc: 'ヒアリングシートにて、課題やイメージを共有いただきます。' },
    { num: '02', title: 'Planning', desc: '構成案とデザインラフを作成し、方向性をすり合わせます。' },
    { num: '03', title: 'Production', desc: '本制作に入ります。細部のクオリティを作り込みます。' },
    { num: '04', title: 'Delivery', desc: '最終確認後、データ納品または公開作業を行います。' }
];

const Service = () => {
    return (
        <div className="service-page page-transition">
            <Section className="service-header">
                <h1>SERVICE</h1>
                <p>Transparent pricing and comprehensive creative solutions.</p>
            </Section>

            {/* Pricing Cards */}
            <Section>
                <div className="service-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-img-wrapper" style={{ height: '180px', overflow: 'hidden', borderRadius: '12px', marginBottom: '20px' }}>
                                <img src={service.image} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-price">{service.price}</p>
                            <p className="service-desc">{service.desc}</p>
                            <ul className="service-features">
                                {service.features.map((feature, idx) => (
                                    <li key={idx}>• {feature}</li>
                                ))}
                            </ul>
                            <Link to="/contact" className="btn" style={{ marginTop: '20px', width: '100%', display: 'inline-block', textDecoration: 'none', textAlign: 'center' }}>REQUEST</Link>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Benefits (Optimized) */}
            <Section className="benefit-section" style={{ background: '#f4f4f0', borderRadius: '20px', padding: '60px 40px', marginTop: '80px' }}>
                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <h2>CLIENT BENEFITS</h2>
                    <p className="section-subtitle">お客様へのメリット</p>
                </div>

                <div className="benefit-grid">
                    <div className="benefit-card">
                        <div className="benefit-icon"><Clock size={32} color="var(--color-accent)" /></div>
                        <h4>Speedy</h4>
                        <p>迅速なレスポンスと進行で<br /><strong>ビジネスを止めない</strong></p>
                    </div>
                    <div className="benefit-card">
                        <div className="benefit-icon"><DollarSign size={32} color="var(--color-accent)" /></div>
                        <h4>Cost Effective</h4>
                        <p>無駄を省いた効率的な工程で<br /><strong>適正価格を実現</strong></p>
                    </div>
                    <div className="benefit-card">
                        <div className="benefit-icon"><Zap size={32} color="var(--color-accent)" /></div>
                        <h4>Quality</h4>
                        <p>専門スキルと感性を活かした<br /><strong>高水準なアウトプット</strong></p>
                    </div>
                </div>
            </Section>

            {/* Flow */}
            <Section style={{ padding: '80px 0' }}>
                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <h2>WORK FLOW</h2>
                    <p className="section-subtitle">納品までの流れ</p>
                </div>

                <div className="flow-container">
                    {flowSteps.map((step, index) => (
                        <div key={index} className="flow-step">
                            <div className="step-num">{step.num}</div>
                            <h3>{step.title}</h3>
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
