import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export const Menu = () => (


    <header id="header">
        <section className="container clearfix">
            <div className="logo"><Link to="/"><img alt="" src="/images/logo.png" /></Link></div>
            <nav className="navigation">
                <ul>
                    <li className="current_page_item"><Link to="/">Home</Link></li>
                    <li className="ask_question"><Link to="/post/new">Create a Post</Link></li>
                    <li><a href="cat_question.html">Categories</a>
                        <ul>
                            <li><a href="cat_question.html">Questions Category</a></li>
                            <li><a href="single_question.html">Question Single</a></li>
                            <li><a href="single_question_poll.html">Poll Question Single</a></li>
                        </ul>
                    </li>
                    <li><a href="contact_us.html">About</a></li>
                </ul>
            </nav>
        </section>
    </header>

)
