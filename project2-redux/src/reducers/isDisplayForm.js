import * as types from './../constants/ActionType';
var inititalState = false;
var myReducer = (state = inititalState, actions) => {
    switch(actions.type){
        case types.TOGGLE_FORM : {
            return !state;
        }
        case types.OPEN_FORM : {
            return true;
        }
        case types.CLOSE_FORM : {
            return false;
        }
        
        default : return state;
    }
}

export default myReducer;