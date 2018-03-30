import React, {Component} from 'react';
import superman from "../../css/superMan.svg";
export default class About extends Component {
    render(){
        const { inSearch, offSearch } =this.props;

        return(
            <div className="main-about">
                <div className="left">
                    <div className="left-content">
                        <h2>О Сервисе</h2>
                        <h4>наш сервис <b>помогает</b> найти работу</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. It to make a type specimen book.</p>
                        <div className="btn">Читать дальше</div>
                        <div className="mini-icons">
                            <div className="icon-column">
                                <i className="icon-briefcase-1"/>
                                <div>
                                    <span className="number">
                                        {offSearch}
                                    </span>
                                    <p>Людей уже нашли работу</p>
                                </div>
                            </div>

                            <div className="icon-column">
                                <i className="icon-search"/>
                                <div>
                                    <span className="number">
                                        {inSearch}
                                    </span>
                                    <p>Компаний ищут работников</p>
                                </div>
                            </div>

                            <div className="icon-column">
                                <i className="icon-award"/>
                                <div>
                                    <span className="number">
                                        5
                                    </span>
                                    <p>Лет мы помогаем найти работу</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <img src={superman} alt="superman"/>
                </div>
            </div>
        )
    }
}
