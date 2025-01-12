import React from 'react';
import './PortFolio.css'
import picture from './assets/Photos/background_Free.png'
import { useState,useEffect } from 'react';
import 'font-awesome/css/font-awesome.min.css'
import $ from 'jquery/dist/jquery.min.js'
import resume from './assets/Resumes/Template.docx'

function MainScreen() {
    return (
        <>
            <section className="dark">
                <div className="container py-3">
                    <article className="postcard dark green">
                        <a className="postcard__img_link" href="#">
                            <img className="postcard__img" src={picture} alt="Image Title" />
                        </a>
                        <div className="postcard__text">
                            <h1 className="postcard__title green"><a href="#">MANDADI KARTHIKEYAN REDDY</a></h1>
                            <div className="postcard__subtitle small">
                                Member Technical Staff
                            </div>
                            <div className="postcard__bar"></div>
                            <div className="postcard__preview-txt">ASP.NET developer with 1.9 years of experience delivering impactful features and driving quality through NUnit testing, increasing coverage from 0% to 20%. Proficient in SQL, JavaScript, and jQuery, with hands-on experience in React and foundational skills in AWS and Golang. Awarded Best Employee (Q3 2023) for innovation and process improvements. Skilled in Agile practices, database documentation, and kaizen initiatives.</div>
                            <ul className="postcard__tagbox">
                                <li style={{ padding: '0px 5px' }}>
                                    <button className='btn btn-info'>
                                        <a href='https://www.linkedin.com/in/mandadikarthikeyanreddy/' target='blank' style={{ color: 'black', textDecoration: 'none' }}><i className="fa fa-linkedin mr-2"></i> LinkedIn</a>
                                    </button>
                                </li>
                                <li style={{ padding: '0px 5px' }}>
                                    <button className='btn btn-info'>
                                        <a href='https://github.com/karthikeyan-reddy/react-app' target='blank' style={{ color: 'black', textDecoration: 'none' }}><i className="fa fa-github-square mr-2"></i> GitHub</a>
                                    </button>
                                </li>
                                <li style={{ padding: '0px 5px' }}>
                                    <button className='btn btn-info'>
                                        <a href='https://www.instagram.com/karthikeyanreddy.mandadi/' target='blank' style={{ color: 'black', textDecoration: 'none' }}><i className="fa fa-instagram mr-2"></i> Instagram</a>
                                    </button>
                                </li>
                                <li style={{ padding: '0px 5px' }}>
                                    <a href={resume} target='blank' download="Mkarthikeyanreddy_Resume.docx"><button className='btn btn-warning'>Download Resume</button></a>
                                </li>
                            </ul>
                        </div> 
                    </article>
                </div>
            </section>
        </>
    )
}
function SubSections() {
    const [content, setContent] = useState('');
    useEffect(() => {
        $('.Experience').click();
      }, []);

    // Functions that return content
    function Experience() {
        return (
            <div className="card shadow-lg dark" style={{ color: 'aliceblue' }}>
                <h3 className="text-center" style={{fontWeight:'bold'}}>Member Technical Staff, First American India</h3>
                <p className="text-center text-info">April 2023 - Present , Bangalore</p>
                <h4 className='text-warning' style={{ textAlign: 'left', textDecoration: 'underline' }}>Key Responsibilities & Achievements:</h4>
                <ul style={{ textAlign: 'left', padding: '0% 0% 0% 5%' }}>
                    <li className='text-danger'>Developed and enhanced several critical features for web applications using ASP.NET (C#).</li>
                    <li className='text-danger'>Documented comprehensive database documentation to support development and maintenance.</li>
                    <li className='text-danger'>Delivered multiple kaizens, driving continuous improvement and efficiency in processes.</li>
                    <li className='text-danger'>Expertise in NUnit unit testing, increasing test coverage from 0% to 20%.</li>
                    <li className='text-danger'>Leveraged SQL, JavaScript, and jQuery to create efficient and responsive solutions.</li>
                    <li className='text-danger'>Actively participated in Agile ceremonies, refining requirements, and adapting Jira methodology for project tracking.</li>
                    <li className='text-danger'>Recognized with the Best Employee Award (Q3 2023) for exceptional performance and contributions.</li>
                </ul>
            </div>
        )
    }
    function ButtonFormat({ skill, percentage, skillLevel }) {
        return (
            <div className="container col-2 mt-5" style={{ display: 'inline-block' }}>
                <div className="card shadow p-4 dark" style={{ color: 'aliceblue', width: 'max-content', minWidth: '100%' }}>
                    <h4 className="text-center">{skill}</h4>
                    <p className="text-center text-secondary">{skillLevel}</p>
                    <div className="progress">
                        <div
                            className="progress-bar progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: `${percentage}`, color: 'black', fontWeight: 'bold' }}
                            aria-valuemin="0"
                            aria-valuemax="100"
                        >
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    function Skills() {
        return (
            <>
                <ButtonFormat skill="C#" percentage="80%" skillLevel="Experienced" />
                <ButtonFormat skill="ASP.Net" percentage="80%" skillLevel="Experienced" />
                <ButtonFormat skill="React" percentage="50%" skillLevel="SkillFul" />
                <ButtonFormat skill="SQL" percentage="70%" skillLevel="Experienced" />
                <ButtonFormat skill="NUnit" percentage="40%" skillLevel="SkillFul" />
                <ButtonFormat skill="Web Development" percentage="70%" skillLevel="Experienced" />
                <ButtonFormat skill="HTML & CSS" percentage="70%" skillLevel="Experienced" />
                <ButtonFormat skill="JavaScript" percentage="50%" skillLevel="SkillFul" />
                <ButtonFormat skill="JQuery" percentage="50%" skillLevel="SkillFul" />
                <ButtonFormat skill="GO" percentage="30%" skillLevel="Beginner" />
                <ButtonFormat skill="AWS" percentage="30%" skillLevel="Beginner" />
                <ButtonFormat skill="JIRA" percentage="60%" skillLevel="Experienced" />
            </>
        )
    }
    function Education() {
        return (
            <section className="py-5">
                <ul className="timeline">
                    <li className="timeline-item mb-5">
                        <h5 className="fw-bold">B.tech Electrical & Electronics Engineering</h5>
                        <p className="text-info mb-2 fw-bold">Presidency University</p>
                        <p className="text-secondary mb-2 fw-bold">2019-2023</p>
                        <p className="text-warning">
                            As an Electrical and Electronics Engineering (EEE) student with a 9.51 CGPA, I have built a strong academic and practical foundation. I have conducted research on CC-CV technology for Li-ion batteries to enhance charging efficiency and extend battery life. Additionally, I contributed to vehicle building as part of the Electrical Vehicle Club and secured 3rd place in the SAE: REEV competition organized by IEEE. My projects and research demonstrate my passion for sustainable energy solutions and advanced technologies in the electric vehicle sector.
                        </p>
                    </li>
                    <li className="timeline-item mb-5">
                        <h5 className="fw-bold">INTERMEDIATE</h5>
                        <p className="text-info mb-2 fw-bold">Narayana Junior College</p>
                        <p className="text-secondary mb-2 fw-bold">2017-2019</p>
                        <p className="text-warning">
                            During my intermediate studies in MPC (Mathematics, Physics, and Chemistry), I secured a CGPA of 9.71, which laid a strong foundation for my further academic and technical pursuits in the field of Electrical and Electronics Engineering
                        </p>
                    </li>
                    <li className="timeline-item mb-5">
                        <h5 className="fw-bold">10th Standard</h5>
                        <p className="text-info mb-2 fw-bold">Sree Chaitanya High School</p>
                        <p className="text-secondary mb-2 fw-bold">2016-2017</p>
                        <p className="text-warning">
                            During my 10th Standard studies, I secured a CGPA of 9.7.
                        </p>
                    </li>
                </ul>
            </section>
        )
    }
    function Cards({ event, companyName, Description, time, icon }) {
        return (
            <div className="card dark" style={{ width: '18rem', display: 'inline-block', verticalAlign: 'top', color: 'aliceblue', margin: '0px 5px' }}>
                <div className="card-body">
                    <h5 className="card-title"><i className={icon} aria-hidden="true"></i> {event}</h5>
                    <h6 className="card-subtitle mb-2 text-info">{companyName}</h6>
                    <h6 className="card-subtitle mb-2 text-info">{time}</h6>
                    <p className="card-text text-warning">{Description}</p>
                </div>
            </div>
        )
    }
    function Achievements() {
        return (
            <>
                <Cards event="Security Hackathon" companyName="First American(India)" Description="Won Security Hackathon Competition organized by First American. This Competition involves in finding security flaws in application as per OWASP and security good practices." time="Sep 2024" icon="fa fa-star-o" />
                <Cards event="Q3: Best Employee Award" companyName="First American(India)" Description="Won Best Employee Award for work in First American Organization." time="Dec 2023" icon="fa fa-certificate" />
                <Cards event="3rd Prize in SAE: REEV Competition" companyName="IEEE Bangalore Section" Description="Won 3rd Prize in Range Extended Electrical vehicle competition organized by IEEE SAE Bangalore division." time="2023-2024" icon="fa fa-trophy" />
                <Cards event="Golden Medal: Academics" companyName="Presidency University" Description="Got Gold Medal for Academics." time="2019-2023" icon="fa fa-trophy" />
            </>
        )
    }
    function Learning() {
        return (
            <>
                <Cards event="AWS Cloud Computing 101" companyName="AWS Skill Builder" Description=" " time="Jun 2024" icon="fa fa-certificate" />
            </>
        )
    }

    // Handle hover or click events
    const handleHover = (func) => {
        setContent(func());
    };

    const handleClick = (func) => {
        setContent(func());
    };

    return (
        <div className="container mt-5 text-center">
            {/* Buttons */}
            <button
                className="btn btn-primary m-2 Experience"
                onMouseEnter={() => handleHover(Experience)}
                onClick={() => handleClick(Experience)}
            >
                Experience
            </button>
            <button
                className="btn btn-secondary m-2"
                onMouseEnter={() => handleHover(Skills)}
                onClick={() => handleClick(Skills)}
            >
                Skills
            </button>
            <button
                className="btn btn-success m-2"
                onMouseEnter={() => handleHover(Education)}
                onClick={() => handleClick(Education)}
            >
                Education
            </button>
            <button
                className="btn btn-danger m-2"
                onMouseEnter={() => handleHover(Achievements)}
                onClick={() => handleClick(Achievements)}
            >
                Achievements
            </button>
            <button
                className="btn btn-warning m-2"
                onMouseEnter={() => handleHover(Learning)}
                onClick={() => handleClick(Learning)}
            >
                Learning's
            </button>

            <div className="mt-3">
                {content}
            </div>
        </div>
    )
}

function PortFolio() {
    return (
        <>
            {<MainScreen />}
            {<SubSections />}
        </>
    );
}

export default PortFolio