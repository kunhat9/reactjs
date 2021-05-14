import * as types from './../constants/ActionType';
var inititalState = {
    by : 'name',
    value : 1
};
var myReducer = (state = inititalState, actions) => {
    switch(actions.type){
        case types.SORT : {
            console.log('action :',actions);
            return actions.sort;
        }
        default : return state;
    }
}

export default myReducer;