import Immutable from "immutable";
import { front } from "../actionsAndUrl";

const InitialState = Immutable.fromJS({
    request: false,
    test: "2",
    works:[
        {
            id: 1,
            title: "First",
            description: "FirstFirstFirstFirstFirst FirstFirstFirstFirst FirstFirst FirstFirstFirst",
            shortDescr: "short First"
        },
        {
            id: 2,
            title: "Second",
            description: "SecondSecondSecond SecondSecond SecondSecond SecondSecondSecond",
            shortDescr: "short Second"
        },
        {
            id: 3,
            title: "Tri",
            description: "SecondSecondSecond SecondSecond SecondSecond SecondSecondSecond",
            shortDescr: "short Second"
        },
        {
            id: 4,
            title: "Cheturi",
            description: "SecondSecondSecond SecondSecond SecondSecond SecondSecondSecond",
            shortDescr: "short Second"
        },
        {
            id: 5,
            title: "Pyat`",
            description: "SecondSecondSecond SecondSecond SecondSecond SecondSecondSecond",
            shortDescr: "short Second"
        },
        {
            id: 6,
            title: "СИКС`",
            description: "SecondSecondSecond SecondSecond SecondSecond SecondSecondSecond",
            shortDescr: "short Second"
        },
        {
            id: 7,
            title: "СЕВЕН`",
            description: "SecondSecondSecond SecondSecond SecondSecond SecondSecondSecond",
            shortDescr: "short Second"
        },
        {
            id: 8,
            title: "ЭЙТ",
            description: "SecondSecondSecond SecondSecond SecondSecond SecondSecondSecond",
            shortDescr: "short Second"
        }
        ],
    archivedWorks:[
        {
            id: 1,
            title: "First",
            description: "FirstFirstFirstFirstFirst FirstFirstFirstFirst FirstFirst FirstFirstFirst",
            shortDescr: "short First"
        },
        {
            id: 2,
            title: "Second",
            description: "SecondSecondSecond SecondSecond SecondSecond SecondSecondSecond",
            shortDescr: "short Second"
        },
        {
            id: 3,
            title: "Tri",
            description: "SecondSecondSecond SecondSecond SecondSecond SecondSecondSecond",
            shortDescr: "short Second"
        },
        {
            id: 4,
            title: "Cheturi",
            description: "SecondSecondSecond SecondSecond SecondSecond SecondSecondSecond",
            shortDescr: "short Second"
        },
        {
            id: 5,
            title: "Pyat`",
            description: "SecondSecondSecond SecondSecond SecondSecond SecondSecondSecond",
            shortDescr: "short Second"
        },
        {
            id: 6,
            title: "6",
            description: "SecondSecondSecond SecondSecond SecondSecond SecondSecondSecond",
            shortDescr: "short Second"
        },

    ]
});

const frontReducer = (state = InitialState, action) => {
    switch (action.type) {
        case  front.REQUEST:
            return state.set('request', true);

        case front.TEST:
            return state.set('test', action.test);

        default: return state;
    }
};

export default frontReducer;