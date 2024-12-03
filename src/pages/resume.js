import React from 'react';
import './resume.css';
function Resume(props) {
    return (
        <div>

 <div style={{backgroundColor: 'white'}} className="DivIdToPrint">
     <div className="container top-intro">
         <div className="row">
             <div className="col-md-5">
                 <div className="left-center">
                     <img
                         id="mypicture"
                         src="https://iili.io/B2qc2j.jpg"
                         alt="Formal Picture"
                     />
                 </div>
             </div>

             <div className="col-md-7 left-center">
                 <h3> MD. BABUL HASAN (NOYON)</h3>
                 <p className="txt">
                     <i className="bi bi-geo-alt-fill"></i> Jhalokathi, Barishal,
                     Bangladesh
                 </p>
                 <p>
                     <i className="bi bi-telephone-fill"></i> +880 1920599266
                 </p>
                 <p>
                     <i className="bi bi-envelope-fill"></i>{' '}
                     <a href="mailto:bhyean@yahoo.com">bhyean@gmail.com</a>
                 </p>
                 <div className="row">
                     <div className="col-4">
                         <p>
                             <a
                                 href="https://bhyeanhasan.github.io/"
                                 target="_blank"
                                 rel="noopener noreferrer"
                             >
                                 <i className="bi bi-github"></i> Github
                             </a>
                         </p>
                     </div>
                     <div className="col-4 text-center">
                         <p>
                             <a
                                 href="https://www.linkedin.com/in/bhyeanhasan/"
                                 target="_blank"
                                 rel="noopener noreferrer"
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
                                 rel="noopener noreferrer"
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

     <div className="container">
         <div className="row">
             <div className="col-md-12">
                 <h4>Mission and Vision:</h4>
                 <div className="sub">
                     <p>
                         I am eager to leverage my academic background, technical skills,
                         and passion to embark on a dynamic career path. Seeking a
                         challenging role in software development or artificial intelligence
                         where I can apply my knowledge and upgrade my skills.
                     </p>
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
                         <tr>
                             <td className="txt" style={{width: '35%'}}>
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
                             <td>MySQL, PostgreSQL, SQLite, SQL Server, Oracle, MongoDB</td>
                         </tr>
                         <tr>
                             <td className="txt">Simulation Software</td>
                             <td>MATLAB, PSPICE, R Studio</td>
                         </tr>
                         <tr>
                             <td className="txt">Miscellaneous Tool</td>
                             <td>Git (Version Control), Github, Azure, Docker, Latex</td>
                         </tr>
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
                     <div className="row">
                         <div className="col-md-8">
                             <p className="txt">B.Sc. in Engg. in Computer Science & Engineering (CSE)</p>
                             <p>Patuakhali Science & Technology University (PSTU).</p>
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

     <div className="container">
         <div className="row">
             <div className="col-md-12">
                 <h4>Experience:</h4>
                 <div className="sub">
                     <div className="row">
                         <div className="col-md-8">
                             <p className="txt">ML & Backend Engineer</p>
                             <p>Intelsense AI</p>
                         </div>
                         <div className="col-md-4 right-center">
                             <p className="txt">April 2024 - Present</p>
                             <p>Django, FastAPI, Machine Learning</p>
                         </div>
                     </div>
                     <hr></hr>

                     <div className="row">
                         <div className="col-md-6">
                             <p className="txt">Research Assistant</p>
                             <p>Patuakhali Science and Technology University (PSTU)</p>
                         </div>
                         <div className="col-md-6 right-center">
                             <p className="txt">March 2023 - October, 2024</p>
                             <p>Deep Learning, Data Analysis</p>
                         </div>
                     </div>
                     <hr></hr>
                     <div className="row">
                         <div className="col-md-6">
                             <p className="txt">ICU Monitoring System (IOT)</p>
                             {/*<p>Professor Md. Naimur Rahman, (PSTU)</p>*/}
                             <p className="">Granted By Bangladesh Bureau of Educational Information and Statistics
                                 (BANBEIS)</p>
                             <p className="txt">Ministry of Education, Bangladesh</p>
                         </div>
                         <div className="col-md-6 right-center">
                             <p className="txt">July 2023 - July 2024</p>
                             <p>
                                 Raspberry Pi, Arduino, Sensors, React, Socket Programming,
                                 Django Channel, Channel Layers.
                             </p>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     </div>

     <div className="container">
         <div className="row">
             <div className="col-md-12">
                 <h4>Programming Profile:</h4>
                 <div className="sub">
                     <p>Solved around 1000+ problems in different online judges.</p>
                     <div className="row text-center">
                         <div className="col-md-4">
                             <a
                                 href="https://www.hackerrank.com/bhyeanhasan"
                                 target="_blank"
                                 rel="noopener noreferrer"
                             >
                                 <i className="bi bi-link-45deg"></i> HackerRank
                             </a>
                         </div>
                         <div className="col-md-4">
                             <a
                                 href="https://codeforces.com/profile/bhyean"
                                 target="_blank"
                                 rel="noopener noreferrer"
                             >
                                 <i className="bi bi-link-45deg"></i> Codeforces
                             </a>
                         </div>
                         <div className="col-md-4">
                             <a
                                 href="https://leetcode.com/bhyeanhasan/"
                                 target="_blank"
                                 rel="noopener noreferrer"
                             >
                                 <i className="bi bi-link-45deg"></i> LeetCode
                             </a>
                         </div>
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
                     <div className="row">
                         <div className="col-md-8">
                             <p className="txt">Amin Crockeries (Ecommerce Website)</p>
                         </div>
                         <div className="col-md-4 right-center">
                             <a
                                 href="https://github.com/bhyeanhasan/Django-E-Commerce-Website"
                                 target="_blank"
                                 rel="noopener noreferrer"
                             >
                                 <i className="bi bi-github"></i> Code
                             </a>{' '}
                             /{' '}
                             <a
                                 href="https://bhyean.pythonanywhere.com/"
                                 target="_blank"
                                 rel="noopener noreferrer"
                             >
                                 <i className="bi bi-send-fill"></i> Live View
                             </a>
                         </div>

                         <div className="col-md-12">
                             <p>
                                 An e-commerce platform, leveraging Django and Django REST for
                                 backend operations, while employing Django Template Language
                                 (DTL), Bootstrap for frontend design. Proficient in ORM, Email
                                 Verification, and Report Generation using ReportLab, with Docker
                                 for seamless deployment.
                             </p>
                         </div>
                     </div>

                     <div className="row mt-4">
                         <div className="col-md-8">
                             <p className="txt">Dhanshiri Students Welfare Association (DSWA)</p>
                         </div>
                         <div className="col-md-4 right-center">
                             <a
                                 href="https://github.com/bhyeanhasan/Dhanshiri-Studets-Welfare-Association-DSWA"
                                 target="_blank"
                                 rel="noopener noreferrer"
                             >
                                 <i className="bi bi-github"></i> Code
                             </a>{' '}
                             /{' '}
                             <a
                                 href="http://dswapstu.pythonanywhere.com/"
                                 target="_blank"
                                 rel="noopener noreferrer"
                             >
                                 <i className="bi bi-send-fill"></i> Live View
                             </a>
                         </div>

                         <div className="col-md-12">
                             <p>
                                 The DSWA web application represents a student-driven endeavor
                                 with the objective of creating a platform for students hailing
                                 from Jhalokathi District. Purpose is to facilitate connections
                                 between students, teachers, and alumni, while also serving as a
                                 resource for staying informed about upcoming events.
                             </p>
                         </div>
                     </div>

                     <div className="row mt-4">
                         <div className="col-md-8">
                             <p className="txt">Online Image Editor</p>
                         </div>
                         <div className="col-md-4 right-center">
                             <a
                                 href="https://github.com/bhyeanhasan/Image-Editor-using-Django"
                                 target="_blank"
                                 rel="noopener noreferrer"
                             >
                                 {' '}
                                 <i className="bi bi-github"></i> Code
                             </a>{' '}
                             /{' '}
                             <a
                                 href="http://bhyeanhasan.pythonanywhere.com/"
                                 target="_blank"
                                 rel="noopener noreferrer"
                             >
                                 <i className="bi bi-send-fill"></i> Live View
                             </a>
                         </div>

                         <div className="col-md-12">
                             <p>
                                 A dynamic online image editor utilizing Django, and OpenCV for
                                 image processing. Leveraging DTL, Bootstrap, HTML, and CSS for
                                 frontend design, I ensured responsive UI/UX. Proficient in system
                                 design and project management, I delivered a seamless platform for
                                 image manipulation and editing.
                             </p>
                         </div>
                     </div>

                     <div className="row mt-4">
                         <div className="col-md-8">
                             <p className="txt">Student Diary (Faculty of CSE, PSTU)</p>
                         </div>
                         <div className="col-md-4 right-center">
                             <a
                                 href="https://github.com/bhyeanhasan/CSE-Diary"
                                 target="_blank"
                                 rel="noopener noreferrer"
                             >
                                 <i className="bi bi-github"></i> Code
                             </a>{' '}
                             /{' '}
                             <a
                                 href="http://appcse16.pythonanywhere.com/"
                                 target="_blank"
                                 rel="noopener noreferrer"
                             >
                                 <i className="bi bi-send-fill"></i> Live View
                             </a>
                         </div>

                         <div className="col-md-12">
                             <p>
                                 The CSE-Diary project is a Flutter mobile app that uses the Django
                                 Rest Framework for the backend. The app allows users to create and
                                 manage their own profiles; it provides contact information for all
                                 students and gives class notifications through email.
                             </p>
                         </div>
                     </div>
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
                         <tr>
                             <td>Runner-Up in Project Showcasing</td>
                             <td>4th PSTU Independence Day</td>
                         </tr>
                         <tr>
                             <td>Education board scholarship</td>
                             <td>PSC 2010, JSC 2014, SSC 2016</td>
                         </tr>
                         <tr>
                             <td>One Bank scholarship</td>
                             <td>2017, 2018</td>
                         </tr>
                         <tr>
                             <td>Aungkur scholarship</td>
                             <td>2019, 2020</td>
                         </tr>
                         <tr>
                             <td>Grameen Bank Scholarship</td>
                             <td>2014, 2016, 2019</td>
                         </tr>
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
                     <p>Cadet of Bangladesh National Cadet Corps - BNCC (Naval Wing, PSTU).</p>
                     <p>Campus Ambassador Satyen Bose Science Club, BUET</p>
                     <p>Campus Leader and Volunteer of Bangladesh Flying Labs.</p>
                     <p>Faculty Ambassador of PSTU Career Club.</p>
                     <p>Competitive Programmer (Team member of PSTU_INTegers)</p>
                 </div>
             </div>
         </div>
     </div>

     <div className="container">
         <div className="row">
             <div className="col-md-12">
                 <h4>Interest:</h4>
                 <div className="sub">
                     <p>RC Projects, Reading, and Gardening.</p>
                 </div>
             </div>
         </div>
     </div>
 </div>
        </div>
    );
}

export default Resume;