import React from 'react';
import resume1 from './images/pm_resume_2020-1.jpg';
import resume2 from './images/pm_resume_2020-2.jpg';


class MyResume extends React.Component {

    render(){

        let name = 'tab';


        if(this.props.active){
            name += ' active';
        }

        if(this.props.inactive){
            name += ' inactive';

        }

        return(
            <div className={name}>
                <div id="resume-header-container">
                <h1>Resume</h1>
                <a href="/files/pm_resume_2020.pdf" download>
                    <button>Download</button>
                </a>
                </div>
                <div>
                    <img className="resume" src={resume1} alt="" />
                    <img className="resume" src={resume2} alt=""/>
                </div>
            </div>
        )
    }

}

export default MyResume;
