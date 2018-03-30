import React, {Component} from 'react';

export default class Work extends Component {
    render(){
        console.log(this.props);
        return(
            <div className="work">
                {/*<h1>Work</h1>*/}
                {/*<div className="container">*/}

                {/*</div>*/}
                {this.props.children}
            </div>
        )
    }
}
