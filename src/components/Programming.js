import React from 'react';

function Programming(props) {
    return (

        <section style={{backgroundColor: 'white'}} className="service-area py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h2>Programming Profile</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="single-service wow fadeInUp text-center" data-wow-duration="1s">
                            <img
                                style={{width: '90%', height: '80px'}}
                                src="https://iili.io/oT0jj9.png"
                                alt="Codeforces Profile"
                            />
                            <br/>
                            <a
                                target="_blank"
                                href="https://codeforces.com/profile/bhyean"
                                className="primary-btn mt-50"
                                rel="noopener noreferrer"
                                data-text="Code Forces"
                            >
                                <span>P</span><span>r</span><span>o</span><span>f</span>
                                <span>i</span><span>l</span><span>e</span>
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="single-service wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s">
                            <img
                                style={{height: '80px'}}
                                src="https://cdn.iconscout.com/icon/free/png-256/free-leetcode-3521542-2944960.png?f=webp"
                                alt="LeetCode Profile"
                            />
                            <br/>
                            <a
                                target="_blank"
                                href="https://leetcode.com/bhyeanhasan/"
                                className="primary-btn mt-50"
                                rel="noopener noreferrer"
                                data-text="LeetCode"
                            >
                                <span>P</span><span>r</span><span>o</span><span>f</span>
                                <span>i</span><span>l</span><span>e</span>
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-service wow fadeInUp text-center" data-wow-duration="1s"
                             data-wow-delay="0.6s">
                            <img
                                style={{width: '110%', height: '80px'}}
                                src="img/hack.svg"
                                alt="HackerRank Profile"
                            />
                            <br/>
                            <a
                                target="_blank"
                                href="https://www.hackerrank.com/bhyeanhasan"
                                className="primary-btn mt-50 bg-dark"
                                rel="noopener noreferrer"
                                data-text="Hacker Rank"
                            >
                                <span>P</span><span>r</span><span>o</span><span>f</span>
                                <span>i</span><span>l</span><span>e</span>
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-service wow fadeInUp text-center" data-wow-duration="1s"
                             data-wow-delay="0.4s">
                            <img
                                style={{height: '80px'}}
                                src="https://iili.io/oT0WpS.png"
                                alt="URI Profile"
                            />
                            <br/>
                            <a
                                target="_blank"
                                href="https://www.urionlinejudge.com.br/judge/en/profile/312468"
                                className="primary-btn mt-50"
                                rel="noopener noreferrer"
                                data-text="URI"
                            >
                                <span>P</span><span>r</span><span>o</span><span>f</span>
                                <span>i</span><span>l</span><span>e</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Programming;