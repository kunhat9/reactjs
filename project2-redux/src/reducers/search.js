import * as types from './../constants/ActionType';
var inititalState = "";
var myReducer = (state = inititalState, actions) => {
    switch(actions.type){
        case types.SEARCH : {
            
            return actions.keyword;
        }
        default : return state;
    }
}

export default myReducer;