import React from 'react';
import './education.css';

function Education() {
    const educationData = [
        {
            id: 0,
            institution: 'Bangladesh University of Engineering and Technology - (BUET)',
            location: '',
            faculty: 'Institute of Information and Communication Technology (IICT)',
            link: 'https://www.buet.ac.bd/',
            degree: 'M.Sc. Engineering (ICT)',
            buttonText: 'M.Sc.Engineering.(ICT)',
            background: '/img/buet.jpeg',
        },
        {
            id: 1,
            institution: 'Patuakhali Science and Technology University - (PSTU)',
            location: '',
            faculty: 'Faculty of Computer Science and Engineering',
            link: 'http://www.pstu.ac.bd/',
            degree: 'B.Sc. Engineering (CSE)',
            buttonText: 'B.Sc. Engineering.(CSE)',
            background: '/img/pstu.jpeg',

        },
        {
            id: 2,
            institution: 'Govt. Syed Hatem Ali College',
            // location: 'Barishal',
            faculty: 'Science Group',
            link: 'http://www.gshac.gov.bd',
            degree: 'H.S.C.',
            buttonText: 'H.S.C.',

        },
        {
            id: 3,
            institution: 'Jhalokathi Govt. High School',
            // location: 'Jhalokathi',
            faculty: 'Science Group',
            link: 'http://www.barisalboard.gov.bd/101633/news.html',
            degree: 'J.S.C. & S.S.C.',
            buttonText: 'J.S.C. & S.S.C.',

        }
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
                                    <div className="top-left text-center" style={{textAlign: 'center'}}>
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
