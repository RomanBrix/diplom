import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { getCookie } from "./functions";
import RenderRouter from './RenderRouter';
import Header from "./layouts/Header";
// import Work from "./work";
import About from "./about";
import Main from "./main";
import NotFound from "./layouts/NotFound";
import Article from "./work/Article";
import List from "./work/List";
import Footer from "./layouts/Footer";
import Login from "./admin/Login";
import Admin from "./admin/index";
import Loading from "./admin/Loading";

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
        window.scrollTo(0, 0);
        const login = getCookie('login');
        if(login === '1'){ ////// special '=='
            props.checkLoginAfterGlobalReload('hash');
        }
        // console.log(login)
        props.getWorks('GetWorks');
        props.getArchWorks('GetArchWorks');
    }
    // componentWillMount() {
    //     console.log(this.props);
    //     this.props.history.listen(() => this.forceUpdate());
    // }
    // componentDidMount(){
    //     persistStore
    // }

    render() {
        const { testFunc, loginFunc, getWorks, addNewWork, archivedWork, logOut } = this.props;
        const frontRedux = this.props.front.toJS();
        // const frontRedux = this.props.front;

        // console.log(this.props);


        return (
            <Router>
                <RenderRouter >
                    {frontRedux.request ? <Loading/> : null}
                    <div className="header-space" />
                    <Header adminLogin={frontRedux.login}/>
                    <Switch>
                        <Route exact path="/" render={(props)=><Main frontRedux={frontRedux} {...props}/>}/>
                        <Route path="/work">
                            <Switch>
                                <Route exact path="/work"
                                       render={(props) => <List frontRedux={frontRedux} {...props}/>}/>
                                <Route path="/work/:id"
                                       render={(props) => <Article frontRedux={frontRedux} {...props}/>}/>
                            </Switch>
                        </Route>
                        <Route path="/about" component={About}/>
                        <Route path="/login" render={
                            (props)=><Login
                                frontRedux={ frontRedux }
                                loginFunc={ loginFunc }
                                {...props}
                            />
                        }
                        />
                        <Route path="/admin" render={
                            (props)=><Admin
                                logOut={ logOut }
                                frontRedux={ frontRedux }
                                addNewWork={ addNewWork }
                                archivedWork={ archivedWork }
                                getWorks={ getWorks }
                                {...props}
                            />
                        }
                        />
                        <Route path="*" component={NotFound}/>
                    </Switch>
                <Footer/>
                </RenderRouter>
            </Router>
        )
    }
}
