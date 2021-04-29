import './App.css';
import React, { Component } from 'react';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username : '',
      password :'',
      description :'',
      status : 0,
      gender : '1',
      check : false,
    };
  }
  onHandleChange = (event) => {
    // multiple input
    var target = event.target;
    var name = target.name;
    var value = target.type ==='checkbox'? target.checked : target.value;
    this.setState({
      [name]: value
    });
  }
  onHandleSubmit = (event) => {
    event.preventDefault(); // cancel submit event
    console.log(this.state);
  }
  render() {
    return (
      
      <div className="container mt-30">
        <div className="row">
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <div className="panel panel-primary">
                <div className="panel-heading">
                  <h3 className="panel-title">Form</h3>
                </div>
                <div className="panel-body">
                <form onSubmit= { this.onHandleSubmit } >             
                  <div className="form-group">
                    <label htmlFor="">UserName</label>
                    <input type="text" className="form-control" id="" 
                    name='username' 
                    placeholder="Input field" 
                    onChange = { this.onHandleChange }

                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Password</label>
                    <input type="text" className="form-control" id="" 
                    name='password' 
                    placeholder="Input field" 
                    onChange = { this.onHandleChange }

                    />
                  </div>
                    <div className="form-group">
                    <label htmlFor="">Mô tả</label>
                    <textarea type="text" className="form-control" id="" 
                    name='description'
                    placeholder="Input field" 
                    onChange = { this.onHandleChange }

                    ></textarea>
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Trạng thái</label>
                      <select name="" id="input" className="form-control" name='status' onChange = { this.onHandleChange } required="required" value= { this.state.status } >
                        <option value={1}>Kích hoạt</option>
                        <option value={0}>Không kích hoạt</option>
                      </select>
                    </div>
                    <div className="form-group">
                    <label htmlFor="">Giới tính</label>
                      <div className="radio">
                      <label>
                        <input type="radio" name="gender" id="input" onChange = { this.onHandleChange } value= '1' checked={ this.state.gender  === '1'}/>
                        Nam
                      </label>
                      <label>
                        <input type="radio" name="gender" id="input" onChange = { this.onHandleChange } value= '0' checked={ this.state.gender  === '0' } />
                        Nữ
                      </label>
                    </div>
                    </div>
                    <div className="form-group">
                    <label htmlFor="">Checkbox</label>
                      <div className="radio">
                      <label>
                      
                        Check
                      </label>
                      <input type="checkbox" name="check" id="" onChange = { this.onHandleChange } checked={ this.state.check } />
                    </div>
                    </div>
                  <button type="submit" className="btn btn-primary">Lưu lại</button> &nbsp;
                  <button type="reset" className="btn btn-warning">Xóa trắng</button>
                </form>
              </div>
            </div>       
          </div>
        </div>
      </div>
      



      
    );
  }
}


export default App;
