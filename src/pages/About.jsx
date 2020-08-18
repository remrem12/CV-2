import React from 'react'
import Seo from '../components/Seo'
import PageTitle from "../components/PageTitle";
import { MDBContainer, MDBRow, MDBCol, MDBBadge, MDBBtn } from 'mdbreact';
import Project from '../components/Project';


const projects = [
  {
    img: './images/blog.jpg',
    description: 'Personal Blog',
    link: 'https://blognhamnhi.netlify.app/'
  },
  {
    img: './images/chat.jpg',
    description: 'Chat App',
    link: 'https://react-slack-chat-app.hakunonn.now.sh/'
  }
]


const About = () => (
  <>
    <Seo content='About'/>
    <MDBContainer className='about-page'>
      <PageTitle 
        title = 'Resume'
        subtitle = 'About me'
      />
      <MDBRow center className='mt-5'>
        <MDBCol md='6' sm='12'>
          <MDBRow>
            <div className="edu">
              <div className="section-title">Education</div>
              <MDBBadge pill>2017 - PRESENT</MDBBadge><div className="school"> University of Science - HCMUS</div>
              <div className="ml-4 mb-4 mt-2">
                <div className="font-weight-bold text-center">Computer Science</div>
              </div>
            </div>
          </MDBRow>
          <MDBRow>
            <div className="skills">
              <div className="section-title">Skills</div>
              <ul>
                <li>Basic programming knowledge: OOP, Data Structures</li>
                <li>Programming Language: JavaScript</li>
                <li>Basic web programming: HTML/CSS/JS</li>
                <li>Frameworks, Platforms: React, NodeJS/Express, (Material) Bootstrap, jQuery</li>
                <li>Database Management Systems: SQL, MongoDB</li>
                <li>Version Control: Git</li>
              </ul>
            </div>
          </MDBRow>
        </MDBCol>
        <MDBCol md='4' sm='12'>
          <MDBRow className='projects'>
            <div className="section-title">Pet projects</div>
            {
              projects.map(project => (
                <a href={project.link} target='_blank' key = {project.img} rel="noopener noreferrer"> 
                  <Project project = { project } />
                </a>
              ))
            }
          </MDBRow>
          <MDBBtn tag='a' target='_blank' 
            href='https://github.com/remrem12' 
            outline className='mt-4'
          >View more at my Github</MDBBtn>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </>
)

export default About