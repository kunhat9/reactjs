import React, { Component } from 'react';

class TaskItem extends Component {
    changeStatus = () => {
        this.props.changeStatus(this.props.index,this.props.tasks.status);
    }
    UpdateData = (event) => {
        event.preventDefault();
        var data = this.props.tasks;
        this.props.UpdateData(data);
    }
    onDelete = () => {
        this.props.onDelete(this.props.index);
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
                    onClick = { this.UpdateData}
                
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
export default TaskItem;
