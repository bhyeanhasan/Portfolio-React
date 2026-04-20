import React from 'react';
import './education.css';
import educationData from '../data/education';

function Education() {
    return (
        <section className="job-area mb-5 mt-5">
            <div className="container">
                <div className="row d-flex">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h2>Educational Qualification</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {educationData.map((edu) => (
                        <div className={edu.id === 0 || edu.id === 1 ? "col-md-12" : "col-md-6"} key={edu.id}>

                            <div className="" style={edu.background ? {
                                backgroundImage: `url(${edu.background})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                borderRadius: "10px 10px 0px 0px",
                                height: "200px"
                            } : {}}>

                            </div>
                            <div className="education single-job wow fadeInUp shadow" data-wow-duration="1s">

                                <div className="justify-content-between">
                                    <div className="top-left text-center">
                                        <h4>{edu.institution}</h4>
                                        {edu.location && <h4>{edu.location}</h4>}
                                        <p>{edu.faculty}</p>
                                    </div>
                                </div>
                                <div className="justify-content-between">
                                    <div className="top-left text-center" style={{ textAlign: 'center' }}>
                                        <a
                                            target="_blank"
                                            href={edu.link}
                                            className="primary-btn"
                                            rel="noopener noreferrer"
                                            data-text={edu.degree}
                                        >
                                            {Array.from(edu.buttonText).map((char, index) => (
                                                <span key={index}>{char}</span>
                                            ))}
                                        </a>
                                    </div>
                                </div>
                                <div className="bottom-sec wow fadeIn" data-wow-duration="2s"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Education;
