import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-info">
                    <div className="left">
                        <div className="logo">
                            R
                        </div>
                        <a href="https://goo.gl/maps/Rha8C4APQ3z" target="_blank" className="footer-contacts">
                            Украина, Киев, ул. Ванды василевской 24
                        </a>
                        <a href="mailto:stetcukroman@gmail.com" className="footer-contacts">
                            StetcukRoman@gmail.com
                        </a>
                        <a href="tel:+380730070032" className="footer-contacts">+380 73 007 003 2</a>
                        <div className="socials">
                            <a href="https://www.instagram.com/r.b.corp" target="_blank"><i className="icon-instagram"/></a>
                            <a href="https://telegram.me/Roman_Brix" target="_blank"><i
                                className="icon-paper-plane"/></a>
                        </div>
                    </div>
                    <div className="right">
                        <div className="top">
                            <h4>Навигация:</h4>
                            <ul>
                                <li>
                                    <Link to="/">
                                        Главная
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about">
                                        Инфо
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/work">
                                        Работа
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/archive">
                                        Архив
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contacts">
                                        Контакты
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="bottom">
                            <h3>Подпишись на новостную рассылку</h3>
                            <div className="input">
                                <input type="mail" placeholder="Введите E-mail адрес"/>
                                <div className="btn-send">Подписаться</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    Copyright &copy; 2018 R.B.Corp
                </div>
            </div>
        )
    }
}
