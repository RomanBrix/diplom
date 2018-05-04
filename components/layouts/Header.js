import React, {Component} from 'react';
import "../../css/scss/Header.scss";
import { NavLink, Link } from 'react-router-dom';

export default class Header extends Component {
    render(){
        const { adminLogin } = this.props;

        return(
            <div className="header">
                <ul className="menu">
                    {/*<li>*/}
                        {/*<NavLink to="/" activeStyle={{ color: 'cyan' }} exact>Main</NavLink>*/}
                    {/*</li>*/}
                    <li>
                        <div className="logo-box">
                            <Link to="/">
                                <div className="logo">
                                    R
                                </div>
                                RealRB
                            </Link>
                        </div>
                    </li>
                    <li>
                        <NavLink to="/about" activeStyle={{ color: 'rgba(126, 89, 226, 1)' }}>Инфо</NavLink>
                    </li>
                    <li>
                        <NavLink to="/work" activeStyle={{ color: 'rgba(126, 89, 226, 1)' }}>Работа</NavLink>
                    </li>
                    {/*<li>*/}
                        {/*<NavLink to="/archive" activeStyle={{ color: 'rgba(126, 89, 226, 1)' }}>*/}
                            {/*Архив*/}
                        {/*</NavLink>*/}
                    {/*</li>*/}
                    <li>
                        <NavLink to="/contacts" activeStyle={{ color: 'rgba(126, 89, 226, 1)' }}>Контакты</NavLink>
                    </li>
                    {
                        adminLogin ?
                            <li>
                                <NavLink to="/admin" activeStyle={{ color: 'rgba(126, 89, 226, 1)' }}>Admin</NavLink>
                            </li>
                            :
                            null
                    }
                    {/*<li>*/}
                        {/*<NavLink to="/admin" activeStyle={{ color: 'rgba(126, 89, 226, 1)' }}>Admin</NavLink>*/}
                    {/*</li>*/}
                </ul>
                <ul className="fast-contact">
                    <li>
                        <a href="https://telegram.me/Roman_Brix" target="_blank">
                            <i className="icon-paper-plane"/>
                            <div>
                                <span>Напиши</span>
                                <span>@Roman_Brix</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="tel:+380730070032">
                            <i className="icon-phone-outline"/>
                            <div>
                                <span>Позвони</span>
                                <span>380 73 007 003 2</span>
                            </div>
                        </a>
                    </li>
                </ul>

            </div>
        )
    }
}
