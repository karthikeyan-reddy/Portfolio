import React from 'react';
import './PortFolio.css';
import picture from './assets/Photos/background_Free.png';
import { useState, useEffect } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import resume from './assets/Resumes/Template.docx';
import portfolioData from './data/portfolioData.json';
import { useTheme } from './context/ThemeContext';
import { calculateExperience } from './utils/experienceCalculator';

// Typewriter component
function Typewriter({ words, prefix = "" }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < word.length) {
          setCurrentText(word.substring(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(word.substring(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <span className="typewriter-text">
      {prefix}{currentText}
      <span className="typewriter-cursor">|</span>
    </span>
  );
}

// Theme Toggle Button
function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
      <i className={`fa fa-${theme === 'dark' ? 'sun' : 'moon'}`}></i>
    </button>
  );
}

function MainScreen() {
  const { theme } = useTheme();
  const personalInfo = portfolioData.personalInfo;
  
  // Calculate experience dynamically
  const experience = personalInfo.startDate 
    ? calculateExperience(personalInfo.startDate.year, personalInfo.startDate.month)
    : 2.8; // Fallback value
  
  // Replace {experience} placeholder in summary/description
  const summary = (personalInfo.summary || personalInfo.description).replace('{experience}', experience.toFixed(1));

  return (
    <>
      <ThemeToggle />
      <section className={`hero-section ${theme}`}>
        <div className="container py-3">
          <article className={`postcard ${theme} animated-fade-in`}>
            <a className="postcard__img_link" href="#">
              <img className="postcard__img" src={picture} alt="Profile" />
            </a>
            <div className="postcard__text">
              <h1 className={`postcard__title ${theme}`}>
                <a href="#">{personalInfo.name}</a>
              </h1>
              <div className={`postcard__subtitle ${theme}`}>
                {personalInfo.title} - <Typewriter words={personalInfo.typewriterWords} />
              </div>
              <div className={`postcard__bar ${theme}`}></div>
              <div className={`postcard__preview-txt ${theme}`}>
                {summary}
              </div>
              <ul className="postcard__tagbox">
                {personalInfo.socialLinks.map((link, index) => (
                  <li key={index} style={{ padding: '0px 5px' }}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`social-link ${theme}`}
                    >
                      <i className={link.icon}></i> {link.name}
                    </a>
                  </li>
                ))}
                <li style={{ padding: '0px 5px' }}>
                  <a
                    href={resume}
                    target="_blank"
                    download={personalInfo.resume.fileName}
                    className={`resume-link ${theme}`}
                  >
                    <i className="fa fa-download"></i> {personalInfo.resume.displayText}
                  </a>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

function SubSections() {
  const { theme } = useTheme();
  const [content, setContent] = useState('');
  const [activeTab, setActiveTab] = useState('experience');

  useEffect(() => {
    // Load experience by default
    setContent(renderExperience());
  }, [theme]);

  function renderExperience() {
    const experiences = portfolioData.experience.items;
    return (
      <section className={`experience-timeline-section ${theme}`}>
        <ul className={`experience-timeline ${theme}`}>
          {experiences.map((exp, index) => (
            <li key={index} className={`experience-timeline-item ${theme} animated-slide-right`}>
              <div className={`experience-card ${theme}`}>
                <h3 className={`experience-position ${theme}`}>{exp.position}</h3>
                <p className={`experience-period ${theme}`}>
                  <i className="fa fa-calendar"></i> {exp.period}
                </p>
                <p className={`experience-location ${theme}`}>
                  <i className="fa fa-map-marker"></i> {exp.location}
                </p>
                <h4 className={`experience-heading ${theme}`}>Key Responsibilities & Achievements:</h4>
                <ul className={`experience-responsibilities ${theme}`}>
                  {exp.responsibilities.map((item, itemIndex) => (
                    <li key={itemIndex} className={`experience-list-item ${theme}`}>{item}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </section>
    );
  }

  function ButtonFormat({ skill, skillLevel }) {
    return (
      <div className="skill-card-wrapper">
        <div className={`skill-card ${theme} animated-scale`}>
          <h4 className={`skill-name ${theme}`}>{skill}</h4>
          <p className={`skill-level ${theme}`}>{skillLevel}</p>
        </div>
      </div>
    );
  }

  function renderSkills() {
    const skillCategories = portfolioData.skills.categories || [];
    return (
      <div className={`skills-categories-container ${theme} animated-fade-in`}>
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className={`skill-category ${theme}`}>
            <h3 className={`category-title ${theme}`}>
              <i className="fa fa-folder"></i> {category.name}
            </h3>
            <div className={`skills-grid ${theme}`}>
              {category.items.map((skill, skillIndex) => (
                <ButtonFormat
                  key={skillIndex}
                  skill={skill.name}
                  skillLevel={skill.level}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  function renderEducation() {
    return (
      <section className={`education-section ${theme}`}>
        <ul className={`timeline ${theme}`}>
          {portfolioData.education.items.map((edu, index) => (
            <li key={index} className={`timeline-item ${theme} animated-slide-right`}>
              <h5 className={`timeline-degree ${theme}`}>{edu.degree}</h5>
              <p className={`timeline-institution ${theme}`}>{edu.institution}</p>
              <p className={`timeline-period ${theme}`}>{edu.period}</p>
              <p className={`timeline-description ${theme}`}>{edu.description}</p>
            </li>
          ))}
        </ul>
      </section>
    );
  }

  function AchievementCard({ event, organization, description, period, icon }) {
    return (
      <div className={`achievement-card ${theme} animated-scale`}>
        <div className="card-body">
          <h5 className={`card-title ${theme}`}>
            <i className={icon}></i> {event}
          </h5>
          <h6 className={`card-organization ${theme}`}>{organization}</h6>
          <h6 className={`card-period ${theme}`}>{period}</h6>
          <p className={`card-description ${theme}`}>{description}</p>
        </div>
      </div>
    );
  }

  function renderAchievements() {
    return (
      <div className={`achievements-grid ${theme} animated-fade-in`}>
        {portfolioData.achievements.items.map((achievement, index) => (
          <AchievementCard
            key={index}
            event={achievement.event}
            organization={achievement.organization}
            description={achievement.description}
            period={achievement.period}
            icon={achievement.icon}
          />
        ))}
      </div>
    );
  }

  function renderLearnings() {
    return (
      <div className={`achievements-grid ${theme} animated-fade-in`}>
        {portfolioData.learnings.items.map((learning, index) => (
          <AchievementCard
            key={index}
            event={learning.event}
            organization={learning.organization}
            description={learning.description}
            period={learning.period}
            icon={learning.icon}
          />
        ))}
      </div>
    );
  }

  const handleClick = (tabName, renderFunction) => {
    setActiveTab(tabName);
    setContent(renderFunction());
  };

  const tabs = [
    { name: 'experience', label: portfolioData.experience.title, render: renderExperience },
    { name: 'skills', label: portfolioData.skills.title, render: renderSkills },
    { name: 'education', label: portfolioData.education.title, render: renderEducation },
    { name: 'achievements', label: portfolioData.achievements.title, render: renderAchievements },
    { name: 'learnings', label: portfolioData.learnings.title, render: renderLearnings },
  ];

  return (
    <div className={`subsections-container ${theme}`}>
      <div className={`tabs-container ${theme}`}>
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`tab-button ${theme} ${activeTab === tab.name ? 'active' : ''}`}
            onClick={() => handleClick(tab.name, tab.render)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className={`content-container ${theme} animated-fade-in`}>
        {content}
      </div>
    </div>
  );
}

function PortFolio() {
  return (
    <>
      <MainScreen />
      <SubSections />
    </>
  );
}

export default PortFolio;
