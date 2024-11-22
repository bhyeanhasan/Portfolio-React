import React, {Component} from 'react';
import './sociallinks.css';

class SocialLink extends Component {
    render() {
        return (
            <section className="brands-area mb-5">
                <div className="container mt-5">
                    <div className="brand-wrap">
                        <div className="row align-items-center active-brand-carusel justify-content-start no-gutters">
                            <div className="col single-brand">
                                <h4 className="social">
                                    <a
                                        style={{color: '#e45447'}}
                                        target="_blank"
                                        href="https://github.com/bhyeanhasan"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fa fa-github-square" aria-hidden="true"></i><br/>
                                        GitHub
                                    </a>
                                </h4>
                            </div>

                            <div className="col single-brand">
                                <h4 className="social">
                                    <a
                                        style={{color: '#e45447'}}
                                        target="_blank"
                                        href="https://www.linkedin.com/in/bhyeanhasan/"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fa fa-linkedin-square" aria-hidden="true"></i><br/>
                                        LinkedIn
                                    </a>
                                </h4>
                            </div>

                            <div className="col single-brand">
                                <h4 className="social">
                                    <a
                                        style={{color: '#e45447'}}
                                        target="_blank"
                                        href="https://www.facebook.com/bhyeanhasan/"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fa fa-facebook-square" aria-hidden="true"></i><br/>
                                        Facebook
                                    </a>
                                </h4>
                            </div>

                            <div className="col single-brand">
                                <h4 className="social">
                                    <a
                                        style={{color: '#e45447'}}
                                        target="_blank"
                                        href="https://twitter.com/bhyeanhasan"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fa fa-twitter-square" aria-hidden="true"></i><br/>
                                        Twitter
                                    </a>
                                </h4>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default SocialLink;