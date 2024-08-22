import React from 'react';

function Experience(props) {
    const experiences = [
        {
            role: "ML & Backend Engineer (Intern)",
            company: "Intelsense AI",
            companyLink: "https://www.intelsense.ai/",
            location: "Dhaka, Bangladesh",
            date: "April 2024 - Present",
            skills: "Django, FastAPI, Machine Learning, React"
        },
        {
            role: "Research Assistant",
            company: "Manash Sarker, Assistant Professor",
            companyLink: "",
            location: "Patuakhali Science and Technology University",
            date: "March 2023 - Present",
            skills: "Deep Learning, Data Visualization, Traffic Prediction, Spatio-Temporal Data Analysis, Time Series Analysis"
        },
        {
            role: "ICU Monitoring System (IOT)",
            company: "Bangladesh Bureau of Educational Information & Statistics",
            companyLink: "",
            location: "(BANBEIS), Ministry of Education, Bangladesh",
            date: "July 2023 - July 2024",
            skills: "Raspberry Pi, Arduino, Sensors, React, Socket Programming, Django Channels, Channel Layers"
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


                {experiences.map((experience, index) => (
                    <div className="col-md-12" key={index}>
                        <div
                            className={`shadow experience-border wow ${index === 0 ? 'fadeInDown' : index === 1 ? 'fadeInRight' : 'fadeInUp'} p-5 my-2`}>
                            <div className="row">
                                <div className={`col-md-${experience.companyLink ? '7' : '6'} experience`}>
                                    <h3>{experience.role}</h3>
                                    {experience.companyLink ? (
                                        <h5>
                                            <a href={experience.companyLink} target="_blank" rel="noopener noreferrer">
                                                {experience.company}
                                            </a>
                                        </h5>
                                    ) : (
                                        <h5>{experience.company}</h5>
                                    )}
                                    <h5>{experience.location}</h5>
                                </div>
                                <div
                                    className={`col-md-${experience.companyLink ? '5' : '6'} experience-details experience`}>
                                    <h5 style={{color: 'green'}}>{experience.date}</h5>
                                    <h5>{experience.skills}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
}

export default Experience;