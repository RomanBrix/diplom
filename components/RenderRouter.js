import React, {Component} from 'react';
import  CSSTransitionGroup   from 'react-addons-css-transition-group';

// import * as Rect from 'react';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
// import Header from "./layouts/Header";

export default class RenderRouter extends Component {
    constructor(props){
        super(props);
        this.state = {};
        // window.scrollTo(0, 0);
    }

    render(){
        // const { getWorks } = this.props;
        return(
            <div className="RenderRouter">
                <CSSTransitionGroup
                    transitionName="fade"
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={300}
                    transitionAppear={true}
                    transitionAppearTimeout={300}
                >
                    {this.props.children}
                </CSSTransitionGroup>
            </div>
        )
    }
}
