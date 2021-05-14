import React, { Component } from 'react';
import  { connect } from 'react-redux';
import * as actions from './../actions/index';
class TaskItem extends Component {
    changeStatus = () => {
        this.props.onUpdateStatus(this.props.index);
    }
    onEditTask = (event) => {
        event.preventDefault();
        var data = this.props.tasks;

        this.props.onOpenForm();
        this.props.onEditTask(data);
    }
    onDelete = () => {
        this.props.onDelete(this.props.index);
        this.props.onCloseForm();
    }

  render() {
      var { tasks, index } = this.props;
    return (
        <tr>
            <td> { index +1 }</td>
            <td>{ tasks.name }</td>
            <td className="text-center">
                <span className= { tasks.status ?  'label label-success':'label label-danger' }
                    onClick={ this.changeStatus }
                >
                    { tasks.status ?  'Kích hoạt':'Không kích hoạt' }
                
                </span>
            </td>
            <td className="text-center">
                <button type="button" className="btn btn-warning"
                    onClick = { this.onEditTask}
                
                >
                    <span className="fa fa-pencil mr-5"></span>Sửa
                </button>
                &nbsp;
                <button type="button" className="btn btn-danger"
                    onClick = { this.onDelete}
                >
                    <span className="fa fa-trash mr-5"></span>Xóa
                </button>
            </td>
        </tr>
    );
  }
}

const mapStateToProp = (state) => {
    return {
        
    }
}
const mapDispathToProps = (dispatch,props) => {
    return {
        onUpdateStatus : (id) => {
            dispatch(actions.CHANGE_STATUS(id))
        },
        onDelete : (id) => {
            dispatch(actions.DELETE(id))
        },
        onCloseForm : () => {
            dispatch(actions.CLOSE_FORM())
        },
        onOpenForm : () => {
            dispatch(actions.OPEN_FORM())
        },
        onEditTask : (task) => {
            dispatch(actions.EDIT_ITEM(task))
        }

    }
}
export default connect(mapStateToProp,mapDispathToProps)(TaskItem);
