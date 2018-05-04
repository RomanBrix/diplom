/*
 * Copyright (c) 2018.  r.b.Corp
 */

import React, {Component} from 'react';

export default class Search extends Component {
    render() {
        const {search} = this.props;
        return (
            <div className="search">
                <input type="text" ref="searchInput" placeholder="Поиск..."/>
                {/*<div className="btns">*/}
                    <div className="btn-search" onClick={() => {
                        const {searchInput} = this.refs;
                        const valueArr = searchInput.value.split(' ');
                        if (valueArr[0] === "" && ( valueArr[1] === "" || valueArr[1] === undefined)) {
                            search(valueArr, true);
                        } else {
                            search(valueArr, false);
                        }
                    }}>Поиск
                    </div>
                    <div className="btn-clear" onClick={() => {
                        const {searchInput} = this.refs;
                        searchInput.value = "";
                        search([""], true);
                    }}>
                        Очистить
                    </div>
                {/*</div>*/}
            </div>
        )
    }
}
