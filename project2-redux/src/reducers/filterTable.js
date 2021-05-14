import * as types from './../constants/ActionType';
var inititalState = {
    name :'',
    status : -1
};
var myReducer = (state = inititalState, actions) => {
    switch(actions.type){
        case types.FILTER_TABLE : {
            return actions.filter;
        }
        default : return state;
    }
}

export default myReducer;