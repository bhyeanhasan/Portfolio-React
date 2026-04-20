import React, { useRef } from 'react';
import './resume.css';
import { Link } from "react-router-dom";
import profile from '../data/profile';
import educationData from '../data/education';
import experiences from '../data/experiences';
import projects from '../data/projects';
import awards from '../data/awards';
import activities from '../data/activities';
import programmingProfiles from '../data/programming';

function Resume(props) {
    const printRef = useRef(null);
    const handlePrint = () => {
        if (printRef.current) {
            const originalContents = document.body.innerHTML;
            const printContents = printRef.current.innerHTML;

            // Ensure that you replace the body content only if the ref is valid
            document.body.innerHTML = printContents;

            window.print();

            // Restore original content after printing
            document.body.innerHTML = originalContents;
            window.location.reload(); // Reload to reset the page
        } else {
            console.error("Print element is not found or not yet rendered.");
        }
    };

    return (
        <div className=''>
            <div className='main-body'>
                <div className="container">
                    <div className="dnload d-flex justify-content-between py-3">
                        <Link to="/" className="primary-btn white py-2">Home</Link>
                        <button onClick={handlePrint} className="primary-btn white py-2">Download</button>
                    </div>
                </div>

                <div ref={printRef}>
                    <div style={{ backgroundColor: 'white' }} className="DivIdToPrint">
                        <div className="container top-intro">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="left-center">
                                        <img
                                            id="mypicture"
                                            src={profile.profileImage}
                                            alt={profile.fullName}
                                        />
                                    </div>
                                </div>

                                <div className="col-md-7 left-center">
                                    <h3>{profile.fullName}</h3>
                                    <p className="txt">
                                        <i className="bi bi-geo-alt-fill"></i> {profile.location}
                                    </p>
                                    <p>
                                        <i className="bi bi-telephone-fill"></i> {profile.phone}
                                    </p>
                                    <p>
                                        <i className="bi bi-envelope-fill"></i>{' '}
                                        <a href={`mailto:${profile.email}`}>{profile.email}</a>
                                    </p>
                                    <div className="row">
                                        <div className="col-4">
                                            <p>
                                                <a href={profile.github} target="_blank" rel="noopener noreferrer">
                                                    <i className="bi bi-github"></i> Github
                                                </a>
                                            </p>
                                        </div>
                                        <div className="col-4 text-center">
                                            <p>
                                                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                                                    <i className="bi bi-linkedin"></i> Linkedin
                                                </a>
                                            </p>
                                        </div>
                                        <div className="col-4 text-right">
                                            <p>
                                                <a href={profile.blog} target="_blank" rel="noopener noreferrer">
                                                    <i className="bi bi-globe"></i> Blog
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr />

                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <h4>Mission and Vision:</h4>
                                    <div className="sub">
                                        <p>{profile.mission}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <h4>Technical Strengths:</h4>
                                    <div className="sub">
                                        <table>
                                            <tbody>
                                                {profile.skills.map((skill, index) => (
                                                    <tr key={index}>
                                                        <td className="txt" style={{ width: '35%' }}>
                                                            {skill.category}
                                                        </td>
                                                        <td>{skill.items}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <h4>Educational Background:</h4>
                                    <div className="sub">
                                        {educationData.filter(edu => edu.degree !== 'J.S.C. & S.S.C.').map((edu, index) => (
                                            <div key={index} className="row mb-2">
                                                <div className="col-md-8">
                                                    <p className="txt">{edu.degree}</p>
                                                    <p>{edu.institution}</p>
                                                </div>
                                                <div className="col-md-4 right-center">
                                                    <p>{edu.faculty}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <h4>Experience:</h4>
                                    <div className="sub">
                                        {experiences.map((exp, index) => (
                                            <React.Fragment key={index}>
                                                <div className="row">
                                                    <div className="col-md-7">
                                                        <p className="txt">{exp.role}</p>
                                                        <p>{exp.company}</p>
                                                    </div>
                                                    <div className="col-md-5 right-center">
                                                        <p className="txt">{exp.date}</p>
                                                        <p>{exp.skills}</p>
                                                    </div>
                                                </div>
                                                {index < experiences.length - 1 && <hr />}
                                            </React.Fragment>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <h4>Programming Profile:</h4>
                                    <div className="sub">
                                        <div className="row text-center">
                                            {programmingProfiles.map((p, index) => (
                                                <div key={index} className="col-md-3">
                                                    <a href={p.link} target="_blank" rel="noopener noreferrer">
                                                        <i className="bi bi-link-45deg"></i> {p.name}
                                                    </a>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <h4>Projects:</h4>
                                    <div className="sub">
                                        {projects.slice(0, 5).map((project, index) => (
                                            <div key={index} className="row mt-4">
                                                <div className="col-md-8">
                                                    <p className="txt">{project.title}</p>
                                                </div>
                                                <div className="col-md-4 right-center">
                                                    <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">
                                                        <i className="bi bi-github"></i> Code
                                                    </a>
                                                    {' '}/{' '}
                                                    <a href={project.liveView} target="_blank" rel="noopener noreferrer">
                                                        <i className="bi bi-send-fill"></i> Live View
                                                    </a>
                                                </div>
                                                <div className="col-md-12">
                                                    <p>{project.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <h4>Academic Achievements & Awards:</h4>
                                    <div className="sub">
                                        <table>
                                            <tbody>
                                                {awards.map((award, index) => (
                                                    <tr key={index}>
                                                        <td>{award.title}</td>
                                                        <td>{award.event || (award.details && award.details.join(', '))}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <h4>Extracurricular Activities:</h4>
                                    <div className="sub">
                                        {activities.map((act, index) => (
                                            <p key={index}>{act.role} - {act.altText}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <h4>Interest:</h4>
                                    <div className="sub">
                                        <p>{profile.interests.join(', ')}.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;