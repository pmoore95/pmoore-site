import React from 'react';

class WorkExperience extends React.Component {

    render(){

        let name = 'tab';


        if(this.props.active){
            name += ' active';
        }

        if(this.props.inactive){
            name += ' inactive';

        }
     
        

        return(
            
            <div id="work-experience-and-education" className={name}>
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
        )
    }

}

export default About;