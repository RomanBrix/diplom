import React, {Component} from 'react';
import Intro from "./Intro";
import WeAre from "./WeAre";
import About from "./About";

export default class Main extends Component {

    render() {
        console.log(this.props);
        const { history, location, match, frontRedux } = this.props;
        const { works, archivedWorks } = frontRedux;
        return (
            <div className="main">
                <Intro history={history}/>
                <WeAre/>
                <About inSearch={ works.length } offSearch={ archivedWorks.length }/>
            </div>
        )
    }
}
