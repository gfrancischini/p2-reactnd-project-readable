import React from 'react';

export const Menu = ({ children }) => (
    <nav className="navigation">
        <ul>
            {children.map(child => child)}
        </ul>
    </nav>
)


