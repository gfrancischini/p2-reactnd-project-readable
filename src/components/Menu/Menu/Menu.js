import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export const Menu = ({children}) => (
    <nav className="navigation">
        <ul>
            {children.map(child => child)}
        </ul>
    </nav>
)


