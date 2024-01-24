import React from 'react'
import './Project.css'
import Git from '../../assets/github3.png'
import projectima from '../../assets/projectima.jpg'
const Project = () => {
  return (
    <div className='project'>
    <div className="main">
        <div className="projectleft">
        <h1>Projects</h1>
        <div className="card">
                 <img  src={Git}  className='card-image'/>
                 <div className='card-content'>
                    <h2 className='card-heading' >Complaints Managment System</h2>
                 <p className='card-description' >This is my first fullstack project. I made it for my college.Students use college computers for  academics and staff use the college laptops 
          for teaching students.My website handles all the issues that they face while using computers.User needs to raise an issue which gets assigned  to the related technician who needs to
          go and check for the issue and solve it.</p>
        <button to='https://github.com/YASHWANTHKESAGONI/chnmsgit'  className='gitlink' target='blank' >Github Repo</button>
        </div>
        </div>


        
        </div>
        <div className="projectright">
            <img className='rightprojectima' src={projectima} />
        </div>
    </div>
    
    </div>
  )
}

export default Project