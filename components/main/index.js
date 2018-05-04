import React, {Component} from 'react';
import Intro from "./Intro";
import WeAre from "./WeAre";
import About from "./About";

export default class Main extends Component {
    constructor(props){
        super(props);
        window.scrollTo(0, 0);
    }
    render() {
        // console.log(this.props);
        const { history, location, match, frontRedux } = this.props;
        // console.log(frontRedux.works.length);
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
