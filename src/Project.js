import React from 'react';

class Project extends React.Component {

    render(){
        return(
            <div className="project">
                    <h1 id="title">{this.props.title}</h1>
                    <div className="image-container">
                        {this.props.image.map(image => 
                        <div key={image} className="project-image-container">
                        <img alt="e" className="project-image" src={image}></img>
                        </div>)}
                    </div>
                        <a href={this.props.link} target="_blank" rel="noopener noreferrer">{this.props.link}</a>
                    <p className="description">{this.props.description}</p>
            </div>
        )
    }

}

export default Project;