import React, {Component} from 'react';
import Intro from "./Intro";

export default class About extends Component {
    render(){
        return(
            <div className="about">
                {/*<h1>About</h1>*/}
                <Intro/>
            </div>
        )
    }
}
