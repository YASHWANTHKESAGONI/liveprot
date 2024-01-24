import './About.css'
import Maleprog from '../../assets/Programmer.jpg'
import React, { useTransition, useState } from "react";

const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascirpt</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Git</li>
          <li>Github</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>Chaitanya Bharathi Institution of Techonlogy</li>
          <li>INFORMATION TECHNOLOGY,2021-2025</li>
        </ul>
      ),
    }
  ];

const About = () => {
   
 const [tab,setTab]=useState('skills')
 const [isPending, startTransition] = useTransition();    

 const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <div className='about'>

    <div className="parent">
        <div className="aboutleft">
             <img src={Maleprog} className='image' />
        </div>
        <div className="aboutright">
              <h1>About Me</h1>
              <p>I am a full stack web developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript, React, Node.js, Express, Mongodb, HTML, CSS, and Git. I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others to create amazing applications.</p>
 
              <div className="buttons-container">
                 {TAB_DATA.map(({ title, id }) => (
            <button
              key={id}
              onClick={() => {
                handleTabChange(id);
              }}
              className={tab === id ? 'active' : ''}
            >
              {title}
            </button>
          ))}
        </div>

        <div className="tab-content">{TAB_DATA.find((t) => t.id === tab)?.content}</div>
        </div>
    </div>
    </div>
  )
}

export default About;