import React from 'react';
import Footer from "../components/Footer";

function Projects(props) {
    const projects = [
        {
            title: "Amin Crockeries (Ecommerce)",
            description: "The Amin Crockeries project is a Django-based web application. It features inventory management, customer order handling, and sales report generation. Administrators can manage products and track stock levels, while customers can browse products, place orders, and receive status updates.",
            image: "img/img.png",
            sourceCode: "https://github.com/bhyeanhasan/Amin-Crockeries",
            liveView: "https://bhyean.pythonanywhere.com/"
        },
        {
            title: "to-sequential (Python-Package)",
            description: "A simple utility function to generate sequential data from a Pandas DataFrame, making it suitable for training data for sequential models.",
            image: "img/img_2.png",
            sourceCode: "https://github.com/bhyeanhasan/to-sequential",
            liveView: "https://pypi.org/project/to-sequential/"
        },
        {
            title: "Online Image Editor",
            description: "A dynamic online image editor utilizing Django, and OpenCV for image processing. Leveraging DTL, Bootstrap, HTML, and CSS for frontend design, I ensured responsive UI/UX. Proficient in system design and project management, I delivered a seamless platform for image manipulation and editing.",
            image: "img/img_3.png",
            sourceCode: "https://github.com/bhyeanhasan/Online-Image-Editor",
            liveView: "http://bhyeanhasan.pythonanywhere.com/"
        },
        {
            title: "Dhanshiri Students Welfare Association",
            description: "The DSWA web application represents a student-driven endeavor with the objective of creating a platform for students hailing from Jhalokathi District. Purpose is to facilitate connections between students, teachers, and alumni, while also serving as a resource for staying informed about upcoming events.",
            image: "img/img_1.png",
            sourceCode: "https://github.com/bhyeanhasan/Dhanshiri-Studets-Welfare-Association-DSWA",
            liveView: "https://dswapstu.pythonanywhere.com/"
        },
        {
            title: "Online PDF TOOLS",
            description: 'Online PDF Tools is a web-based platform that provides users with easy-to-use utilities for managing PDF documents. With a clean interface and fast processing, the tool aims to help students, professionals, and businesses work with PDFs efficiently without needing to install additional software.',
            image: "img/pdftools.png",
            sourceCode: "https://github.com/bhyeanhasan/PdfTools",
            liveView: "https://onlinepdftools.pythonanywhere.com/"
        },
        {
            title: "Research Paper Manager",
            description: 'Online PDF Tools is a web-based platform that provides users with easy-to-use utilities for managing PDF documents. With a clean interface and fast processing, the tool aims to help students, professionals, and businesses work with PDFs efficiently without needing to install additional software.',
            image: "img/research.png",
            sourceCode: "https://github.com/bhyeanhasan/Research-Paper-Manager-",
            liveView: "https://bhyeanpaper.pythonanywhere.com/"
        },

        {
            title: "Student Diary (Faculty of CSE, PSTU)",
            description: "The CSE-Diary project is a Flutter mobile app for my faculty that uses the Django Rest Framework for the backend.",
            image: "img/img_4.png",
            sourceCode: "https://github.com/bhyeanhasan/Diary-For-PSTU-CSE",
            liveView: "https://appcse16.pythonanywhere.com/"
        },
        {
            title: "Page Reloader Extension",
            description: "Enables automatic page reloading at user-defined intervals, enhancing productivity and convenience by ensuring that your web pages stay updated without manual intervention.",
            image: "img/front.png",
            sourceCode: "https://github.com/bhyeanhasan/Google-Chrome-Extention-Automatic-Page-Reloader",
            liveView: ""
        }

    ];
    return (
        <section className="job-area pt-5">
            <div className="container">
                <div className="row d-flex justify-content-between align-items-end mx-5">
                    <div className="col-lg-12">
                        <div className="text-center">
                            <h1>PROJECTS</h1>
                            <h4>Check the latest projects <a target={'_blank'}
                                                                href={'https://github.com/bhyeanhasan'}><i class="fa fa-github" aria-hidden="true"></i> Github
                                </a></h4>
                            <hr></hr>

                        </div>
                    </div>

                    <div className="col-md-12">
                        <div className="container">
                            <div className="row">
                                {projects.map((project, index) => (
                                    <div className="col-md-6 my-5" key={index}>
                                        <div className="card shadow-lg mx-3">
                                            <img src={project.image} className="card__image" alt={project.title}/>
                                            <div className="card__overlay">
                                                <div className="card__header">
                                                    <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                                                        <path/>
                                                    </svg>
                                                    <div style={{width: '100%'}} className="card__header-text">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>

        </section>

    );
}

export default Projects;