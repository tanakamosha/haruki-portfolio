import React from 'react';

const MagneticButton = ({ children, as: Component = 'button', style, ...props }) => {
    return (
        <Component style={style} {...props}>
            {children}
        </Component>
    );
};

export default MagneticButton;
