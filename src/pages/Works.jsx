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
        scope: 'Design / Coding',
        image: 'https://images.unsplash.com/photo-1599447421405-0c3072a73efd?q=80&w=2600&auto=format&fit=crop',
        desc: 'Relaxing yoga studio website.',
        issue: 'Lack of online bookings and outdated design.',
        solution: 'Implemented a serene, minimalist design with an easy-to-use booking system. Used AI to generate soothing background imagery.',
        result: 'Bookings increased by 40% in the first month.'
    },
    {
        id: 2,
        title: 'Tech Innovations Inc.',
        category: 'Print',
        scope: 'Brochure Design',
        image: 'https://images.unsplash.com/photo-1586717791821-3f44a5638d0f?q=80&w=2600&auto=format&fit=crop',
        desc: 'Corporate brochure for a tech firm.',
        issue: 'Needed to explain complex tech simply to investors.',
        solution: 'Created clean infographics and a structured layout. AI helped summarize technical specs into readable copy.',
        result: 'Successfully distributed at 3 major conferences.'
    },
    {
        id: 3,
        title: 'Future Coffee',
        category: 'Movie',
        scope: 'Video Editing / VFX',
        image: 'https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=2574&auto=format&fit=crop',
        desc: 'Futuristic coffee brand commercial.',
        issue: 'Low budget for shooting locations.',
        solution: 'Used Generative AI to create futuristic backdrops and composited them with studio product shots.',
        result: '100k views on social media within a week.'
    },
    {
        id: 4,
        title: 'Ec-Site Redesign',
        category: 'Web',
        scope: 'UI/UX Design',
        image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?q=80&w=2670&auto=format&fit=crop',
        desc: 'Modernizing an online store.',
        issue: 'High cart abandonment rate.',
        solution: 'Streamlined the checkout process and added AI-powered product recommendations.',
        result: 'Conversion rate improved by 15%.'
    },
    {
        id: 5,
        title: 'Music Festival 2026',
        category: 'Print',
        scope: 'Poster / Flyler',
        image: 'https://images.unsplash.com/photo-1459749411177-d4a375200ec0?q=80&w=2670&auto=format&fit=crop',
        desc: 'Key visual for a summer festival.',
        issue: 'Need a visual that captures the energy of the event.',
        solution: 'Generated dynamic abstract art using AI and refined it with typography.',
        result: 'Tickets sold out in 3 days.'
    },
    {
        id: 6,
        title: 'Indie Band MV',
        category: 'Movie',
        scope: 'Motion Graphics',
        image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2670&auto=format&fit=crop',
        desc: 'Psychedelic music video.',
        issue: 'Band wanted a dream-like visual.',
        solution: 'AI video generation tools used to morph scenes in sync with the beat.',
        result: 'High engagement from fans.'
    },
];

const Works = () => {
    const [filter, setFilter] = useState('All');
    const [selectedWork, setSelectedWork] = useState(null);

    const filteredWorks = filter === 'All'
        ? worksData
        : worksData.filter(work => work.category === filter);

    return (
        <div className="works-page page-transition">
            <Section className="works-header">
                <h1>WORKS</h1>
                <p>A curated list of projects across digital and physical mediums.</p>

                <div className="filter-buttons">
                    {['All', 'Web', 'Print', 'Movie'].map(category => (
                        <button
                            key={category}
                            className={`filter-btn ${filter === category ? 'active' : ''}`}
                            onClick={() => setFilter(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </Section>

            <Section>
                <div className="works-grid">
                    {filteredWorks.map((work, index) => (
                        <div
                            key={work.id}
                            className={`work-card ${index === 0 ? 'highlight-item' : ''}`}
                            onClick={() => setSelectedWork(work)}
                        >
                            <div className="work-image">
                                <img src={work.image} alt={work.title} />
                                <div className="work-overlay">
                                    <span className="work-category">{work.category}</span>
                                </div>
                            </div>
                            <div className="work-info">
                                <h3>{work.title}</h3>
                                <p className="work-scope">{work.scope}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Detail Modal */}
            {selectedWork && (
                <div className="modal-overlay" onClick={() => setSelectedWork(null)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setSelectedWork(null)}>
                            <X size={24} />
                        </button>
                        <div className="modal-image">
                            <img src={selectedWork.image} alt={selectedWork.title} />
                        </div>
                        <div className="modal-body">
                            <h2>{selectedWork.title}</h2>
                            <div className="modal-meta">
                                <span className="tag">{selectedWork.category}</span>
                                <span className="scope">{selectedWork.scope}</span>
                            </div>

                            <div className="modal-section">
                                <h4>Issue</h4>
                                <p>{selectedWork.issue}</p>
                            </div>
                            <div className="modal-section">
                                <h4>Solution</h4>
                                <p>{selectedWork.solution}</p>
                            </div>
                            <div className="modal-section">
                                <h4>Result</h4>
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
