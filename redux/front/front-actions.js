import axios from "axios";
import {front, URL_GET, URL_POST} from "../actionsAndUrl";
import {deleteCookie, setCookie} from "../../components/functions"

const AllSpaceAfterAndBeforeComma = /\s*,\s*/g;


export function testFunc(test) {
    return dispatch =>{
        console.log(test);
        dispatch({
            type:front.TEST,
            test
        })
    }
}

export function loginFunc(user, password) {
    return dispatch =>{
        // console.log(test);
        dispatch({type:front.REQUEST,});

        let login = false;
        if(user === "root" && password === 'root') {
            login = true;
            setCookie('login', 1, 100);
        }

       setTimeout( ()=>{
           dispatch({
               type:front.LOGIN,
               login
           })
       }, 1500)
    }
}

export function checkLoginAfterGlobalReload(hash) {
    return dispatch =>{
        // console.log(test);
        dispatch({type:front.REQUEST,});

        let login = false;

        login = true;

        dispatch({
            type:front.LOGIN,
            login
        })
    }
}

export function logOut() {
    return dispatch =>{
        // console.log(test);
        dispatch({type:front.REQUEST,});

        let login = false;

        login = false;
        deleteCookie('login');


        dispatch({
            type:front.LOGIN_OUT,
            login
        })
    }
}

export function getWorks(queryType) {
    return dispatch =>{
        // console.log(test);
        dispatch({type:front.REQUEST,});

        // let login = false;
        // login = true;
        axios.get(`${URL_GET}`,{ params:{queryType}})
            .then(function(res) {
                // console.log(res);
                let works = res.data.map((item)=>{
                    // let bigMeta = item.meta.split(', ').join(',').split(',');
                    // item.meta = item.meta.split(', ').join(',').split(',');
                    item.meta = item.meta.replace(AllSpaceAfterAndBeforeComma, ',').split(',');

                    return item;
                });
                dispatch({type: front.GET_WORKS, payload: works});

            })
            .catch((error) => {
                console.log(error);
            });
    }
}

export function getArchWorks(queryType) {
    return dispatch =>{
        dispatch({type:front.REQUEST,});

        axios.get(`${URL_GET}`,{ params:{queryType}})
            .then(function(res) {
                let works = res.data.map((item)=>{
                    item.meta = item.meta.replace(AllSpaceAfterAndBeforeComma, ',').split(',');
                    return item;
                });
                dispatch({type: front.GET_ARCH_WORKS, payload: works});

            })
            .catch((error) => {
                console.log(error);
            });
    }
}


export function addNewWork (queryType, content) {
    return dispatch =>{
        dispatch({type:front.REQUEST,});

        axios.post(`${URL_POST}`,{ queryType, content })
            .then((res) => {
                console.log(res);
                if(res.data === true) {
                    dispatch({type: front.ADD_NEW_WORK});
                }else{
                    alert('Произошла ошибка, попробуйте еще раз или обратитесь к администратору')
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

export function archivedWork (queryType, id) {
    return dispatch =>{
        dispatch({type:front.REQUEST,});

        axios.post(`${URL_POST}`,{ queryType, id })
            .then((res) => {
                console.log(res);
                if(res.data === true) {
                    dispatch({type: front.ADD_NEW_WORK});
                }else{
                    alert('Произошла ошибка, попробуйте еще раз или обратитесь к администратору')
                }
        })
            .catch((error) => {
                console.log(error);
            });
    }
}