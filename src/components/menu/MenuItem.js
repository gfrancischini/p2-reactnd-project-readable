import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export const MenuItem = ({title, to, children }) => (
    <li><Link to={to}>{title}</Link>
        <ul>
            {children ? children.map((child) => child) : (null)}
        </ul>
    </li>
)
