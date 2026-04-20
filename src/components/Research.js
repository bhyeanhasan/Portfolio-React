import React from 'react';
import './research.css';
import researches from '../data/research';

function Research(props) {

    return (
        <section className="job-area mb-5 mt-5">
            <div className="container">
                <div className="row d-flex">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h2>Research Profile</h2>
                        </div>
                    </div>
                </div>

                <div className="research-container">
                    {researches.map((research, index) => (
                        <div className="research-card wow fadeInUp" key={index} data-wow-delay={`${index * 0.1}s`}>
                            <div className="research-card-content">
                                <h1 className="research-title">
                                    <i className="fa fa-book research-icon" aria-hidden="true"></i>
                                    {research.title}
                                </h1>
                                <h5 className="research-site">
                                    <i className="fa fa-university" aria-hidden="true"></i> {research.site}
                                </h5>
                                <h5 className="research-location">
                                    <i className="fa fa-globe" aria-hidden="true"></i> {research.location}
                                </h5>
                            </div>
                            {research.link && (
                                <div className="research-actions">

                                    <a href={research.link} target="_blank" rel="noopener noreferrer" className="read-paper-btn">
                                        Read Paper <i className="fa fa-arrow-right" aria-hidden="true"></i>
                                    </a>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Research;