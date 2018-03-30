import React, {Component} from 'react';
import logo from '../../css/o-notfound.svg';

export default class NotFound extends Component {
    render(){
        return(
            <div className="NotFound">
                <h1>4 <img src={logo} alt=""/>4</h1>
                <h2>Not Found</h2>
            </div>
        )
    }
}
