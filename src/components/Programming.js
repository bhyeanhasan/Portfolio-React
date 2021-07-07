import React from 'react';
import programming from '../img/int.jpg'

const Programming = () => (

    <div className="service-area py-5"
         styles="background-image: url(https://iili.io/oT0wQe.jpg) ;background-repeat: no-repeat;background-size: cover;background-position: center;">
        <div className="container">

            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <h2 styles="color: #e5200f">Programming Profile</h2>
                    </div>
                </div>
            </div>

            <div className="row">

                <div className="col-lg-3 col-md-6 text-center">
                    <div className="programming-area single-service wow fadeInUp text-center" data-wow-duration="1s">
                        <img className="programming-image" src="https://iili.io/oT0jj9.png" alt=""/><br/>
                            <a target="_blank" href="https://codeforces.com/profile/bhyean"
                               className="primary-btn mt-50"
                               data-text="Code Forces">
                                <span>P</span>
                                <span>r</span>
                                <span>o</span>
                                <span>f</span>
                                <span>i</span>
                                <span>l</span>
                                <span>e</span>
                            </a>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 text-center">
                    <div className="programming-area single-service wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s">

                        <img className="programming-image" src="https://iili.io/oT0Vv2.png" alt=""/><br/>

                            <a target="_blank" href="https://uhunt.onlinejudge.org/id/1050342"
                               className="primary-btn mt-50"
                               data-text="Online Judge">
                                <span>P</span>
                                <span>r</span>
                                <span>o</span>
                                <span>f</span>
                                <span>i</span>
                                <span>l</span>
                                <span>e</span>
                            </a>

                    </div>

                </div>

                <div className="col-lg-3 col-md-6 text-center">
                    <div  className="programming-area single-service wow fadeInUp text-center" data-wow-duration="1s"
                         data-wow-delay="0.6s">
                        <img className="programming-image" src="https://d3keuzeb2crhkn.cloudfront.net/hackerrank/assets/styleguide/logo_wordmark-f5c5eb61ab0a154c3ed9eda24d0b9e31.svg" alt=""/><br/>
                            <a target="_blank" href="https://www.hackerrank.com/bhyeanhasan"
                               className="primary-btn mt-50 bg-dark"
                               data-text="Hacker Rank">

                                <span>P</span>
                                <span>r</span>
                                <span>o</span>
                                <span>f</span>
                                <span>i</span>
                                <span>l</span>
                                <span>e</span>
                            </a>

                    </div>
                </div>

                <div className="col-lg-3 col-md-6 text-center">
                    <div className="programming-area single-service wow fadeInUp text-center" data-wow-duration="1s"
                         data-wow-delay="0.4s">
                        <img className="programming-image" src="https://iili.io/oT0WpS.png" alt=""/><br/>
                            <a target="_blank" href="https://www.urionlinejudge.com.br/judge/en/profile/312468"
                               className="primary-btn mt-50" data-text="URI">

                                <span>P</span>
                                <span>r</span>
                                <span>o</span>
                                <span>f</span>
                                <span>i</span>
                                <span>l</span>
                                <span>e</span>
                            </a>


                    </div>
                </div>

            </div>
        </div>
    </div>


);

export default Programming;