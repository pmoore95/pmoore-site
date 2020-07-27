import React from 'react';
import linkedin from './images/linkedin.png';

class Contact extends React.Component {

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
        )
    }

}

export default Contact;
