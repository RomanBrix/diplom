import React, {Component} from 'react';
import $ from 'jquery';

export default class Intro extends Component {
    constructor(props){
        super(props);
        this.state = {
            slider: true,
            intervalForSlider: 1500
        }
    }

    handleChangeSlide(slide){
        // this.setState({
        //     slide
        // });
        const slide1 = $('#slide1');
        const slide2 = $('#slide2');
        const slide3 = $('#slide3');
        $('.circle-active').removeClass('circle-active');

        switch (slide){
            case 1:
                slide1.css({
                    'bottom':'0',
                    // 'bottom'
                });
                slide2.css('bottom','-100%');
                slide3.css('bottom','-200%');
                $('#circle1').addClass('circle-active');
                break;

            case 2:
                slide1.css('bottom','100%');
                slide2.css('bottom','0');
                slide3.css('bottom','-100%');
                $('#circle2').addClass('circle-active');
                break;

            case 3:
                slide1.css('bottom','200%');
                slide2.css('bottom','100%');
                slide3.css('bottom','0');
                $('#circle3').addClass('circle-active');
                break;
        }
    }

    render(){
        const { history } = this.props;
        const { intervalForSlider, slider } = this.state;
        // let i = 0;
        // console.log(slider === false);
        // if(slider === false) {
        //     setInterval(() => {
        //         console.log(i);
        //         console.log(slider);
        //         if (i === 3) {
        //             console.log("ravno!");
        //             // this.setState({slider: false});
        //             this.setState({
        //                 slider: true
        //             });
        //         }
        //         i++;
        //     }, intervalForSlider);
        // }else{
        //     console.log("off");
        // }


        return(
            <div className="intro">
                <div className="slide" id="slide1">
                    <div className="intro-box">
                        <div className="intro-box-content">
                            <p>Узнай все о сервисе!</p>
                            <h2>Детальная Информация</h2>
                            <div className="btn intro-box-btn" onClick={()=>{
                                history.push(`/about`)
                            }}>Читать</div>
                        </div>
                    </div>
                    <i className="icon-info-outline"/>
                </div>

                <div className="slide" id="slide2">
                    <div className="intro-box">
                        <div className="intro-box-content">
                            <p>Найди работу уже сейчас!</p>
                            <h2>Поиск Вакансий</h2>
                            <div className="btn intro-box-btn" onClick={()=>{
                                history.push(`/work`)
                            }}>Искать</div>
                        </div>
                    </div>
                    <i className="icon-search"/>
                </div>

                <div className="slide" id="slide3">
                    <div className="intro-box">
                        <div className="intro-box-content">
                            <p>Задай вопрос!</p>
                            <h2>Контакты</h2>
                            <div className="btn intro-box-btn" onClick={()=>{
                                history.push(`/contacts`)
                            }}>Спросить</div>
                        </div>
                    </div>
                    <i className="icon-users-outline"/>
                </div>
                <div className="slider-config">
                    <div className="circle circle-active" id="circle1" onClick={()=> this.handleChangeSlide(1)}/>
                    <div className="circle" id="circle2" onClick={()=> this.handleChangeSlide(2)}/>
                    <div className="circle" id="circle3" onClick={()=> this.handleChangeSlide(3)}/>
                </div>
            </div>
        )
    }

}
