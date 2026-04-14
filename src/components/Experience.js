import React from 'react';
import './experience.css';

function Experience(props) {
    const experiences = [
        {
            role: "Software Engineer (AI & Backend)",
            company: "THT-Space Electrical Company Ltd.",
            companyLink: "https://www.linkedin.com/company/thtuepz/posts/?feedView=all",
            location: "Nilphamari, Rangpur",
            date: "April 2026 - Present",
            skills: "AI, ML, Deep Learning, Django"
        },
        {
            role: "Software Engineer (AI & Backend)",
            company: "Greentage Ltd.",
            companyLink: "https://www.linkedin.com/company/greentage",
            location: "Dhaka, Bangladesh",
            date: "October 2024 - March 2026",
            skills: "AI, ML, Django"
        },
        {
            role: "Software Engineer (Backend & ML)",
            company: "Intelsense AI",
            companyLink: "https://www.intelsense.ai/",
            location: "Dhaka, Bangladesh",
            date: "April 2024 - October 2024",
            skills: "Django, FastAPI, ML, React"
        },
        {
            role: "Intern Software Engineer (Backend & ML)",
            company: "Intelsense AI",
            companyLink: "https://www.intelsense.ai/",
            location: "Dhaka, Bangladesh",
            date: "April 2024 - October 2024",
            skills: "Django, FastAPI, ML, React"
        },
        {
            role: "Smart Health Monitoring System (IOT)",
            company: "Bangladesh Bureau of Educational Information & Statistics",
            companyLink: "https://banbeis.gov.bd/",
            location: "(BANBEIS), Ministry of Education, Bangladesh",
            date: "July 2023 - July 2024",
            skills: "Raspberry Pi, Sensors, Socket Programming, Django Channels"
        },
        {
            role: "Research Assistant",
            company: "Manash Sarker, Assistant Professor",
            companyLink: "",
            location: "Patuakhali Science and Technology University",
            date: "March 2023 - October 2024",
            skills: "Deep Learning, Traffic Prediction, Spatio-Temporal Data, Time Series Analysis"
        }

    ];
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