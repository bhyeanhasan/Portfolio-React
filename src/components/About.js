import React, {Component} from 'react';
import './about.css';

import {Link} from "react-router-dom";

class About extends Component {
    render() {
        return (
            <section className="about-area mt-5">
                <div className="container">
                    <div className="row align-items-center justify-content-between">

                        <div className="col-lg-6 about-left p-4 wow fadeInLeft" data-wow-duration="1s">
                            <img
                                className='about-img'
                                src="img/ppp.jpg"
                                alt="Md. Babul Hasan (Noyon) bhyeanhasan"
                            />
                        </div>

                        <div className="col-lg-5 col-md-12 about-right wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.3s">
                            <div className="section-title">
                                <h2>About Myself</h2>
                            </div>

                            <div className="about-actions">
                                <Link to="/projects"
                                      className="about-btn project-btn"
                                      rel="noopener noreferrer"
                                >
                                    <i className="fa fa-briefcase" aria-hidden="true"></i> Projects and Works
                                </Link>

                                <Link to="/resume"
                                      className="about-btn resume-btn"
                                      rel="noopener noreferrer"
                                >
                                    <i className="fa fa-file-text" aria-hidden="true"></i> View Resume
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;