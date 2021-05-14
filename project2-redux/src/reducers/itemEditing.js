import * as types from './../constants/ActionType';
var inititalState = { 
    id : '',
    name : '',
    status : false
};
var myReducer = (state = inititalState, actions) => {
    switch(actions.type){
        case types.EDIT_TASK : {
            return actions.task;
        }
        case types.CLEAR_TASK : {
            return {};
        }
        default : return state;
    }
}

export default myReducer;