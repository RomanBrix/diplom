import React, {Component} from 'react';

export default class Article extends Component {
    render(){
        console.log(this.props);
        const { history, location, match } = this.props;
        const { works } = this.props.frontRedux;
        const { id } = match.params;

        const rend = works.map((item)=>{
            // console.log(item.id);
            console.log(id);

            if(item.id == id ) { // special "=="
                return (
                    <div className="article" key={item.id}>
                        <h1>{item.title}</h1>
                        <h3>{item.id}</h3>
                        <p>{item.description}</p>
                    </div>
                )
            }
        });
        return(
            <div className="one">
                <div className="back" onClick={()=>{
                    history.push(`/work`)
                }}>BACK</div>
                {rend}
            </div>
        )
    }
}
