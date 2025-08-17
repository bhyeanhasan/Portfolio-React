import React from 'react';
import './research.css';

function Research(props) {
    const researches = [
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


                {researches.map((research, index) => (
                    <div className="col-md-12 my-2" key={index}>
                        <div
                            className='shadow experience-border wow fadeInUp'>
                            <div className="row">
                                <div className={`col-md-12'}  p-5`}>
                                    <h4 className='experience-role'><i style={{color:'darkblue'}} className="fa fa-book" aria-hidden="true"></i> {research.title}</h4>
                                    {research.link ? (
                                        <h5 className="company">
                                            <a href={research.link} target="_blank" rel="noopener noreferrer">
                                                {research.site}
                                            </a>
                                        </h5>
                                    ) : (
                                        <h5 className="company">{research.site}</h5>
                                    )}
                                    <h5 className="location"><i class="fa fa-globe" aria-hidden="true"></i> {research.location}</h5>
                                </div>

                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
}

export default Research;