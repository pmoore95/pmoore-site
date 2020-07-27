import React from 'react';

class Skill extends React.Component {
    render(){

        return(
            <div id="skill">
                <div id="image">
                    <img alt="e" src={this.props.image}></img>
                </div>
                <div>
                <h1 id="title">{this.props.title}</h1>
                <div id="exp-container">
                    <h4>Experience</h4>
                    <p>{this.props.experience}</p>
                </div>
                </div>
            </div>
        )
    }

}

export default Skill;