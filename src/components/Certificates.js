import React from 'react';
import './certificate.css';
import certificates from '../data/certificates';

function Certificates(props) {

    return (
        <section className="job-area mb-5 mt-5">
            <div className="container">
                <div className="row d-flex">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h2>Selected Courses & Certificates</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <div id="myCarousel" className="carousel slide" data-ride="carousel">
                            {/* Carousel indicators */}
                            <ol className="carousel-indicators">
                                {certificates.map((_, index) => (
                                    <li
                                        key={index}
                                        data-target="#myCarousel"
                                        data-slide-to={index}
                                        className={index === 0 ? "active" : ""}
                                    >

                                    </li>
                                ))}
                            </ol>

                            {/* Wrapper for carousel items */}
                            <div className="carousel-inner">
                                {certificates.map((certificate, index) => (
                                    <div
                                        key={index}
                                        className={`item ${index === 0 ? "active" : ""}`}
                                    >
                                        <img src={certificate.src} alt="" />
                                    </div>
                                ))}
                            </div>

                            {/* Carousel controls */}
                            <a href="#myCarousel" data-slide="prev">
                                <button
                                    type="button"
                                    className="mt-3 btn btn-outline-warning"
                                >
                                    <span>
                                        <i className="fa fa-angle-left"></i> Previous
                                    </span>
                                </button>
                            </a>

                            <a
                                style={{ float: 'right' }}
                                href="#myCarousel"
                                data-slide="next"
                            >
                                <button
                                    type="button"
                                    className="mt-3 btn btn-outline-warning"
                                >
                                    <span>
                                        <i className="fa fa-angle-right"></i> Next
                                    </span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Certificates;