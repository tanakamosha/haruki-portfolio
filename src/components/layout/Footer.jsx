import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer bg-slate-900 text-white py-10 border-t border-gray-800">
            <div className="container max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Left: Brand Identity */}
                    <div className="flex flex-col gap-2">
                        <h2 className="text-2xl font-bold tracking-wider" style={{ fontFamily: 'Oswald, sans-serif' }}>Haruki Wakiyama</h2>
                        <span className="text-sm text-gray-400">Web & Graphic Designer</span>
                        <p className="text-xs text-gray-500 mt-2">デザインでビジネスを加速させる。</p>
                    </div>

                    {/* Center: Navigation */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-sm font-bold text-gray-500">MENU</h3>
                        <Link to="/" className="text-sm hover:text-blue-400 transition-colors">HOME</Link>
                        <Link to="/works" className="text-sm hover:text-blue-400 transition-colors">WORKS</Link>
                        <Link to="/service" className="text-sm hover:text-blue-400 transition-colors">SERVICE</Link>
                        <Link to="/about" className="text-sm hover:text-blue-400 transition-colors">ABOUT</Link>
                        <Link to="/contact" className="text-sm hover:text-blue-400 transition-colors">CONTACT</Link>
                    </div>

                    {/* Right: Legal & Social */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-sm font-bold text-gray-500">LEGAL & SOCIAL</h3>
                        <div className="flex flex-col gap-2 mb-2">
                            <Link to="/privacy" className="text-sm hover:text-blue-400 transition-colors">プライバシーポリシー</Link>
                            <Link to="/law" className="text-sm hover:text-blue-400 transition-colors">特定商取引法に基づく表記</Link>
                        </div>
                        <div className="flex gap-4">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="text-white hover:text-blue-400 transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-blue-400 transition-colors">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom: Copyright */}
                <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
                    &copy; 2026 Haruki Wakiyama All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
