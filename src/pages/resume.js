import React from 'react';

function Resume(props) {
    return (
        <div>

            <div style={{backgroundColor: "white"}} className="DivIdToPrint">
                <div className="container top-intro">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="left-center">
                                <img
                                    id="mypicture"
                                    src="https://iili.io/B2qc2j.jpg"
                                    alt="Formal"
                                />
                            </div>
                        </div>

                        <div className="col-md-6 left-center">
                            <h3>MD. BABUL HASAN (NOYON)</h3>
                            <p className="txt">
                                <i className="bi bi-geo-alt-fill"></i> Jhalokathi, Barishal,
                                Bangladesh
                            </p>
                            <p>
                                <i className="bi bi-telephone-fill"></i> +880 1920599266
                            </p>
                            <p>
                                <i className="bi bi-envelope-fill"></i>{" "}
                                <a href="mailto:bhyean@yahoo.com">bhyean@gmail.com</a>
                            </p>
                            <div className="row">
                                <div className="col-4">
                                    <p>
                                        <a href="https://bhyeanhasan.github.io/" target="_blank">
                                            <i className="bi bi-github"></i> Github
                                        </a>
                                    </p>
                                </div>
                                <div className="col-4 text-center">
                                    <p>
                                        <a
                                            href="https://www.linkedin.com/in/bhyeanhasan/"
                                            target="_blank"
                                        >
                                            <i className="bi bi-linkedin"></i> Linkedin
                                        </a>
                                    </p>
                                </div>
                                <div className="col-4 text-right">
                                    <p>
                                        <a
                                            href="https://bhyeanhasan.blogspot.com/"
                                            target="_blank"
                                        >
                                            <i className="bi bi-globe"></i> Blog
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr/>

                {/* Mission and Vision */}
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4>Mission and Vision:</h4>
                            <div className="sub">
                                <p>
                                    I am eager to leverage my academic background, technical skills,
                                    and passion to embark on a dynamic career path. Seeking a
                                    challenging role in software development or artificial
                                    intelligence where I can apply my knowledge and upgrade my
                                    skills.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Technical Strengths */}
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4>Technical Strengths:</h4>
                            <div className="sub">
                                <table>
                                    <tbody>
                                    <tr>
                                        <td className="txt" style={{width: "35%"}}>
                                            Domain Expertise
                                        </td>
                                        <td>Django Web, Django REST, React, ML, Deep Learning</td>
                                    </tr>
                                    <tr>
                                        <td className="txt">Programming Lang</td>
                                        <td>Python, C++, JavaScript, Java</td>
                                    </tr>
                                    <tr>
                                        <td className="txt">ML Framework / Package</td>
                                        <td>TensorFlow, Pytorch, Numpy, Pandas, Seaborn</td>
                                    </tr>
                                    <tr>
                                        <td className="txt">Internet of Things (IoT)</td>
                                        <td>Raspberry Pi, NodeMCU, Arduino</td>
                                    </tr>
                                    <tr>
                                        <td className="txt">Database</td>
                                        <td>
                                            MySQL, PostgreSQL, SQLite, SQL Server, Oracle, MongoDB
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="txt">Simulation Software</td>
                                        <td>MATLAB, PSPICE, R Studio</td>
                                    </tr>
                                    <tr>
                                        <td className="txt">Miscellaneous Tool</td>
                                        <td>Git, GitHub, Azure, Docker, Latex</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Education */}
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4>Educational Background:</h4>
                            <div className="sub">
                                <div className="row">
                                    <div className="col-md-8">
                                        <p className="txt">
                                            B.Sc. in Engg. in Computer Science & Engineering (CSE)
                                        </p>
                                        <p>Patuakhali Science & Technology University (PSTU)</p>
                                    </div>
                                    <div className="col-md-4 right-center">
                                        <p>From 2019 to 2024</p>
                                        <p>3.30 out of 4.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Add more sections like Experience, Projects, etc. as needed */}
            </div>

        </div>
    );
}

export default Resume;