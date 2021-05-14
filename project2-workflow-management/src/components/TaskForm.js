import React, { Component } from 'react';

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
                id : '',
                name: '',
                status: true
            };
    }
    componentWillMount(){
        if(this.props.data){
            this.setState({
                id: this.props.data.id,
                name: this.props.data.name,
                status: this.props.data.status,
            });
        }
    }
    // nhan duoc khi thay doi lifecycle
    componentWillReceiveProps(nextProps){
        console.log(nextProps);
        if(nextProps && nextProps.data){
            this.setState({
                id: nextProps.data.id,
                name: nextProps.data.name,
                status: nextProps.data.status,
            });
        }else {
            this.setState({
                id: '',
                name: '',
                status: true,
            });
        } 
    }
    onCloseForm = () => {
        this.props.onCloseForm();
    }
    onSaveData = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.props.onAddData(this.state);
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
        this.setState({
            id :'',
            name: '',
            status: true
        });
    }
  render() {
      var { id }= this.state;
      console.log(id);
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
                        <button type="submit" className="btn btn-warning">Thêm</button>&nbsp;
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
export default TaskForm;
