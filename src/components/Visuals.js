import React from 'react';
import './visuals.css';

function Visuals(props) {
    const videos = [
        "https://www.youtube.com/embed/uJ3zJL74lCc",
        "https://www.youtube.com/embed/WOaj2wl5tMo",
        "https://www.youtube.com/embed/_HBHg3EapSk?si=qte11XQOa0BJkjR3",
        "https://www.youtube.com/embed/tzeR-nMvfPs?si=SdIowM94tTnNIwbS"
    ];

    const videos2 =[
        "https://www.youtube.com/embed/jK_B6zcHKzo?si=Jslq7bOwjaZ7TQnx",
    ]

    return (
        <section className="job-area py-5" id="work">
            <div className="container">
                <div className="row d-flex justify-content-between align-items-end">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h2>Some Visuals</h2>
                        </div>
                    </div>

                    <div className="col-md-12 mb-3">
                        <div className="container">
                            <div className="row">
                                {videos.map((videoUrl, index) => (
                                    <div key={index} className="col-md-6">
                                        <iframe
                                            className="project-panel"
                                            width="100%"
                                            height="350"
                                            src={videoUrl}
                                            title={`YouTube video player ${index + 1}`}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>


                    <div className="col-md-12 mb-3">
                        <div className="container">
                            <div className="row">
                                {videos2.map((videoUrl, index) => (
                                    <div key={index} className="col-md-12">
                                        <iframe
                                            className="project-panel"
                                            width="100%"
                                            height="350"
                                            src={videoUrl}
                                            title={`YouTube video player ${index + 1}`}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </section>
    );
}

export default Visuals;