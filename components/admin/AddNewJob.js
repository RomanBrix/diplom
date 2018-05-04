/*
 * Copyright (c) 2018.  r.b.Corp
 */

import React, {Component} from 'react';

export default class AddNewJob extends Component {

    contentForNEwJob(type){
        const AllSpaceAfterAndBeforeComma = /\s*,\s*/g;
        const { history, match, addNewWork, getWorks } = this.props;
        const {id} = match.params;

        const {
            companyName,
            workTitle,
            workCity,
            metaTags,
            workTel,
            workMail,
            workDescription,
            forStudent
        } = this.refs;
        // console.log(metaTags.value);
        // console.log(metaTags.value.replace(allSpaceAfterComma, ",").replace(allSpaceBeforeComma, ","));
        let student = '0';
        if(forStudent.checked) student = '1';
        const newContentForNewJob = {
            title: workTitle.value,
            description: workDescription.value,
            city: workCity.value,
            company: companyName.value,
            email: workMail.value,
            tel: workTel.value,
            meta: metaTags.value.replace(AllSpaceAfterAndBeforeComma, ","),
            student
        };
        if(type === "new") {
            console.log('It`s New Value');
            // console.log(newContentForNewJob);
            addNewWork('ADD_NEW_WORK', newContentForNewJob);
            setTimeout(()=>{
                getWorks('GetWorks');
                history.push(`/admin/all-job`);
            }, 500)

        }else if(type === 'change'){
            console.log('It`s for change');
            newContentForNewJob.id = id;
            addNewWork('CHANGE_WORK', newContentForNewJob);
            setTimeout(()=>{
                getWorks('GetWorks');
                // history.push(`/admin/all-job`);
            }, 500)
        }
    }

    onDelete(id){
        const { archivedWork,  history, getWorks } = this.props;
        console.log(id)
        const ok = confirm('Удалить?');
        if(ok){
            archivedWork('ARCHIVE_WORK', id);
            setTimeout(()=>{
                getWorks('GetWorks');
                history.push(`/admin/all-job`);
            }, 500)
        }
    }
    

    render(){
        const { history, location, match, frontRedux } = this.props;
        const {id} = match.params;
        let rendWork = "";
        if(id !== 'new') {
            frontRedux.works.map((item) => {
                if (item.id == id) { // special "=="
                    rendWork = item;

                }
            });
        }

        return(
            <div className="add-new-job">
                <div className="content">
                    <div className="slot companyName">
                        <label htmlFor="companyName"><i className="icon-commerical-building"/>Название Компании</label>
                        <input type="text" id="companyName" placeholder="F.I.T." defaultValue={rendWork.company} ref="companyName"/>
                    </div>

                    <div className="slot workTitle">
                        <label htmlFor="workTitle"><i className="icon-award"/>Название Должности</label>
                        <input type="text" id="workTitle" placeholder="React Developer" defaultValue={rendWork.title} ref="workTitle"/>
                    </div>

                    <div className="slot workCity">
                        <label htmlFor="workCity"><i className="icon-compass"/>Город</label>
                        <input type="text" id="workCity" placeholder="Kiev" defaultValue={rendWork.city} ref="workCity"/>
                    </div>

                    <div className="slot metaTags">
                        <label htmlFor="metaTags"><i className="icon-tag"/>Мета теги</label>
                        <input type="text" id="metaTags" placeholder="Kiev, It, React js, Js" defaultValue={rendWork.meta} ref="metaTags"/>
                    </div>

                    <div className="slot workTel">
                        <label htmlFor="workTel"><i className="icon-phone-outline"/>Телефон</label>
                        <input type="text" id="workTel" placeholder="+380730070032" defaultValue={rendWork.tel} ref="workTel"/>
                    </div>

                    <div className="slot workMail">
                        <label htmlFor="workMail"><i className="icon-mail"/>E-mail</label>
                        <input type="text" id="workMail" placeholder="work@gmail.com" defaultValue={rendWork.email} ref="workMail"/>
                    </div>

                    <div className="slot big-slot workDescription">
                        <label htmlFor="workDescription"><i className="icon-comment"/>Описание</label>
                        <textarea id="workDescription" placeholder="Описание Работы" defaultValue={rendWork.description} ref="workDescription"/>

                        <div className="for-student">
                            <label htmlFor="forStudent"><i className="icon-graduation-cap-1"/>Для студентов</label>
                            <input type="checkbox" id="forStudent" defaultChecked={ rendWork.student } ref="forStudent"/>
                        </div>
                    </div>
                    {
                        id == 'new' ?
                            <div className="btns">
                                <div className="btn btn-add" onClick={()=>{
                                    this.contentForNEwJob('new');
                                }}>
                                    Добавить
                                </div>
                            </div>
                            :
                            <div className="btns">
                                <div className="btn btn-save" onClick={()=>{
                                    this.contentForNEwJob('change');
                                }}>Сохранить</div>
                                <div className="btn btn-delete" onClick={()=>{
                                    this.onDelete(id);
                                }}>Архивировать</div>
                            </div>
                    }
                </div>
            </div>
        )
    }
}
