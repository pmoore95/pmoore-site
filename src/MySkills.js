import React from 'react';
import Skill from './Skill.js';








class MySkills extends React.Component {

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
                    <Skill title='Node.js' image={node} experience="< 1 year"/>
                    <h1 id="other-skills">Other Skills</h1>
                    <Skill title='Java' image={java} experience="2 years"/>
                    <Skill title='C#' image={cs} experience="2 years"/>
                </div>
            </div>
        )
    }

}

export default MySkills;