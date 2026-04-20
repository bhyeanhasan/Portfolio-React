import React from 'react';
import { Link } from "react-router-dom";
import projectsData from '../data/projects';

function Projects(props) {
    const projects = projectsData.slice(0, 6);

    return (
        <section className="job-area py-5">
            <div className="container">
                <div className="row d-flex justify-content-between align-items-end">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h2>Projects</h2>
                        </div>
                    </div>

                    <div className="col-md-12 mb-3">
                        <div className="container">
                            <div className="row">
                                {projects.map((project, index) => (
                                    <div className="col-md-4 mb-5" key={index}>
                                        <div className="card shadow-lg">
                                            <img src={project.image} className="card__image" alt={project.title} />
                                            <div className="card__overlay">
                                                <div className="card__header">
                                                    <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                                                        <path />
                                                    </svg>
                                                    <div style={{ width: '100%' }} className="card__header-text">
                                                        <h3 className="card__title text-center">{project.title}</h3>
                                                        <div className="d-flex justify-content-between mt-2">

                                                            {project.liveView ? (

                                                                <a
                                                                    target="_blank"
                                                                    href={project.liveView}
                                                                    style={{
                                                                        borderRadius: '20px',
                                                                        borderStyle: 'solid',
                                                                        color: 'white',
                                                                        fontSize: '12px'
                                                                    }}
                                                                    className="btn btn-danger"
                                                                    rel="noopener noreferrer"
                                                                >
                                                                    <i className="fa fa-paper-plane p-1"
                                                                        aria-hidden="true"></i>
                                                                    Live View
                                                                </a>) :
                                                                (<a></a>)
                                                            }
                                                            <a
                                                                target="_blank"
                                                                href={project.sourceCode}
                                                                style={{
                                                                    borderRadius: '20px',
                                                                    borderStyle: 'solid',
                                                                    color: 'white',
                                                                    fontSize: '12px'
                                                                }}
                                                                className="btn btn-info"
                                                                rel="noopener noreferrer"
                                                            >
                                                                <i className="fa fa-github-square p-1"
                                                                    aria-hidden="true"></i>
                                                                Source Code
                                                            </a>


                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="card__description text-center">{project.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}


                                <Link to="/projects"
                                    className="btn-block primary-btn my-1"
                                    data-text="More Projects >>>"
                                    rel="noopener noreferrer"
                                    style={{ width: '50%', marginLeft: '25%' }}
                                >
                                    <span>P</span>
                                    <span>R</span>
                                    <span>O</span>
                                    <span>J</span>
                                    <span>E</span>
                                    <span>C</span>
                                    <span>T</span>
                                    <span>S</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;