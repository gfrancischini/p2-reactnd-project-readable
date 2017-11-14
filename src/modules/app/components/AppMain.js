
import React from 'react';
import { Link } from 'react-router-dom'
import { AppSideBar } from './AppSideBar'

export const AppMain = ({ children }) => (
    <section className="container main-content">
        <div className="row">
            <div className="col-md-9">
                {children.map((child => child))}
            </div>

            <AppSideBar />
        </div>
    </section>
)
