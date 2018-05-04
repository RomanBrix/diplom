import React, {Component} from 'react';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Redirect, Prompt} from 'react-router-dom';
import Loading from "./Loading";

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            isBlocking: false
        }
    }

    checkFill(){
        const { login, password } = this.refs;
        if(login.value.length > 0 || password.value.length > 0){
            this.setState({
                isBlocking: true
            })
        }else{
            this.setState({
                isBlocking: false
            })
        }
    }
    render(){
        const { loginFunc, frontRedux } = this.props;
        const { isBlocking } = this.state;
        if(frontRedux.login){
            return <Redirect to="/admin"/>
        }
        return(
            <div className="admin-login">
                <Prompt
                    when={isBlocking}
                    message={location =>
                        `У Вас есть заполненная форма, если вы уйдете - она обновится`
                    }
                />

                {this.props.frontRedux.request ? <Loading/> : null}

                <div className="input input-log">
                    <span className="corner corner-bottom" ref="logTopCorner"/>
                    <input
                        type="text"
                        id="login"
                        ref="login"
                        placeholder="Login"
                        onChange={()=>{
                            this.checkFill();
                        }}
                        onSelect={()=>{
                            const { logTopCorner, logBottomCorner } = this.refs;
                            logBottomCorner.classList.add('active-corner');
                            logTopCorner.classList.add('active-corner');

                        }}
                        onBlur={()=>{
                            const { logTopCorner, logBottomCorner } = this.refs;
                            logBottomCorner.classList.remove('active-corner');
                            logTopCorner.classList.remove('active-corner');
                        }}
                    />
                    <span className="corner corner-top" ref="logBottomCorner"/>
                </div>
                <div className="input input-pass">
                    <span className="corner corner-bottom" ref="passTopCorner"/>
                    <input
                        type="password"
                        id="password"
                        ref="password"
                        placeholder="password"
                        onChange={()=>{
                            this.checkFill()
                        }}
                        onSelect={()=>{
                            const { passTopCorner, passBottomCorner } = this.refs;
                            passBottomCorner.classList.add('active-corner');
                            passTopCorner.classList.add('active-corner');

                        }}
                        onBlur={()=>{
                            const { passTopCorner, passBottomCorner } = this.refs;
                            passBottomCorner.classList.remove('active-corner');
                            passTopCorner.classList.remove('active-corner');
                        }}
                    />
                    <span className="corner corner-top" ref="passBottomCorner"/>
                </div>
                <div className="button-login" onClick={()=>{
                    const { login, password } = this.refs;
                    loginFunc(login.value, password.value);
                }} >
                    <span className="corner corner-bottom"/>
                    Login
                    <span className="corner corner-top"/>
                </div>
            </div>
        )
    }
}
