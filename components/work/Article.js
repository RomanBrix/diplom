import React, {Component} from 'react';
import NotFound from "../layouts/NotFound";
import  CSSTransitionGroup   from 'react-addons-css-transition-group';

export default class Article extends Component {
    constructor(props){
        super(props);
        window.scrollTo(0, 0);
    }
    render() {

        const {history, location, match} = this.props;
        const {works} = this.props.frontRedux;
        const {id} = match.params;
        let rendWork = "";

        const rend = works.map((item) => {


            if (item.id == id) { // special "=="
                rendWork = item;

            }
        });
        if (rendWork === "") {
            return <NotFound/>
        }
        console.log(rendWork.meta);

        let metatags = "";
        for (let i = 0; i < rendWork.meta.length; i++) {
            if (i === rendWork.meta.length - 1) {
                metatags += rendWork.meta[i];
            } else {
                metatags += rendWork.meta[i] + ", ";
            }
        }

        return (
            <div className="one">
                <CSSTransitionGroup
                    transitionName="fade"
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={300}
                    transitionAppear={true}
                    transitionAppearTimeout={300}
                    className="animationGroupArticle"
                >
                <div className="head">
                    <div className="back" onClick={() => {
                        history.push(`/work`)
                    }}><i className="icon-left-hand"/> Назад
                    </div>
                    <h1>{rendWork.title}</h1>
                    <div className="contact">
                        {/*<div className="send">Отправить резюме</div>*/}
                        <a href={`tel:${rendWork.tel}`}> <i className="icon-fax"/>{ rendWork.tel }</a>
                        <a href={`mailto:${rendWork.email}`}><i className="icon-comment"/>{ rendWork.email }</a>
                    </div>
                </div>
                <div className="info">
                    <div className="info-content">
                        <div className="meta-tags">
                        <span className="meta">
                            <i className="icon-tag"/>
                            { metatags }
                        </span>
                            <span className="hash">
                            { rendWork.id }
                                <i className="icon-hashtag"/>
                        </span>
                        </div>
                        <div className="city">
                            <i className="icon-compass"/>
                            { rendWork.city }
                        </div>
                        {
                            rendWork.student === '1'?
                                <div className="student">
                                    <i className="icon-graduation-cap-1"/>
                                    Для студентов
                                </div>
                                : ""

                        }
                        <div className="description">
                            <h2>ОПИСАНИЕ ВАКАНСИИ</h2>
                            <p>{ rendWork.description }</p>
                        </div>
                        <div className="btn-container">
                            <div className="send">Отправить Резюме</div>
                        </div>
                    </div>
                </div>
                </CSSTransitionGroup>
            </div>
        )
    }
}
