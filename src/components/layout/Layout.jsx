import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', transform: 'none', filter: 'none', perspective: 'none' }}>
                <main style={{ flex: 1 }}> {/* Removed padding to fix Top Page Gap */}
                    {children}
                </main>
                <Footer />
            </div>
        </>
    );
};

export default Layout;
