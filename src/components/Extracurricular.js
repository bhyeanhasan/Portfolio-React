import React from 'react';
import './extracurricular.css';

function Extracurricular(props) {
    const activities = [
        {
            imgSrc: "https://iili.io/oTEVz7.png",
            altText: "Satyen Bose Science Club BUET",
            link: "#",
            role: "Campus Ambassador"
        },
        {
            imgSrc: "img/Activity&Award/bncc.jpg",
            altText: "BNCC—PSTU (Naval Wing)",
            link: "/",
            role: "Cadet"
        },
        {
            imgSrc: "img/Activity&Award/youthmappers.png",
            altText: "YouthMappers, PSTU Chapter",
            link: "/",
            role: "Head of Media & IT"
        },
        {
            imgSrc: "https://iili.io/oTEYfs.jpg",
            altText: "Bangladesh Flying Labs",
            link: "/",
            role: "Volunteer"
        },

        {
            imgSrc: "img/Activity&Award/pstucc.jpg",
            altText: "PSTU Career Club",
            link: "/",
            role: "Faculty Ambassador"
        },
        {
            imgSrc: "img/Activity&Award/bnec.jpg",
            altText: "BUET Nuclear Engineering Club",
            link: "/",
            role: "Associate"
        }
    ];
    return (
        <section className="job-area">
            <div className="container">
                <div className="section-title pt-5">
                    <h2>Extracurricular activities</h2>
                </div>

                <div className="row">
                    {activities.map((activity, index) => (
                        <div key={index} className="col-lg-4 col-md-6 col-6">
                            <div className="extracurricular single-service wow fadeInUp text-center"
                                 data-wow-duration="1s">
                                <img className="extra-curricular-img"
                                     src={activity.imgSrc}
                                     alt={activity.altText}
                                />
                                <br/>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={activity.link}
                                    className="extracurricular-btn btn-block primary-btn white"
                                    data-text={activity.altText}
                                >
                                    <span>{activity.role}</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>);
}

export default Extracurricular;