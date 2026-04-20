import React from 'react';
import './award.css';
import awards from '../data/awards';

function Award(props) {

    return (
        <section className="about-area my-5">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h2>Academic achievements & Awards</h2>
                        </div>
                    </div>

                    <div className="col-lg-5 about-left p-3">
                        <img
                            className="award-img img-fluid shadow"
                            src={awards[0].image}
                            alt="Formal Picture"
                        />
                    </div>

                    <div className="col-lg-6 col-md-12 about-right">
                        <a
                            href="#"
                            className="btn-block primary-btn my-1"
                            data-text={awards[0].title}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span>PSTU</span>
                            <span></span>
                            <span>{awards[0].event}</span>
                        </a>

                        <br />

                        {awards.slice(1).map((award, index) => (
                            <div key={index}>
                                <a
                                    href="#"
                                    className="btn-block primary-btn white my-1"
                                    data-text={award.title}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {award.details.map((detail, i) => (
                                        <span key={i}>{detail}</span>
                                    ))}
                                </a>
                                <br />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>);
}

export default Award;