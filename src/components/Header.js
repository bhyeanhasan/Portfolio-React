import React from 'react';
import mypic from '../img/banner-img.png'
const Header = () => {
    return (
        <div className="header">

            <div className="container">
                <div className="row fullscreen d-flex align-items-center">
                    <div className="banner-content col-lg-6 col-md-12 justify-content-center mt-5">

                        <div className="me wow fadeInDown" data-wow-duration="1s" data-wow-delay="1.2s">
                            It's me
                        </div>

                        <h1 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.7s">
                            B H Yean Hasan
                        </h1>

                        <div className="designation mb-50 wow fadeInUp" data-wow-duration="1s" data-wow-delay="2.1s">
                            B.Sc Engineering in
                            <span className="designer">
								C.S.E.
							</span>
                            <span className="designer">
								Software Engineer
							</span>
                            and Web
                            <span className="developer">
								Developer
							</span>
                        </div>


                        <a href="https://github.com/bhyeanhasan" className="primary-btn" data-text="Projects and Works"
                           target="_blank">
                            <span>G</span>
                            <span>i</span>
                            <span>t</span>
                            <span>h</span>
                            <span>u</span>
                            <span>b</span>
                            <span></span>
                            <span>P</span>
                            <span>r</span>
                            <span>o</span>
                            <span>f</span>
                            <span>i</span>
                            <span>l</span>
                            <span>l</span>
                            <span>e</span>
                        </a>

                    </div>

                    <div className="banner-img col-lg-6 col-md-6 align-self-end">

                        <img className="img-fluid" src={mypic} alt="BH's Image"/>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Header;

