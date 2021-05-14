import React, { Component } from 'react';
import TaskItem from './TaskItem';
class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state= {
            filterName :'',
            filterStatus : -1,
        }
    }
    changeStatus = (id,status) =>{
        this.props.changeStatus(id,status);
    }
    UpdateData = (data) =>{
        this.props.UpdateData(data);
    }
    onDelete = (id) => {
        this.props.onDelete(id);
    }
    onChangeFilter = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        
        this.setState({
            [name]:value
        });
        this.props.onFilter(
            name ==='filterName'? value :this.state.filterName,
            name ==='filterStatus'? value :this.state.filterStatus
        );
        
    }
  render() {
      var { tasks } = this.props; // var task = this.props.tasks
      var elementsTask = tasks.map((item, index) => {
          return <TaskItem 
              tasks={item}
              key = {item.id}
              index={index}
              changeStatus = { this.changeStatus }
              UpdateData = { this.UpdateData }
              onDelete = { this.onDelete }
          />;
      });
    return (
        <table className="table table-bordered table-hover mt-15">
            <thead>
                <tr>
                    <th className="text-center">STT</th>
                    <th className="text-center">Tên</th>
                    <th className="text-center">Trạng Thái</th>
                    <th className="text-center">Hành Động</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td>
                        <input 
                            type="text" 
                            className="form-control"
                            name="filterName"
                            value= {this.state.filterName}
                            onChange={this.onChangeFilter }
                        
                        />
                    </td>
                    <td>
                        <select className="form-control"  value={this.state.filterStatus}
                            onChange={ this.onChangeFilter }
                            name ="filterStatus"
                            >
                            <option value="-1">Tất Cả</option>
                            <option value="0">Ẩn</option>
                            <option value="1">Kích Hoạt</option>
                        </select>
                    </td>
                    <td></td>
                </tr>
                { elementsTask }
            </tbody>
        </table>
      
    );
  }
}
export default TaskList;
