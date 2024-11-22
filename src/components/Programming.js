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

                <div className="row">
                    {profiles.map((profile) => (
                        <div className="col-lg-3 col-md-6 col-6" key={profile.id}>
                            <div className="programming single-service wow fadeInUp text-center" data-wow-duration="1s">
                                <img className="programming-img"
                                    src={profile.imageUrl}
                                    alt={profile.altText}
                                />
                                <br/>
                                <a
                                    style={{width: '90%'}}
                                    target="_blank"
                                    href={profile.link}
                                    className="btn primary-btn"
                                    rel="noopener noreferrer"
                                    data-text={profile.name}
                                >
                                    {Array.from(profile.name).map((char, index) => (
                                        <span key={index}>{char}</span>
                                    ))}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Programming;
