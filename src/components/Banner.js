import React, {Component} from 'react';
import './banner.css';

class Banner extends Component {
    render() {
        return (
            <section className="home-banner-area">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="banner-content col-lg-6 col-md-12 justify-content-center mt-1">
                            <div className="mymedia">
                                <div
                                    className="wow fadeInDown"
                                    data-wow-duration="2s"
                                    data-wow-delay="1.2s"
                                >
                                    <a href="index.html">
                                        <img
                                            className="logo"
                                            alt="logo of bhyeanhasan"
                                            src="img/bh_logo.png"
                                        />
                                    </a>
                                </div>

                                <h1
                                    className="intro wow fadeInUp"
                                    data-wow-duration="2s"
                                    data-wow-delay="1.7s"
                                >
                                    Md. Babul Hasan
                                    <br></br>Noyon
                                </h1>

                                <div
                                    className="designation wow fadeInUp"
                                    data-wow-duration="1s"
                                    data-wow-delay="3s"
                                >
                                    Software Engineer <br/>
                                    <h3>
                                        <span className="designer">( Backend & ML )</span>
                                    </h3>
                                </div>

                                <a
                                    href="https://bhyeanhasan.blogspot.com"
                                    className="primary-btn"
                                    data-text="Visit My Blog"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span>M</span>
                                    <span>y</span>
                                    <span></span>
                                    <span>B</span>
                                    <span>l</span>
                                    <span>o</span>
                                    <span>g</span>
                                </a>
                            </div>
                        </div>

                        <div className="bgdiv col-lg-6 col-md-6 align-self-end">
                            <img
                                className="img-fluid mybg"
                                src="img/newbg2.png"
                                alt="Md. Babul Hasan (Noyon) bhyeanhasan"
                            />
                        </div>
                    </div>
                </div>
            </section>);
    }
}

export default Banner;