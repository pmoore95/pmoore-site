import React from 'react';
import Skill from './Skill.js';
import Project from './Project.js';
import html5 from './images/html5.png';
import css3 from './images/css3.png';
import js from './images/javascript.png';
import jq from './images/jquery.png';
import php from './images/php.png';
import mysql from './images/mysql.png';
import react from './images/react.png';
import bootstrap from './images/bootstrap.png';
import java from './images/java.png';
import cs from './images/cs.png';
import git from './images/git.png';
import rymer1 from './images/rymer1.png';
import rymer2 from './images/rymer2.png';
import pmoore from './images/pmoore.png';
import linkedin from './images/linkedin.png';
import pdf from 'pdfobject';
import file from './images/pm_resume_2020.pdf';



class Tabs extends React.Component {

    assignClass(className){
        let string = 'tab';
        if(this.props.activeTab === className){
            string += ' active';
        }

        if(this.props.lastTab === className){
            string += ' inactive';
        }
        return string;
    }
    render(){
        pdf.embed(file, "#resume");
        return(
            <div id="tabs">
                <div className={this.assignClass('Work Experience & Education')}>
                    <h1>Work Experience</h1>
                    <div>
                        <p>April 2020 - Present | Project Lead Developer Evolve X</p>
                        <p>2018-2020 | Freelance Web Developer</p>
                    </div>
                    <h1>Education</h1>
                    <div>
                        <p>I am a graduate from Ulster University, Belfast and have undertaken two degrees at this instituion:</p>
                        <br />
                        <p className="degree">2016-2018 MSc Applied Finance Pass</p>
                        <p className="degree">2013-2016 BEng Software Engineering 2:2</p>
                    </div>
                </div>
                <div className={this.assignClass('Skills')}>
                    <h1>Skills</h1>
                    <div id="skills-container">
                        <Skill title='HTML 5' image={html5} experience="4 years"/>
                        <Skill title='CSS3' image={css3} experience="4 years"/>
                        <Skill title='Javascript' image={js} experience="4 years"/>
                        <Skill title='jQuery' image={jq} experience="4 years"/>
                        <Skill title='Php' image={php} experience="2 years"/>
                        <Skill title='MySql' image={mysql} experience="3 years"/>
                        <Skill title='Bootstrap' image={bootstrap} experience="3 years"/>
                        <Skill title='Git' image={git} experience="1 year"/>
                        <Skill title='React' image={react} experience="< 1 year"/>
                        <h1 id="other-skills">Other Skills</h1>
                        <Skill title='Java' image={java} experience="2 years"/>
                        <Skill title='C#' image={cs} experience="2 years"/>
                    </div>
                </div>
                <div className={this.assignClass('Projects')}>
                    <h1>Projects</h1>
                    <div>
                        <h1>Projects</h1>
                        <Project 
                            title='Black Duveen' 
                            link={''} 
                            image={[]} 
                            description={'test'}/>
                        <Project 
                            title='Rymer Distribution' 
                            link={'https://www.rymerdist.com'} 
                            image={[rymer1, rymer2]} 
                            description={'Rymer Distribution is a wholesale business that sells to pharmaceutical businesses throughout the UK & Ireland. They sell everything that a typical pharmacey sells apart from perscription drugs. This includes skincare, shampoos & conditioners, gifts, make-up and beauty products etc. They wanted to branch out to the retail market and wished to do so through eCommerce. I provided them with a website built using PHP and MySQL for the back-end and JavaScript/jQuery for the front-end functionality and CSS for a responsive design. It includes the full functionality of a typical e-commerce site (such as customer accounts, products, order creation and payments) and is fully dynamic with an admin page for employees to edit the site.'} />
                        <Project 
                            title='Hygiene Hub' 
                            link={'http://www.hygienehub.ie'} 
                            image={[null]} 
                            description={''}/>
                        <Project 
                            title='This Website!' 
                            image={[pmoore]} 
                            description={'This was a small project to further develop my skills in React'} />
                        <h1>More to Follow...</h1>
                    </div>
                </div>
                <div className={this.assignClass('Resume')}>
                    <h1>Resume</h1>
                    <div id="resume">
                    </div>
                </div>
                <div className={this.assignClass('Contact')}>
                    <h1>Contact</h1>
                    <div id="contact-container">
                        <div>
                            <i className="material-icons">phone</i>
                            <a href="tel:07803623281">078 0362 3281</a>
                        </div>
                        <div>
                            <i className="material-icons">mail</i>
                            <a href="mailto:philip.moore95@outlook.com">philip.moore95@outlook.com</a>
                        </div>
                        <a id="linkedin-container" href="https://www.linkedin.com/in/philip-moore-65a41a91" target="_blank" rel="noopener noreferrer">
                            <img alt="e" id="linkedin" src={linkedin}></img>
                        </a>

                    </div>
                </div>
            </div>
        )
    }

}

export default Tabs;