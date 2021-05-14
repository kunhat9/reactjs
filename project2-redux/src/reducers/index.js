import { combineReducers } from 'redux';

import tasks from './tasks';
import isDisplayForm from './isDisplayForm';
import itemEditing from './itemEditing';
import filterTable from './filterTable';
import search from './search';
import sort from './sort';
const myReducer = combineReducers({
    tasks : tasks,
    itemEditing : itemEditing,
    isDisplayForm : isDisplayForm,
    filterTable : filterTable,
    search : search,
    sort : sort,
});
export default myReducer;