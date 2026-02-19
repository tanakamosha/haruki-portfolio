import React from 'react';
import Section from '../components/ui/Section';
import './Legal.css';

const Privacy = () => {
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
        <div className="legal-page page-transition">
            <Section className="legal-header fade-in-section">
                <div className="legal-watermark">PRIVACY</div>
                <h1>PRIVACY POLICY</h1>
                <p style={{ position: 'relative', zIndex: 10 }}>プライバシーポリシー</p>
            </Section>

            <Section>
                <div className="legal-container fade-in-section" style={{ transitionDelay: '200ms' }}>
                    <div className="legal-content">
                        <p className="legal-text">
                            当サイトは、お客様の個人情報の保護を重要視し、以下の通りプライバシーポリシーを定めます。
                        </p>

                        <h2 className="legal-section-title">1. 個人情報の取得</h2>
                        <p className="legal-text">
                            当サイトは、お問い合わせフォーム等のご利用に際して、お名前、メールアドレス、ご相談内容等の個人情報を取得する場合があります。
                        </p>

                        <h2 className="legal-section-title">2. 個人情報の利用目的</h2>
                        <p className="legal-text">
                            取得した個人情報は、以下の目的で利用いたします。<br />
                            ・お問い合わせに対する回答およびご連絡のため<br />
                            ・Webサイト制作、グラフィックデザイン、動画編集等のサービス提供およびご案内のため<br />
                            ・お見積書、請求書等の事務手続きのため
                        </p>

                        <h2 className="legal-section-title">3. 個人情報の第三者への提供</h2>
                        <p className="legal-text">
                            当サイトは、法令に基づく場合を除き、事前にお客様の同意を得ることなく、個人情報を第三者に提供いたしません。
                        </p>

                        <h2 className="legal-section-title">4. 個人情報の管理</h2>
                        <p className="legal-text">
                            お客様の個人情報は、漏洩、滅失、き損の防止に努め、適切かつ安全に管理いたします。
                        </p>

                        <h2 className="legal-section-title">5. プライバシーポリシーの変更</h2>
                        <p className="legal-text">
                            本ポリシーの内容は、法令の変更やサービス内容の変更に伴い、予告なく変更されることがあります。変更後のプライバシーポリシーは、当サイトに掲載した時点から効力を生じるものとします。
                        </p>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Privacy;
