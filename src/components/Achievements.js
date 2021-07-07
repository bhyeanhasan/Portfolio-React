import React from 'react';

const Achievements = () => (
    <div className="about-area my-5">
        <div className="container">
            <div className="row align-items-center justify-content-between">
                <div className="col-md-12">
                    <div className="section-title">
                        <h2>Academic achievements & Awards</h2>
                    </div>
                </div>


                <div className="col-lg-5 about-left p-3">
                    <img styles="border: medium;border-radius: 10px; height: 350px" className="img-fluid"
                         src="https://iili.io/oTEHHQ.jpg" alt="Formal Picture"/>
                </div>

                <div className="col-lg-6 col-md-12 about-right">


                    <a href="#" className="btn-block primary-btn my-1" data-text="Runner-Up in Project Showcasing"
                       target="_blank">
                        <span>PSTU</span>
                        <span></span>
                        <span>IT Carnival 2019</span>
                    </a>

                    <br/>


                        <a href="#" className="btn-block primary-btn white my-1" data-text="Education Board Scholarship"
                           target="_blank">
                            <span>PSC</span>
                            <span></span>
                            <span>JSC</span>
                            <span></span>
                            <span>SSC</span>
                        </a>
                        <br/>
                            <a href="#" className="btn-block primary-btn white my-1" data-text="Aungkur scholarship"
                               target="_blank">
                                <span>2019</span>
                                <span></span>
                                <span>2020</span>
                                <span></span>
                                <span>2021</span>
                            </a>
                            <br/>
                                <a href="#" className="btn-block primary-btn white my-1"
                                   data-text="One Bank scholarship" target="_blank">
                                    <span>2019</span>
                                    <span></span>
                                    <span>2020</span>
                                </a>
                                <br/>
                                    <a href="#" className="btn-block primary-btn white my-1"
                                       data-text="Grameen Bank Scholarship"
                                       target="_blank">
                                        <span>2014</span>
                                        <span></span>
                                        <span>2016</span>
                                        <span></span>
                                        <span>2019</span>
                                    </a>


                </div>
            </div>
        </div>
    </div>

);

export default Achievements;