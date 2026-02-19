import React from 'react';
import Section from '../components/ui/Section';
import './Legal.css';

const Law = () => {
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
                <div className="legal-watermark">LEGAL</div>
                <h1>LEGAL INFORMATION</h1>
                <p style={{ position: 'relative', zIndex: 10 }}>特定商取引法に基づく表記</p>
            </Section>

            <Section>
                <div className="legal-container fade-in-section" style={{ transitionDelay: '200ms' }}>
                    <div className="legal-content">
                        <table className="law-table">
                            <tbody>
                                <tr>
                                    <th>事業者の名称</th>
                                    <td>請求があったら遅滞なく開示します</td>
                                </tr>
                                <tr>
                                    <th>所在地</th>
                                    <td>請求があったら遅滞なく開示します</td>
                                </tr>
                                <tr>
                                    <th>電話番号</th>
                                    <td>請求があったら遅滞なく開示します</td>
                                </tr>
                                <tr>
                                    <th>メールアドレス</th>
                                    <td>h.wakiyama@gmail.com</td>
                                </tr>
                                <tr>
                                    <th>販売価格</th>
                                    <td>サービスごとに個別にお見積りいたします。</td>
                                </tr>
                                <tr>
                                    <th>商品代金以外の必要料金</th>
                                    <td>銀行振込手数料、その他業務に必要な実費（サーバー代、ドメイン代、有料素材代等）はお客様負担となります。</td>
                                </tr>
                                <tr>
                                    <th>代金の支払方法</th>
                                    <td>銀行振込（※ココナラ経由の場合はプラットフォームの決済方法に準じます）</td>
                                </tr>
                                <tr>
                                    <th>支払時期</th>
                                    <td>個別の契約およびお見積書に定める期日とします。</td>
                                </tr>
                                <tr>
                                    <th>サービスの提供時期</th>
                                    <td>個別の契約において定めた納期に従って納品いたします。</td>
                                </tr>
                                <tr>
                                    <th>返品・キャンセル<br />不良品について</th>
                                    <td>
                                        サービスの性質上、契約締結後および制作着手後のキャンセル・返金はお受けできません。納品物に重大な瑕疵があった場合は、契約に基づき修正等の対応をいたします。
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Law;
