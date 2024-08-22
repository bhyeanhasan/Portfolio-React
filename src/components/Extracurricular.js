import React from 'react';

function Extracurricular(props) {
    const activities = [
        {
            imgSrc: "https://iili.io/oTEVz7.png",
            altText: "Satyen Bose Science Club BUET",
            link: "https://codeforces.com/profile/bhyean",
            role: "Campus Ambassador"
        },
        {
            imgSrc: "img/Activity&Award/bncc.jpg",
            altText: "BNCC—PSTU (Naval Wing)",
            link: "https://codeforces.com/profile/bhyean",
            role: "Cadet"
        },
        {
            imgSrc: "https://iili.io/oTEYfs.jpg",
            altText: "Bangladesh Flying Labs",
            link: "https://codeforces.com/profile/bhyean",
            role: "Volunteer"
        },
        {
            imgSrc: "img/Activity&Award/education_ollympiad.jpg",
            altText: "Education Olympiad",
            link: "https://codeforces.com/profile/bhyean",
            role: "Campus Ambassador"
        },
        {
            imgSrc: "img/Activity&Award/pstucc.jpg",
            altText: "PSTU Career Club",
            link: "https://codeforces.com/profile/bhyean",
            role: "Faculty Ambassador"
        },
        {
            imgSrc: "img/Activity&Award/bnec.jpg",
            altText: "BUET Nuclear Engineering Club",
            link: "https://codeforces.com/profile/bhyean",
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
                        <div key={index} className="col-lg-4 col-md-6">
                            <div className="single-service wow fadeInUp text-center" data-wow-duration="1s">
                                <img
                                    style={{border: 'medium', borderRadius: '20px', width: '100%', height: '300px'}}
                                    src={activity.imgSrc}
                                    alt={activity.altText}
                                />
                                <br/>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={activity.link}
                                    className="btn-block primary-btn mt-3 white"
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