import React, { Component } from 'react';
import './banner.css';
import SocialLink from './SocialLink';
import profile from '../data/profile';

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
                                    data-wow-delay="0.5s"
                                >
                                    <a href="index.html">
                                        <img
                                            className="logo"
                                            alt={`logo of ${profile.name}`}
                                            src={profile.logo}
                                        />
                                    </a>
                                </div>

                                <h3 className="subtitle mt-4 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.8s">
                                    Personal Portfolio of
                                </h3>
                                <hr></hr>

                                <h2
                                    className="intro wow fadeInUp"
                                    data-wow-duration="1.5s"
                                    data-wow-delay="1s"
                                >
                                    {profile.name}
                                    <br></br>{profile.nickname}
                                </h2>


                                <div
                                    className="designation wow fadeInUp"
                                    data-wow-duration="1s"
                                    data-wow-delay="1.5s"
                                >
                                    {profile.designation} <br />
                                    <h3>
                                        <span className="designer">{profile.subDesignation}</span>
                                    </h3>
                                </div>

                                <a
                                    href={profile.blog}
                                    className="hero-btn wow fadeInUp"
                                    data-wow-duration="1s"
                                    data-wow-delay="2s"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Visit My Blog <i className="fa fa-newspaper-o" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>

                        <div className="bgdiv col-lg-6 col-md-6 text-center align-self-end">
                            <img
                                className="img-fluid mybg floating-portrait"
                                src={profile.mainImage}
                                alt={`${profile.name} (${profile.nickname})`}
                            />
                        </div>
                    </div>
                </div>

                {/* Embedded within Banner to share the specific layout and background logic */}
                <SocialLink />
            </section>);
    }
}

export default Banner;