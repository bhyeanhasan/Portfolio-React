import React from 'react';
import School from "./School";


const Education = () => {
    return (

        <div className="job-area mb-5 mt-5">
            <div className="container">

                <div className="row d-flex">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h2>Educational Qualification</h2>
                        </div>
                    </div>
                </div>

                <div className="row">

                    <School/>

                </div>

            </div>
        </div>

    );
};


export default Education;