import * as types from './../constants/ActionType';

var data =JSON.parse(localStorage.getItem('task'));

var inititalState = data ? data :[];

var s4 = () =>{
    return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
}
var genarateID = () =>{
    return s4()+ s4()+'-'+ s4()+'-'+ s4()+'-'+ s4()+s4()+s4()+s4();
}

var myReducer = (state = inititalState, actions) => {
    switch(actions.type){
        case types.LIST_ALL : {
            return state;
        }
        case types.ADD_TASK : {
            debugger;
            // check xem co id chua
            
            var data = actions.task;
            if(data){
                var taskItem = state.filter(x=>x.id === data.id);
                if(taskItem.length >0){
                    // update
                    var index = state.indexOf(taskItem[0]);
                    if(index !== -1){
                        state[index] = {
                            ... state[index],
                            name : data.name,
                            status : data.status,
                        }
                       
                    }           
                }else {
                    // add
                    data.id = genarateID();
                    state.push(data);
                }
                localStorage.removeItem('task');
                localStorage.setItem('task',JSON.stringify(state));
                return [...state];
            }
            
        }
        case types.CHANGE_STATUS : {
            console.log(actions);
            if(actions.id !== null && actions.id !== undefined){
                // check xem co id chua
            var item = state[actions.id];
                if(item){
                    state[actions.id] = {
                        ...state[actions.id], // copy
                        status : !state[actions.id].status
                    }
                }
            }
            // set lai localStorage
            localStorage.removeItem(state);
            localStorage.setItem('task',JSON.stringify(state));
            return [...state];
        }
        case types.DELETE : {
            console.log(actions);
            debugger;
            if(actions.id !== null && actions.id !== undefined){
                // check xem co id chua
            var item = state[actions.id];
                if(item){
                    state.splice(actions.id,1);
                }
            }
            // set lai localStorage
            localStorage.removeItem(state);
            localStorage.setItem('task',JSON.stringify(state));
            return [...state];
        }
        default : return state;
    }
}

export default myReducer;