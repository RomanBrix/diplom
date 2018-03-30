import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class List extends Component {
    render(){
        console.log(this.props);

        const { history, location, match } = this.props;
        const { works } = this.props.frontRedux;
        const container = works.map((item, index)=>{
            return(
                <div className="work" key={item.id} onClick={()=>{
                    history.push(`${match.path}/${item.id}`)
                }}>
                    <div className="img">
                        {item.img ? <img src={item.img} alt=""/> : <i className="icon-briefcase"/>}
                    </div>
                    <div className="content">
                        <h2>{item.title}</h2>
                        <div className="info">
                            <p>{item.shortDescr}</p>
                            <div className="btn">Детальней</div>
                        </div>
                    </div>
                </div>
            )
        });
        return(
            <div className="work-container">
                <div className="intro">
                    <h3>works</h3>
                    <h1>Доступные Вакансии</h1>
                </div>
                {/*<h2></h2>*/}
                <div className="list">
                    {container}
                </div>
            </div>
        )
    }
}
