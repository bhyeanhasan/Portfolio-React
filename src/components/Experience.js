import React from 'react';
import './experience.css';
import experiences from '../data/experiences';

function Experience(props) {

    return (
        <section className="job-area mb-5 mt-5">
            <div className="container">
                <div className="row d-flex">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h2>Experiences</h2>
                        </div>
                    </div>
                </div>
                <div className="experience-timeline">
                    {experiences.map((experience, index) => (
                        <div className="timeline-item wow fadeInUp" key={index} data-wow-delay={`${index * 0.1}s`}>
                            <div className="timeline-dot"></div>
                            <div className="timeline-card">
                                <h2 className="exp-role">{experience.role}</h2>

                                {experience.companyLink ? (
                                    <div className="exp-company">
                                        <a href={experience.companyLink} target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-building" aria-hidden="true"></i> {experience.company}
                                        </a>
                                    </div>
                                ) : (
                                    <div className="exp-company">
                                        <i className="fa fa-building" aria-hidden="true"></i> {experience.company}
                                    </div>
                                )}

                                <div className="exp-meta">
                                    <span className="exp-meta-item">
                                        <i className="fa fa-calendar" aria-hidden="true"></i> {experience.date}
                                    </span>
                                    <span className="exp-meta-item">
                                        <i className="fa fa-map-marker" aria-hidden="true"></i> {experience.location}
                                    </span>
                                </div>

                                <div className="exp-skills">
                                    {experience.skills.split(',').map((skill, skillIndex) => (
                                        <span className="skill-badge" key={skillIndex}>
                                            {skill.trim()}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Experience;