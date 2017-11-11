import React, { Component } from 'react';

class FooterContainer extends Component {
    render() {
        return (
            <footer id="footer-bottom">
                <section class="container">
                    <div class="copyrights f_left">Copyright 2017 | <a href="https://github.com/gfrancischini">Gabriel Parelli Francischini</a></div>
                    <div class="social_icons f_right">
                        <ul>
                        <li class="github"><a original-title="GitHub" class="tooltip-n" href="https://github.com/gfrancischini"><i class="social_icon-github font17"></i></a></li>
                            <li class="twitter"><a original-title="Twitter" class="tooltip-n" href="https://twitter.com/GaFrancischini"><i class="social_icon-twitter font17"></i></a></li>
                            <li class="facebook"><a original-title="Facebook" class="tooltip-n" href="https://www.facebook.com/gafrancischini"><i class="social_icon-facebook font17"></i></a></li>
                            <li class="gplus"><a original-title="Google plus" class="tooltip-n" href="#"><i class="social_icon-gplus font17"></i></a></li>
                        </ul>
                    </div>
                </section>
            </footer>)
    }
}

export default FooterContainer;