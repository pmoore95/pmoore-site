import React from 'react';
import Project from './Project.js';



class MyProjects extends React.Component {

    render(){

        let name = 'tab';


        if(this.props.active){
            name += ' active';
        }

        if(this.props.inactive){
            name += ' inactive';
        }
     
        
        let description = "Rymer Distribution is a wholesale business that sells to pharmaceutical businesses throughout the UK & Ireland. They sell everything that a typical pharmacey sells apart from perscription drugs. This includes skincare, shampoos & conditioners, gifts, make-up and beauty products etc. They wanted to branch out to the retail market and wished to do so through eCommerce. I provided them with a website built using PHP and MySQL for the back-end and JavaScript/jQuery for the front-end functionality and CSS for a responsive design. It includes the full functionality of a typical e-commerce site (such as customer accounts, products, order creation and payments) and is fully dynamic with an admin page for employees to edit the site. ";
        let description3 = " and also to widen my employment opportunities.";
        let description2 = "This was a small project to showcase a pedal operated hand sanitising device which provides an improved solution to sanitising during the COVID-19 pandemic.";
        return(
            
            <div className={name}>
                <h1>Projects</h1>
                <Project title='Black Duveen' link={''} image={[]} description={'test'}/>
                <Project title='Rymer Distribution' link={'https://www.rymerdist.com'} image={[rymer1, rymer2]} description={description} />
                <Project title='Hygiene Hub' link={'http://www.hygienehub.ie'} image={[null]} description={description2}/>
                <Project title='This Website!' image={[pmoore]} description={description3} />
                <h1>More to Follow...</h1>
            </div>
        )
    }

}

export default MyProjects;