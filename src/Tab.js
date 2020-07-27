import React from 'react';

class Tab extends React.Component {
    
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <div>
                    {this.props.content}
                </div>
            </div>
        )
    }
}

export default Tab;