import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const Section = ({ children, className = '', id = '' }) => {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section
            id={id}
            ref={ref}
            className={`container animate-on-scroll ${isVisible ? 'is-visible' : ''} ${className}`}
            style={{ padding: 'var(--section-padding)' }}
        >
            {children}
        </section>
    );
};

export default Section;
