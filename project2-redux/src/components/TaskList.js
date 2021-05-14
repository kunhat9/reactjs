import React, { Component } from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';
import * as actions from './../actions/index';
class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state= {
            filterName :'',
            filterStatus : -1,
        }
    }
    UpdateData = (data) =>{
        this.props.UpdateData(data);
    }
    onChangeFilter = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.props.onFilterTable(
            { 
                name : name ==='filterName'? value :this.state.filterName,
                status : name ==='filterStatus'? value :this.state.filterStatus
            });
        this.setState({
            [name]:value
        });    
    }
  render() {
      var { tasks, filterTable, keyword, sort } = this.props; // var task = this.props.tasks
      console.log(keyword);
      // filter on table 
      if(filterTable){
        if(filterTable.name){
            tasks = tasks.filter((tasks) =>{
                return tasks.name.toLowerCase().indexOf(filterTable.name) !== -1;
            });
        }
        tasks = tasks.filter((tasks) => {
            if(parseInt(filterTable.status) === -1){
                return tasks;
            }else {
                return tasks.status === (parseInt(filterTable.status) === 1? true:false);
            }
        });
        if(keyword){
            tasks = tasks.filter((tasks) =>{
                return tasks.name.toLowerCase().indexOf(keyword) !== -1;
            });
        }
        if(sort){
            if(sort.by ==='name'){
                // name
                tasks = tasks.sort((tasks1, tasks2) =>{
                    if(tasks1.name > tasks2.name){
                        return sort.value;
                    }else if(tasks1.name < tasks2.name){
                        return -sort.value;
                    }else return 0;
                });
            }else{
                // status
                tasks = tasks.sort((tasks1, tasks2) =>{
                    if(tasks1.status > tasks2.status){
                        return -sort.value;
                    }else if(tasks1.status < tasks2.status){
                        return sort.value;
                    }else return 0;
                });
            }
        }
    }
      var elementsTask = tasks.map((item, index) => {
          return <TaskItem 
              tasks={item}
              key = {item.id}
              index={index}
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


const mapStateToProp = (state) => {
    return { 
        tasks : state.tasks,
        filterTable : state.filterTable,
        keyword : state.search,
        sort : state.sort
    }
};

const mapDispathToProps = (dispatch,props) => {
    return {
        onFilterTable : (filter) =>  {
            dispatch(actions.FILTER_TABLE(filter))
        }
    }
}

export default connect(mapStateToProp,mapDispathToProps)(TaskList);
