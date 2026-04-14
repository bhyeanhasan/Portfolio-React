import React from 'react';
import './programming.css';

function Programming() {
    const profiles = [
        {
            id: 3,
            name: 'HackerRank',
            imageUrl: 'img/hack.svg',
            link: 'https://www.hackerrank.com/bhyeanhasan',
            altText: 'HackerRank Profile',
        },
        {
            id: 2,
            name: 'LeetCode',
            imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-leetcode-3521542-2944960.png?f=webp',
            link: 'https://leetcode.com/bhyeanhasan/',
            altText: 'LeetCode Profile',
        },
        {
            id: 1,
            name: 'Codeforces',
            imageUrl: 'https://iili.io/oT0jj9.png',
            link: 'https://codeforces.com/profile/bhyean',
            altText: 'Codeforces Profile',
        },
        {
            id: 4,
            name: 'URI',
            imageUrl: 'https://iili.io/oT0WpS.png',
            link: 'https://www.urionlinejudge.com.br/judge/en/profile/312468',
            altText: 'URI Profile',
        },
    ];

    return (
        <section style={{backgroundColor: 'white'}} className="service-area py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h2>Programming Profile</h2>
                        </div>
                    </div>
                </div>

                <div className="programming-grid">
                    {profiles.map((profile, index) => (
                        <div className="programming-card wow fadeInUp" key={profile.id} data-wow-delay={`${index * 0.1}s`}>
                            <div className="programming-img-container">
                                <img className="programming-img"
                                    src={profile.imageUrl}
                                    alt={profile.altText}
                                />
                            </div>
                            <a
                                target="_blank"
                                href={profile.link}
                                className="platform-btn"
                                rel="noopener noreferrer"
                            >
                                View Profile <i className="fa fa-arrow-right" aria-hidden="true"></i>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Programming;
