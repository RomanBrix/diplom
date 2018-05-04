import React, {Component} from 'react';
import { connect } from 'react-redux';

import {
    testFunc,
    loginFunc,
    checkLoginAfterGlobalReload,
    getWorks,
    getArchWorks,
    addNewWork,
    archivedWork,
    logOut
} from "../redux/front/front-actions";
import App from "./App";

const mapStateToProps = ( state ) => {
    return ({
        front: state.front
    })
};

export default connect(
    mapStateToProps,
    {
        testFunc,
        loginFunc,
        checkLoginAfterGlobalReload,
        getWorks,
        getArchWorks,
        addNewWork,
        archivedWork,
        logOut
    })(App);