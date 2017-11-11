import React, { Component } from 'react';

class FooterContainer extends Component {
    render() {
        return (
            <footer id="footer-bottom">
                <section className="container">
                    <div className="copyrights f_left">Copyright 2017 | <a href="https://github.com/gfrancischini">Gabriel Parelli Francischini</a></div>
                    <div className="social_icons f_right">
                        <ul>
                        <li className="github"><a original-title="GitHub" className="tooltip-n" href="https://github.com/gfrancischini"><i className="social_icon-github font17"></i></a></li>
                            <li className="twitter"><a original-title="Twitter" className="tooltip-n" href="https://twitter.com/GaFrancischini"><i className="social_icon-twitter font17"></i></a></li>
                            <li className="facebook"><a original-title="Facebook" className="tooltip-n" href="https://www.facebook.com/gafrancischini"><i className="social_icon-facebook font17"></i></a></li>
                            <li className="gplus"><a original-title="Google plus" className="tooltip-n" href="#"><i className="social_icon-gplus font17"></i></a></li>
                        </ul>
                    </div>
                </section>
            </footer>)
    }
}

export default FooterContainer;