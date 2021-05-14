import './App.css';
import React, { Component } from 'react';
import TaskForm from './components/TaskForm';
import Controls from './components/TaskControls';
import TaskList from './components/TaskList';
import * as actions from './actions/index';
import { connect } from 'react-redux';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sort : {
                by:'name', // order by name a-z , z-a 
                value:1
            }

        }
    }
    onAdd = () => {
        debugger;
        var { itemEditing} = this.props;
        if(itemEditing && itemEditing.id !== ''){
            this.props.onOpenForm();
        }else {
            this.props.onToggleForm();
        }
        
        this.props.onClearForm({
            id : '',
            name : '',
            status : false
        });
    }
    onShowForm = () => {
        this.props.onOpenForm();
    }
  render() {
    var { isDisplayForm } = this.props;
    
    return (
      <div className="container">
        <div className="text-center">
            <h1>Quản Lý Công Việc</h1>
            <hr/>
        </div>
        <div className="row">
            <div className={isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4':'col-xs-4 col-sm-4 col-md-4 col-lg-4'}>
            <TaskForm  />
            </div>
            <div className= { isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8':'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
                <button type="button" className="btn btn-primary"
                    onClick = { this.onAdd }
                
                >
                    <span className="fa fa-plus mr-5"></span>Thêm Công Việc
                </button>
                <button type="button" className="btn btn-danger ml-5"
                    onClick = { this.onGenarateData }
                >
                
                    Genarate Data
                </button>
                <div className="row mt-15">
                    <Controls />
                </div>
                <div className="row mt-15">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <TaskList />
                    </div>
                </div>
            </div>
        </div>
    </div>
      
    );
  }
}

const mapStateToProp = (state) => {
    return {
        isDisplayForm : state.isDisplayForm,
        itemEditing : state.itemEditing
    }
}
const mapDispathToProps = (dispatch,props) => {
    return {
        onToggleForm : () => {
            dispatch(actions.TOGGLE_FORM())
        },
        onOpenForm : () => {
            dispatch(actions.OPEN_FORM())
        },
        onClearForm : (task) => {
            dispatch(actions.EDIT_ITEM(task))
        }

    }
}
export default connect(mapStateToProp,mapDispathToProps)(App);
