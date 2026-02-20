import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/layout/ScrollToTop';
import Home from './pages/Home';
import Works from './pages/Works';
import Service from './pages/Service';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Law from './pages/Law';

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/law" element={<Law />} />
      </Routes>
      {/* <div style={{ padding: '100px', textAlign: 'center' }}>
        <h2>Partial Restoration Mode</h2>
        <p>Home component is causing the crash. Investigating...</p>
      </div> */}
    </Layout>
  );
}

export default App;
