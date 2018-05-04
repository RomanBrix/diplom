import Immutable from "immutable";
import { front } from "../actionsAndUrl";

const InitialState = Immutable.fromJS({
    request: false,
    test: "2",
    login: false,
    works:[
        {
            id: 1,
            title: "Front-end Developer",
            description: "Равным образом постоянный количественный рост и сфера нашей активности играет важную роль в формировании существенных финансовых и административных условий. Товарищи! сложившаяся структура организации требуют определения и уточнения новых предложений.\n" +
            "\n" +
            "Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям. Значимость этих проблем настолько очевидна, что консультация с широким активом представляет собой интересный эксперимент проверки направлений прогрессивного развития.\n" +
            "\n" +
            "Товарищи! новая модель организационной деятельности позволяет оценить значение систем массового участия. Таким образом начало повседневной работы по формированию позиции позволяет оценить значение новых предложений. С другой стороны рамки и место обучения кадров требуют от нас анализа позиций, занимаемых участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что рамки и место обучения кадров требуют определения и уточнения системы обучения кадров, соответствует насущным потребностям. Повседневная практика показывает, что сложившаяся структура организации обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития.\n" +
            "\n" +
            "Разнообразный и богатый опыт начало повседневной работы по формированию позиции позволяет оценить значение соответствующий условий активизации. С другой стороны дальнейшее развитие различных форм деятельности играет важную роль в формировании позиций, занимаемых участниками в отношении поставленных задач. С другой стороны укрепление и развитие структуры влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками в отношении поставленных задач.",
            city: "Киев",
            company: 'corn',
            email: "mail@mail.com",
            tel: "380631082584",
            meta: ["front-end","back-end",'fullstack', 'web'],
            student: true
        }
        ],
    archivedWorks:[
        {
            id: 1,
            title: "First",
            description: "FirstFirstFirstFirstFirst FirstFirstFirstFirst FirstFirst FirstFirstFirst",
            city: "short First",
            company: 'alisa',
            email: "mail@mail.com",
            tel: "380631082584",
            meta: ["front-end","back-end",'fullstack', 'web']
        }
    ]
});

const frontReducer = (state = InitialState, action) => {
    switch (action.type) {
        case  front.REQUEST:
            return state.set('request', true);
            return state = {
                request: true,
                works: state.works,
                login: state.login,
                test: state.test,
                archivedWorks: state.archivedWorks
            };
        case front.TEST:
            return state.set('test', action.test);

        case front.LOGIN:
           // const newState =  state.set('login', action.login,);
            return state.set('login', action.login,).set('request', false);

        case front.LOGIN_OUT:
            // const newState =  state.set('login', action.login,);
            return state.set('login', action.login,).set('request', false);

        case front.GET_WORKS:
            // const newState =  state.set('works', action.payload,);
            return state.set('works', action.payload,).set('request', false);

        case front.GET_ARCH_WORKS:
            // const newState =  state.set('works', action.payload,);
            return state.set('archivedWorks', action.payload,).set('request', false);
        case front.ADD_NEW_WORK:
            return state.set('request', false);

        default: return state;
    }
};

export default frontReducer;