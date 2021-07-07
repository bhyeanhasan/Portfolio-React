import React from 'react';
import education from "../data/education.json";



const School = () => {
    return education.map((school) => {

        return(
            <div className="col-md-6">
                <div className="single-job">

                    <div className="justify-content-between">
                        <div className="top-left text-center">
                            <h4>{school.institution}</h4>
                            <h4>{school.where}</h4>
                            <p>{school.group}</p>
                        </div>
                    </div>

                    <div className="justify-content-between">
                        <div className="top-left text-center" styles="text-align: center">
                            <a target="_blank" href={school.website} className="primary-btn"
                               data-text={school.degree}>

                                <span>{school.degree}</span>

                            </a>
                        </div>
                    </div>

                    <div className="bottom-sec wow fadeIn" data-wow-duration="2s">

                    </div>
                </div>
            </div>


        );

    });

};

export default School;