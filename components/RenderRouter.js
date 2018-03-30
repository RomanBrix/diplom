import React, {Component} from 'react';
// import * as Rect from 'react';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
// import Header from "./layouts/Header";

export default class RenderRouter extends Component {
    render(){
        return(
            <div className="RenderRouter">
                    {this.props.children}
                {/*<ReactCSSTransitionGroup*/}
                    {/*transitionName="page"*/}
                    {/*transitionEnterTimeout={1000}*/}
                    {/*transitionLeaveTimeout={1000}*/}
                {/*>*/}
                    {/*{Rect.cloneElement(this.props.children, {*/}
                        {/*key: location.pathname*/}
                    {/*})}*/}
                {/*</ReactCSSTransitionGroup>*/}
            </div>
        )
    }
}
