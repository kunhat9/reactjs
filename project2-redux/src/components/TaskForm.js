import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';
class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            status: false,
        };
    }
    componentWillMount(){
        if(this.props.itemEditing && this.props.itemEditing.id !== null){
            this.setState({
                id: this.props.itemEditing.id,
                name: this.props.itemEditing.name,
                status: this.props.itemEditing.status,
            });
        }else {
            this.setState({
                id: '',
                name: '',
                status: true,
            });
        }
    }
    // nhan duoc khi thay doi lifecycle
    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.itemEditing){
            this.setState({
                id: nextProps.itemEditing.id,
                name: nextProps.itemEditing.name,
                status: nextProps.itemEditing.status,
            });
        }else {
            this.onClear();
        } 
    }
    onCloseForm = () => {
        this.props.onCloseForm();
    }
    onSaveData = (event) => {
        event.preventDefault();
        // using redux when click save
        this.props.onAddTask(this.state);
        // cancel && close form 
        this.onClear();
        this.onCloseForm();
    }
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]:value
        });
    }
    onClear = () => {
        console.log('vao claer');
        this.setState({
            id :'',
            name: '',
            status: true
        });
    }
  render() {
    var { id }= this.state;
    if(!this.props.isDisplayForm) return null;
    return (
        <div className="panel panel-warning">
            <div className="panel-heading">
                <h3 className="panel-title">
                { id === '' || id === null || id === undefined ? 'Thêm công việc':'Cập nhật công việc'}
                    <span className="fa fa-times-circle text-right" onClick={ this.onCloseForm }></span>
                </h3>
               
            </div>
            <div className="panel-body">
                <form onSubmit={ this.onSaveData }>
                    <input type="hidden" value={ this.state.id} name="id" onChange={ this.onChange } />
                    <div className="form-group">
                        <label>Tên :</label>
                        <input type="text" className="form-control" 
                            name="name"
                            value={ this.state.name }
                            onChange={ this.onChange }
                        />
                    </div>
                    <label>Trạng Thái :</label>
                    <select className="form-control" required="required"  
                            value={ this.state.status }
                            onChange={ this.onChange }>
                        <option value={true}>Kích Hoạt</option>
                        <option value={false}>Ẩn</option>
                    </select>
                    <br/>
                    <div className="text-center">
                        <button type="submit" className="btn btn-warning">Lưu lại</button>&nbsp;
                        <button type="button" className="btn btn-danger"
                            onClick = { this.onClear }
                        
                        >Hủy Bỏ</button>
                    </div>
                </form>
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
        onAddTask : (task) => {
            dispatch(actions.ADD_TASK(task))
        }, 
        onCloseForm : () => {
            dispatch(actions.CLOSE_FORM())
        },
        onClearForm : () => {
            dispatch(actions.CLEAR_TASK())
        }

    }
}
export default connect(mapStateToProp,mapDispathToProps)(TaskForm);
