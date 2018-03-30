import React, {Component} from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import RenderRouter from './RenderRouter';
import Header from "./layouts/Header";
import Work from "./work";
import About from "./about";
import Main from "./main";
import NotFound from "./layouts/NotFound";
import Article from "./work/Article";
import List from "./work/List";
import Footer from "./layouts/Footer";

export default class App extends Component {

    // componentWillMount() {
    //     console.log(this.props);
    //     this.props.history.listen(() => this.forceUpdate());
    // }
    render() {
        const {testFunc} = this.props;
        const frontRedux = this.props.front.toJS();

        return (
            <Router>
                <RenderRouter>
                    <div className="header-space"/>
                    <Header/>
                    <Switch>
                        <Route exact path="/" render={(props)=><Main frontRedux={frontRedux} {...props}/>}/>
                        {/*<Route path="/work" render={(props)=><Work frontRedux={ frontRedux } {...props}/>} />*/}
                        <Route path="/work">
                            {/*<Work frontRedux={ frontRedux }>*/}
                            <Switch>
                                <Route exact path="/work"
                                       render={(props) => <List frontRedux={frontRedux} {...props}/>}/>
                                <Route path="/work/:id"
                                       render={(props) => <Article frontRedux={frontRedux} {...props}/>}/>
                            </Switch>
                            {/*</Work>*/}
                        </Route>
                        <Route path="/about" component={About}/>
                        <Route path="*" component={NotFound}/>
                    </Switch>
                    <Footer/>
                </RenderRouter>
            </Router>
        )
    }
}
