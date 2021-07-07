import React from 'react';

const AboutMyself=()=> {
    return (
        <div>
            <div className="about-area mt-5">
                <div className="container">
                    <div className="row align-items-center justify-content-between">

                        <div className="col-lg-6 about-left p-4">
                            <img className="img-fluid about-image"
                                 src="https://iili.io/B2qc2j.jpg" alt="Formal Picture"/>
                        </div>

                        <div className="col-lg-5 col-md-12 about-right">

                            <div className="section-title">
                                <h2>about myself</h2>
                            </div>


                            <a href="https://bhyeanhasan.blogspot.com" className="btn-block primary-btn white my-1"
                               data-text="My Blog" target="_blank">
                                <span>M</span>
                                <span>y</span>
                                <span></span>
                                <span>B</span>
                                <span>l</span>
                                <span>o</span>
                                <span>g</span>
                            </a>
                            <br/>
                                    <a href="#" className="btn-block primary-btn my-1"
                                       data-text="Resume" target="_blank">
                                        <span>R</span>
                                        <span>e</span>
                                        <span>s</span>
                                        <span>u</span>
                                        <span>m</span>
                                        <span>e</span>
                                    </a>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default AboutMyself;