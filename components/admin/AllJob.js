
import React, {Component} from 'react';
export default class AddJob extends Component {
    render(){
        const {frontRedux, history, match} = this.props;
        // console.log( frontRedux );
        const container = frontRedux.works.map((item, index)=>{
            const shortDescription = item.description.slice(0,115) + "...";
            const title = item.title.slice(0.20);
            return(
                <div className="work" key={item.id} onClick={()=>{
                    history.push(`${match.path}/${item.id}`);
                }}>

                    <div className="img">
                        {item.img ? <img src={item.img} alt=""/> : <i className="icon-briefcase"/>}
                    </div>
                    <div className="content">
                        <h2>{title}</h2>
                        <div className="info">
                            <p><i className="icon-commerical-building"/>{item.company}</p>
                            <p>{shortDescription}</p>
                            <p><i className="icon-fax"/>{item.tel}</p>
                            <p><i className="icon-comment"/>{item.email}</p>
                        </div>
                    </div>
                </div>
            )
        });
        return (
            <div className="admin-jobs">
                <h1>All Jobs</h1>
                <div className="add-new-job" onClick={()=>{
                    history.push(`${match.path}/new`);

                }}>Добавить Новую Работу</div>
                <div className="jobs-container">
                    { container }
                </div>
            </div>
        );
    }
}
