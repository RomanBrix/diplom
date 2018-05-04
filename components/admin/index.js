/*
 * Copyright (c) 2018.  r.b.Corp
 */

import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect,
} from "react-router-dom";
import Settings from "./Settings";
import AllJob from "./AllJob";
import AddNewJob from "./AddNewJob";
import Loading from "./Loading";

export default class Admin extends Component {
    render(){
        const { history, frontRedux, addNewWork, getWorks, archivedWork, logOut } = this.props;
        // getWorks={ getWorks }
        // console.log(this.props);
        if(!frontRedux.login){
            return <Redirect to="/login" />
        }
        return(
            <div className="admin">
                {this.props.frontRedux.request ? <Loading/> : null}
                <div className="admin-header">
                    <ul className="admin-menu">
                        <li>
                            <Link to="/admin"> Settings </Link>
                        </li>
                        <li>
                            <Link to="/admin/all-job"> Jobs </Link>
                        </li>
                        <li onClick={()=>{
                            logOut();
                            setTimeout(()=>{
                                history.push(`/`);
                            })

                        }}>
                            <a href="#"> Exit </a>
                        </li>
                    </ul>
                </div>

                <div className="admin-content">
                    <Switch>
                        <Route exact path="/admin" render={(props)=><Settings {...props}/>}/>
                        <Route exact path="/admin/all-job" render={(props)=><AllJob frontRedux={ frontRedux } {...props}/>}/>
                        <Route path="/admin/all-job/:id"
                               render={(props)=><AddNewJob
                                    frontRedux={ frontRedux }
                                    addNewWork={ addNewWork }
                                    archivedWork={ archivedWork }
                                    getWorks={ getWorks }
                                    {...props}
                               />}
                        />
                    </Switch>
                </div>
            </div>
        )
    }
}
