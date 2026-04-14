import React from 'react';
import './research.css';

function Research(props) {
    const researches = [
        {
            title: "A machine learning framework for promoter identification: integrating explainable AI for genomic insights\n",
            site: "Journal of Electrical Systems and Information Technology (JESIT)",
            link: "https://link.springer.com/article/10.1186/s43067-026-00339-9",
            location: "Springer Nature"
        },

        {
            title: "Unraveling Urban Traffic Congestion Patterns in Bangladesh\n",
            site: "11th International Conference on Vehicle Technology and Intelligent Transport Systems - VEHITS 2025",
            link: "https://www.scitepress.org/PublicationsDetail.aspx?ID=C6x1Jje/Ncw=&t=1",
            location: "Porto, Portugal"
        },

        {
            title: "IoT-Enabled Real-Time Health Analytics Using Integrated Multi-Modal Biomedical Sensors\n",
            site: "Journal of the Patuakhali Science and Technology University",
            link: "https://journal.pstu.ac.bd/",
            location: "Dumki, Patuakhali"
        },

    ];
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