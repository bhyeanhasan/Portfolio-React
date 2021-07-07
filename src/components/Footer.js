import React from 'react';
import 'font-awesome/css/font-awesome.css';

const Footer = () => (
    <div>
        <footer className="footer-area" styles="margin: 0px; padding: 0px">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="footer-top flex-column">
                            <div className="footer-logo">

                                <h4>Follow Me</h4>
                            </div>
                            <div className="footer-social">
                                <a target="_blank" href="https://www.facebook.com/bhyeanhasan"><i
                                    className="fa fa-facebook"></i></a>
                                <a target="_blank" href="https://twitter.com/bhyeanhasan"><i
                                    className="fa fa-twitter"></i></a>
                                <a target="_blank" href="https://www.linkedin.com/in/bhyeanhasan/"><i
                                    className="fa fa-linkedin"></i></a>
                                <a target="_blank" href="https://www.instagram.com/bhyeanhasan/"><i
                                    className="fa fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row footer-bottom justify-content-center">
                    <p className="col-lg-8 col-sm-12 footer-text pb-4">

                        Copyright &copy;
                        <script>document.write(new Date().getFullYear());</script>
                        <br/> All rights reserved <a href="https://about.me/bhyeanhasan" target="_blank">B H Yean
                            Hasan </a>
                    </p>

                </div>
            </div>
        </footer>

        <div id="back-top">
            <a title="Go to Top" href="#">
                <i className="fa fa-arrow-up"></i>
            </a>
        </div>
    </div>
);

export default Footer;