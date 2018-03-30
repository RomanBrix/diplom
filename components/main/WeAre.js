import React, {Component} from 'react';

export default class WeAre extends Component {
    render(){
        return(
            <div className="we-are">
                <div className="we-are-content">
                    <div className="top">
                        <h2>Привилегии нашего сервиса</h2>
                        <p>Этот сервис поможет с поиском работы</p>
                    </div>
                    <div className="center">
                        <div className="info-box">
                            <div className="icon">
                                <i className="icon-back-in-time"/>
                            </div>
                            <h4>Экономия Времени</h4>
                        </div>
                        <div className="info-box">
                            <div className="icon">
                                <i className="icon-check"/>
                            </div>
                            <h4>Проверенные Работодатели</h4>
                        </div>
                        <div className="info-box">
                            <div className="icon">
                                <i className="icon-wallet"/>
                            </div>
                            <h4>Хорошие Деньги</h4>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="text">
                            <h3>Мы поможем тебе с работой</h3>
                            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book urvived not only five centuries.</p>
                        </div>
                        <div className="btn">
                            Работать
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
