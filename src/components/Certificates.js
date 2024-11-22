import React from 'react';
import './certificate.css';

function Certificates(props) {
      const certificates = [
        { src: "https://iili.io/RWVi0b.png" },
        { src: "img/certificate/2.jpg" },
        { src: "img/certificate/3.jpg" },
        { src: "img/certificate/4.jpg" },
        { src: "img/certificate/5.jpg" },
        { src: "img/certificate/6.jpg" },
        { src: "img/certificate/7.jpg" },
        { src: "img/certificate/8.jpg" },
        { src: "img/certificate/9.jpg" },
        { src: "img/certificate/b1.jpg" },
        { src: "img/certificate/b2.jpg" },
        { src: "https://iili.io/RWVyLF.png" },
        { src: "https://iili.io/RWWHqg.png" },
        { src: "img/certificate/c1.jpg" },
        { src: "img/certificate/c2.jpg" },
        { src: "img/certificate/c3.jpg" },
        { src: "img/certificate/c4.jpg" },
        { src: "img/certificate/c5.jpg" },
        { src: "img/certificate/c6.jpg" },
        { src: "img/certificate/c7.jpg" },
        { src: "img/certificate/d1.jpg" },
        { src: "img/certificate/d2.jpg" },
        { src: "img/certificate/d3.jpg" },
        { src: "img/certificate/d4.jpg" },
        { src: "img/certificate/d5.jpg" },
        { src: "img/certificate/d6.jpg" },
        { src: "img/certificate/d7.jpg" }
    ];
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
                                        <img src={certificate.src} alt=""/>
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
                                style={{float: 'right'}}
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