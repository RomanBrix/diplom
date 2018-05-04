/*
 * Copyright (c) 2018. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 * Morbi non lorem porttitor neque feugiat blandit. Ut vitae ipsum eget quam lacinia accumsan.
 * Etiam sed turpis ac ipsum condimentum fringilla. Maecenas magna.
 * Proin dapibus sapien vel ante. Aliquam erat volutpat. Pellentesque sagittis ligula eget metus.
 * Vestibulum commodo. Ut rhoncus gravida arcu.
 */

import React, {Component} from 'react';

export default class AboutContent extends Component {
    render(){
        return(
            <div className="about-content">
                <div className="cont">
                    <div className="left">
                        <h3>О Сервисе</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus odio ipsum, a congue erat sagittis vel. Donec est nisl, hendrerit ut finibus ac, ultrices vel lectus. In hac habitasse platea dictumst. Praesent pharetra neque a nulla hendrerit placerat. Aenean commodo sit amet ante eget viverra. Vestibulum et nisl vel ante venenatis tempus quis ut lacus. In eleifend ex sit amet urna fringilla, at efficitur tortor vulputate.</p>
                        <div className="badges">
                            <div className="badge">
                                <i className="icon-calendar-1"/>
                                <p>Выполнение всегда в сроки</p>
                            </div>
                            <div className="badge">
                                <i className="icon-emo-thumbsup"/>
                                {/*<span>28</span>*/}
                                <p>Множество счастливых клиентов</p>
                            </div>
                            <div className="badge">
                                <i className="icon-globe"/>
                                <p>Работаем по всему миру</p>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="top">
                            <h3>Мы предлагаем</h3>
                             <p>Galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                        <div className="bottom">
                            <h3>Дополнительно</h3>
                            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam vehicula fringilla lectus, egestas efficitur justo elementum eget. Aliquam erat.volutpat.</p>
                        </div>
                        {/*<div className="btn"></div>*/}
                    </div>
                </div>
            </div>
        )
    }
}
