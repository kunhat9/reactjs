import './App.css';
import React, { Component } from 'react';
class App extends Component {
  showInfoProduct(product){
      return <h3>
      ID : {product.id} <br/>
      Name : {product.name} <br/>
      Price : {product.price} <br/>
      Status : {product.status == 1 ? 'Active':'Pending'} <br/>
    </h3>
  }
  render() {
    var a = 5;
    var str = "Nhật LV";
    var b = 11;
    var product = {
      id :"1",
      name : "iphone X",
      price :"15.000.000",
      status : 2
    };
    var users = [
      {
        id : 1,
        ten : 'Nguyễn Văn A',
        tuoi : 11
      },
      {
        id : 2,
        ten : 'Nguyễn Văn B',
        tuoi : 12
      },
      {
        id : 3,
        ten : 'Nguyễn Văn C',
        tuoi : 13
      },
    ];
    var elements = users.map((users, index) => {
      return <div key={users.id}>
        <h2> {users.ten}</h2>
        <span>Tuổi : {users.tuoi}</span>       
      </div>
    }) // copy array de clone tung object
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <a className="navbar-brand">Title</a>
          <ul className="nav navbar-nav">
            <li className="active">
              <a>Home</a>
            </li>
            <li>
              <a>Link</a>
            </li>
          </ul>
        </nav>
        <div className="ml-30">
          a : {a}
          <h3>{str}</h3>
          <label> a + b = {a+b}</label>
          {this.showInfoProduct(product)}
          <br/>
          <hr/>
          {elements}
        </div>

      </div>
      
      
    )
  }
}

export default App;
