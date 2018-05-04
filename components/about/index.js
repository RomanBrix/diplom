import React, {Component} from 'react';
import Intro from "./Intro";
import AboutContent from "./AboutContent";
import Features from "./Features";
import  CSSTransitionGroup   from 'react-addons-css-transition-group';

export default class About extends Component {
    constructor(props){
        super(props);
        window.scrollTo(0, 0);
    }
    render(){
        return(
            <div className="about">
                {/*<h1>About</h1>*/}
                <CSSTransitionGroup
                    transitionName="fade"
                    transitionEnterTimeout={900}
                    transitionLeaveTimeout={900}
                    transitionAppear={true}
                    transitionAppearTimeout={1000}
                    className="animationGroupArticle"
                >
                    <Intro/>
                    <AboutContent/>
                    <Features/>
                </CSSTransitionGroup>
            </div>
        )
    }
}
