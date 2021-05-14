
import * as types from './../constants/ActionType';

export const LIST_ALL = () => {
    return {
        type: types.LIST_ALL
    }
}
export const ADD_TASK = (task) => {
    return {
        type : types.ADD_TASK,
        task: task
    }
}
export const TOGGLE_FORM = () => {
    return {
        type : types.TOGGLE_FORM
    }
}
export const OPEN_FORM = () => {
    return {
        type : types.OPEN_FORM
    }
}
export const CLOSE_FORM = () => {
    return {
        type : types.CLOSE_FORM
    }
}
export const CHANGE_STATUS = (id) => {
    return {
        type : types.CHANGE_STATUS,
        id : id
    }
}
export const DELETE = (id) => {
    return {
        type : types.DELETE,
        id : id
    }
}
export const EDIT_ITEM = (task) => {
    return {
        type : types.EDIT_TASK,
        task :task
    }
}
export const CLEAR_TASK = () => {
    return {
        type : types.CLEAR_TASK
    }
}
export const FILTER_TABLE = (filter) => {
    return {
        type : types.FILTER_TABLE,
        filter : filter
    }
}
export const SEARCH = (keyword) => {
    return {
        type : types.SEARCH,
        keyword : keyword
    }
}
export const SORT = (sort) => {
    return {
        type : types.SORT,
        sort : sort
    }

}