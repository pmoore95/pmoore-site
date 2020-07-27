import React from 'react';

class Nav extends React.Component {

    burgerClick(e){
        var burger = e.currentTarget;
        var navbuttons = document.getElementById('nav-buttons-container');
        
        if (burger.classList.contains('burger-active')) {
            burger.classList.remove('burger-active');
            navbuttons.classList.remove('open');
        } else {
            burger.classList.add('burger-active');
            navbuttons.classList.add('open');
        }
    }

    /*handleClick(e){
        var width = (window.innerWidth > 0) ? window.innerWidth : window.screen.width;
        this.props.handleClick(e);
        if(width <= 991){
            var burger = document.getElementById('burger');
            var bgTop = burger.querySelector('#bg-top');
            var bgMid = burger.querySelector('#bg-mid');
            var bgBot = burger.querySelector('#bg-bot');
            var navbuttons = document.getElementById('nav-buttons-container');
            burger.classList.remove('active');
            bgMid.style.transform = 'scale(1)';
            bgTop.style.transform = '';
            bgBot.style.transform = '';
            navbuttons.classList.remove('open');
        }
    }*/


    render(){
        return(
            <nav>
                <div onClick={this.burgerClick}id="burger">
                    <div id="bg-top"></div>
                    <div id="bg-mid"></div>
                    <div id="bg-bot"></div>
                </div>
                <div id="nav-buttons-container">
                <button onClick={this.props.handleClick} className={this.props.activeTab === 'Work Experience & Education' ? 'active' : ''}>Work Experience & Education</button>
                <button onClick={this.props.handleClick} className={this.props.activeTab === 'Skills' ? 'active' : ''}>Skills</button>
                <button onClick={this.props.handleClick} className={this.props.activeTab === 'Projects' ? 'active' : ''}>Projects</button>
                <button onClick={this.props.handleClick} className={this.props.activeTab === 'Resume' ? 'active' : ''}>Resume</button>
                <button onClick={this.props.handleClick} className={this.props.activeTab === 'Contact' ? 'active' : ''}>Contact</button>
                </div>
            </nav>
        )
    }

}

export default Nav;
