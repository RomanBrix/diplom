import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Search from "./Search";
import  CSSTransitionGroup   from 'react-addons-css-transition-group';
import $ from 'jquery';

export default class List extends Component {

    constructor(props) {
        super(props);
        this.state ={
            countOfWorks: 6,
            currentPage: 1,
            works: props.frontRedux.works
            // pagesCount: Math.round(works.length/4)
       };
        window.scrollTo(0, 0);

    }

    handlePage(n){
        this.setState({
            currentPage: n
        })
    }


    search(text, clear){
        const { works } = this.props.frontRedux;
        console.log(text[1]);

        if(!clear) {
            const filterWorks = works.filter((work) => {
                // console.log(work.meta);
                for (let i = 0; i < work.meta.length; i++) {
                    for (let j = 0; j < text.length; j++) {
                        if (work.meta[i] === text[j]) {
                            return work;
                        }
                    }
                }
            });
            // console.log(filterWorks);
            this.setState({
                works: filterWorks
            })
        }else{
            this.setState({
                works: works
            })
        }
    }

    render(){
        const { history, location, match } = this.props;
        // const { works } = this.props.frontRedux;
        const { countOfWorks, currentPage, works } = this.state;

        const pagesCount = Math.ceil(works.length/countOfWorks);

        //pagination counter container
        let paginationCounter = [];
        for(let i = 1; i <= pagesCount; i++){
            let className = "pagination-counter";
            if(i === 1) className = "pagination-counter pag-active";

            const div = <div className={className} key={i} onClick={({target})=>{
                $('.pag-active').removeClass('pag-active');
                $(target).toggleClass('pag-active');
                this.handlePage(i);
                window.scrollTo(0, 0);

            }}>{i}</div>;


            paginationCounter.push(div);
        };

        // works container
        const container = works.map((item, index)=>{
            const shortDescription = item.description.slice(0,115) + "...";
            const title = item.title.slice(0.20);
            return(
                <div className="work" key={item.id} onClick={()=>{
                    history.push(`${match.path}/${item.id}`)
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

        /*
            Pagination Container of works
        */
        const lastItem = currentPage * countOfWorks;
        const firstItem = lastItem - countOfWorks;

        let paginationContainer = [];
        for(let i = 0; i< container.length; i++){
            if(i >= firstItem && i <  lastItem){
                paginationContainer.push(container[i]);
            }
        }

        return(
            <div className="work-container">
                <CSSTransitionGroup
                    transitionName="fade"
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={300}
                    transitionAppear={true}
                    transitionAppearTimeout={300}
                    className="animationGroup"
                >
                <div className="intro">
                    <h3>works</h3>
                    <h1>Доступные Вакансии</h1>
                </div>
                <Search search={this.search.bind(this)}/>
                <div className="list">
                    {
                        paginationContainer.length === 0 ?
                            <div className="searchNotFound">Результатов по запросу не найдено! Попробуйте изменить поиск</div>
                            :
                            paginationContainer
                    }
                </div>
                <div className="pagination">
                    <div className="pagination-counter pagination-back" onClick={()=>{
                        if(!(currentPage === 1)) {
                            const pagActive = $('.pag-active');
                            const prev = $(".pag-active").prev(".pagination-counter");
                            $(prev[0]).toggleClass('pag-active');
                            $(pagActive[0]).removeClass('pag-active');
                            this.setState({
                                currentPage: currentPage - 1,
                            })
                            window.scrollTo(0, 0);
                        }
                    }}>
                        &#60;
                    </div>
                    { paginationCounter }
                    <div className="pagination-counter pagination-forward" onClick={()=>{
                        if(!(currentPage === pagesCount)) {
                            const pagActive = $('.pag-active');
                            const next = $('.pag-active + .pagination-counter');
                            $(next[0]).toggleClass('pag-active');
                            $(pagActive[0]).removeClass('pag-active');

                            this.setState({
                                currentPage: currentPage + 1,
                            })
                            window.scrollTo(0, 0);

                        }
                    }}>
                        &#62;
                    </div>
                </div>
                </CSSTransitionGroup>

            </div>
        )
    }
}
