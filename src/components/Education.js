import React from 'react';
import './education.css';


function Education() {
    const educationData = [
        {
            id: 1,
            institution: 'Patuakhali Science and Technology University',
            location: '',
            faculty: 'Faculty of Computer Science and Engineering',
            link: 'http://www.pstu.ac.bd/',
            degree: 'B.Sc. Engineering in CSE',
            buttonText: 'B.Sc. Engineering in CSE',
        },
        {
            id: 2,
            institution: 'Govt. Syed Hatem Ali College',
            location: 'Barishal',
            faculty: 'Science Group',
            link: 'http://www.gshac.gov.bd',
            degree: 'H.S.C.',
            buttonText: 'H.S.C.',
        },
        {
            id: 3,
            institution: 'Jhalokathi Govt. High School',
            location: 'Jhalokathi',
            faculty: 'Science Group',
            link: 'http://www.barisalboard.gov.bd/101633/news.html',
            degree: 'J.S.C. & S.S.C.',
            buttonText: 'J.S.C. & S.S.C.',
        },
        {
            id: 4,
            institution: 'Mirzapur Govt. Primary School',
            location: 'Jhalokathi',
            faculty: 'Ponabalia, Mirzapur',
            link: '#',
            degree: 'P.S.C.',
            buttonText: 'P.S.C.',
        },
    ];

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
                        <div className=" col-md-6" key={edu.id}>
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
