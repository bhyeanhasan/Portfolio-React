import React from 'react';

const Projects = () => (
    <div className="work-area py-5" id="work">
        <div className="container">
            <div className="row d-flex justify-content-between align-items-end ">
                <div className="col-lg-12">
                    <div className="section-title">
                        <h2>My Projects</h2>
                    </div>
                </div>

                <div className="col-md-12 mb-3">

                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <iframe className="project-panel"  width="100%"
                                        height="350" src="https://www.youtube.com/embed/uJ3zJL74lCc"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>

                            </div>
                            <div className="col-md-6">
                                <iframe className="project-panel" width="100%"
                                        height="350" src="https://www.youtube.com/embed/WOaj2wl5tMo"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                            </div>

                            <div className="col-md-6 text-center">
                                <iframe
                                    src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fbhyeanhasan%2Fvideos%2F2679556202357394%2F&show_text=true&width=267&t=0"
                                    width="70%" height="591" className="project-panel" scrolling="no"
                                    frameBorder="0" allowFullScreen="true"
                                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                    allowFullScreen="true"></iframe>

                            </div>

                            <div className="col-md-6 text-center">
                                <iframe
                                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fbhyeanhasan%2Fposts%2F2650341541945527&show_text=true&width=500"
                                    width="100%" height="591" className="project-panel" scrolling="no"
                                    frameBorder="0" allowFullScreen="true"
                                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                            </div>

                        </div>
                    </div>


                </div>

                <div className="col-md-12 p-0 m-0">
                    <div className="single-job ">
                        <div className="github-widget" data-user="bhyeanhasan" data-options='{"forks":true}'></div>

                        <div className="bottom-sec wow fadeIn" data-wow-duration="2s">

                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>

);

export default Projects;