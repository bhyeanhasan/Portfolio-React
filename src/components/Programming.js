import React from 'react';
import './programming.css';
import profiles from '../data/programming';

function Programming() {


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
