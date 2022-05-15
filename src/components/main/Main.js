import React from 'react'
import './Main.css'
const Introduction = () => {
  return (
      <div className='main'>
          <div className='about'>
            <img src="imgs/weixin_you_profile.png" alt="avatar of weixin" className='weixin-img' />
            <div className='description'>
                <h2>About</h2>
                <p>Hello, I'm Weixin. I have been learning front-end and backend development from various platforms such as 
                    Udacity and LinkedIn Learning as well as MDN docs for more than two years. Now I am studying at Algonquin 
                    College for Computer programming. In this website, some projects have been listed to show my development skills.
                </p>
            </div>
           
          </div>
          <div className='projects'>
              <h2>Projects</h2>
              <div className='project-group'>
                <div className='weather'>
                    <div>
                        <h3>Weather Report</h3>
                        <img src="imgs/weather.jpeg" alt="weather" />
                        <p>This project is used to report weather</p>
                    </div>
                </div>
                <div className='hotel'>
                    <div>
                        <h3>Hotel Management</h3>
                        <img src="imgs/hotel_management.jpeg" alt="hotel" />
                        <p>This project is used to manage hotel</p>
                    </div>
                </div>
              </div>
              
          </div>
          <div className='resume'>
            <h2>Resume</h2>
            <div className='resume-sections'>
                <div className='education'>
                    <h3>Education</h3>
                    <div className='education-group'>
                        <div className='year-content'>
                            <p>2021 - Now</p>
                            <p> Computer Programming | Algonquin College</p>
                        </div>
                        <div className='year-content'>
                            <p>2020 - 2020</p>
                            <p> Frontend Development Nano Degree | Udacity</p>
                        </div>
                        <div className='year-content'>
                            <p>2007 - 2011</p>
                            <p> Bachelor of Arts | CISISU</p>
                        </div>   
                    </div>
                         
                </div>
                <div className='skills'>
                    <h3>Technical Skills</h3>
                    <div className='content'>
                        <ul>
                            <li>Programming Languages: Java, JavaScript</li>
                            <li>Web Programming: HTML, CSS, ReactJS</li>
                            <li>Operating Systems: Windows, Linux, macOS</li>
                            <li>Database: PostgreSQL, SQL, Microsoft Access</li>
                            <li>Others: Git, GitHub, Premiere Pro</li>
                        </ul>
                    </div>
                </div>
                <div className='work'>
                    <h3>Work Experience</h3>
                    <div className='work-group'>
                        <div className='time-content'>
                            <div className='time-position'>
                                <p>2019 - 2020</p>
                                <p>Technical Writer | VESoft Inc</p>
                            </div>
                            <ul>
                                <li>Worked closely with developers to write and review documentation, including Installation Guides, and User Guides</li>
                                <li>Recorded a series of videos about Nebula graph to help users walk through the graph database step by step</li>
                                <li>Researched products from competitors in the graph database industry and summarized their advantages and disadvantages</li>
                                <li>Outlined the style guide of technical writing for the content writing team</li>
                            </ul>

                        </div>
                        <div className='time-content'>
                            <div className='time-position'>
                                <p>2018 - 2019 </p>
                                <p>Technical Writer | BUBI Inc</p>
                            </div>
                            <ul>
                                <li>Established the documentation center for BUBI from scratch</li>
                                <li>Wrote documentation, including Installation Guides, API&SDK Guides and White Papers</li>
                                <li>Recorded and edited videos and audios about the underlying technology of blockchain</li>
                                <li>Gave training for the newly joined technical writer on the writing code and style</li>
                                <li>Researched and collected blockchain white papers and sorted them out for reference by developers and product managers of BUBI</li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div>
            </div>
          </div>
        
      </div>
  )
}

export default Introduction