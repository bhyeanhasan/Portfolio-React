import React from 'react';
import 'font-awesome/css/font-awesome.css';

const SocialLink =()=>{
    return (
        <div>
            <div className="brands-area mb-5">
                <div className="container mt-5">
                    <div className="brand-wrap">
                        <div className="row align-items-center active-brand-carusel justify-content-start no-gutters">

                            <div className="col single-brand">
                                <h4><a target="_blank" href="https://www.facebook.com/bhyeanhasan/">
                                    <i className="fa fa-facebook-square" aria-hidden="true"></i> <br/>
                                    facebook
                                </a></h4>
                            </div>

                            <div className="col single-brand">
                                <h4><a target="_blank" href="https://twitter.com/bhyeanhasan">
                                    <i className="fa fa-twitter-square" aria-hidden="true"></i><br/>
                                    twitter
                                </a></h4>
                            </div>

                            <div className="col single-brand">
                                <h4><a target="_blank" href="https://www.linkedin.com/in/bhyeanhasan/">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"></i><br/>
                                    linkedin
                                </a></h4>
                            </div>

                            <div className="col single-brand">
                                <h4><a target="_blank" href="https://www.instagram.com/bhyeanhasan/">
                                    <i className="fa fa-instagram" aria-hidden="true"></i><br/>
                                    instagram
                                </a></h4>
                            </div>

                            <div className="col single-brand">
                                <h4><a target="_blank" href="https://www.pinterest.com/bhyeanhasan">
                                    <i className="fa fa-pinterest-square" aria-hidden="true"></i><br/>
                                    pinterest
                                </a></h4>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
);
};

export default SocialLink;