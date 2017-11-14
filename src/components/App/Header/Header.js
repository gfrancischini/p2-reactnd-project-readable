
import React, { Component } from 'react';

import { Link } from 'react-router-dom'
import { AppMenu } from 'components/App'

export const Header = ({categories}) => {
return ( <header id="header">
 <section className="container clearfix">
     <div className="logo"><Link to="/"><img alt="" src="/images/logo.png" /></Link></div>
     <AppMenu categories={categories} />
 </section>
</header>
)

}

