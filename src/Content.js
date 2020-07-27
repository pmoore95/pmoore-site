import React from 'react';
import Nav from './Nav.js';
import Tabs from './Tabs.js';
import './App.css';


class Content extends React.Component {


    constructor(){
        super();
        this.state = {
            activeTab : 'Work Experience & Education',
            lastTab: ''
        }
        //this.changeTab = this.changeTab.bind(this);
    }

    render(){
        return(
            <div id="content">
                <div id="header">
                    <h1>Philip Moore</h1>
                    <p>Web Developer</p>
                </div>
                <Nav activeTab = {this.state.activeTab} handleClick={this.changeTab.bind(this)} />
                <Tabs activeTab = {this.state.activeTab}  lastTab = {this.state.lastTab} />
            </div>
        )
    }

    changeTab(e){
        var tab = e.currentTarget.innerHTML;
        var burger = document.getElementById('burger');
        var burgerStyle = getComputedStyle(burger);
        var mobile = (burgerStyle.display !== 'none')?true:false;
        if(mobile){
            var navbuttons = document.getElementById('nav-buttons-container');
            burger.classList.remove('burger-active');
            navbuttons.classList.remove('open');
        }
        tab = tab.replace('&amp;', '&');
        this.setState({
            lastTab: this.state.activeTab,
            activeTab: tab
        })
    }

}

export default Content;