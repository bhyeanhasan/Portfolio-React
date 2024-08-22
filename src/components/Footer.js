import React from 'react';

function Footer(props) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-area" style={{margin: 0, padding: 0}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="footer-top flex-column mt-3">
                            <div className="footer-logo">
                                <a href="#">
                                    <img style={{height: '100px'}} src="img/bh_logo.png" alt="Logo"/>
                                </a>
                                <h3 className="p-2">Thanks for Visiting</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row footer-bottom justify-content-center">
                    <p className="col-lg-8 col-sm-12 footer-text pb-4">
                        Copyright &copy; {currentYear}
                        <br/>
                        All rights reserved{' '}
                        <a href="https://about.me/bhyeanhasan" target="_blank" rel="noopener noreferrer">
                            Md. Babul Hasan (Noyon)
                        </a>
                    </p>
                </div>
            </div>
        </footer>);
}

export default Footer;