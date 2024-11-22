import React, {Component} from 'react';
import './about.css';

import {Link} from "react-router-dom";

class About extends Component {
    render() {
        return (
            <section className="about-area mt-5">
                <div className="container">
                    <div className="row align-items-center justify-content-between">

                        <div className="col-lg-6 about-left p-4">
                            <img
                                className='about-img'
                                src="img/deffence1.jpeg"
                                alt="Md. Babul Hasan (Noyon) bhyeanhasan"
                            />
                        </div>

                        <div className="col-lg-5 col-md-12 about-right">
                            <div className="section-title">
                                <h2>About Myself</h2>
                            </div>

                            <a
                                href="https://github.com/bhyeanhasan"
                                className="btn-block primary-btn white my-1"
                                data-text="Projects and Works"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
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
                                <span>e</span>
                            </a>

                            <br/>
                            <br/>


                            <Link to="/resume"
                                  className="btn-block primary-btn my-1"
                                  data-text="Resume"
                                  rel="noopener noreferrer"
                            >
                                <span>R</span>
                                <span>e</span>
                                <span>s</span>
                                <span>u</span>
                                <span>m</span>
                                <span>e</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;